import { NextRequest, NextResponse } from "next/server";
import { isLocale } from "@/i18n/config";

/**
 * Redirect /en/homepage, /en/homepage/homepage/..., /ar/homepage/... to canonical /en or /ar
 * to fix the infinite homepage URL loop.
 */
async function redirectToLocale(request: NextRequest, locale: string) {
  const loc = isLocale(locale) ? locale : "en";
  const url = new URL(`/${loc}`, request.url);
  url.search = request.nextUrl.search;
  return NextResponse.redirect(url, 307);
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ locale: string; rest?: string[] }> },
) {
  const { locale } = await context.params;
  return redirectToLocale(request, locale);
}

export async function HEAD(
  request: NextRequest,
  context: { params: Promise<{ locale: string; rest?: string[] }> },
) {
  const { locale } = await context.params;
  return redirectToLocale(request, locale);
}
