import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  LOCALE_COOKIE_NAME,
  detectLocaleFromAcceptLanguage,
  extractLocaleFromPathname,
  isLocale,
  type Locale,
} from "@/i18n/config";

function buildRedirectResponse(
  request: NextRequest,
  pathname: string,
  locale: Locale,
): NextResponse {
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = pathname;
  const response = NextResponse.redirect(redirectUrl, 307);
  response.cookies.set(LOCALE_COOKIE_NAME, locale, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });
  response.headers.set("Cache-Control", "no-store");
  return response;
}

/** Paths like /en/homepage or /en/homepage/homepage/... — redirect to canonical /en or /ar */
function stripHomepageRunaway(pathname: string): string | null {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (!/^\/(en|ar)\/homepage/.test(normalized)) {
    return null;
  }
  const match = normalized.match(/^\/(en|ar)/);
  return match ? `/${match[1]}` : null;
}

export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  const canonical = stripHomepageRunaway(pathname);
  if (canonical) {
    return buildRedirectResponse(request, canonical, canonical.slice(1) as Locale);
  }

  const localeFromPath = extractLocaleFromPathname(pathname);
  const localeFromCookie = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
  const preferredLocale = isLocale(localeFromCookie)
    ? localeFromCookie
    : detectLocaleFromAcceptLanguage(request.headers.get("accept-language"));

  if (!localeFromPath) {
    const localizedPath = `/${preferredLocale}`;
    return buildRedirectResponse(request, localizedPath, preferredLocale);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-falak-locale", localeFromPath);
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.cookies.set(LOCALE_COOKIE_NAME, localeFromPath, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });
  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
