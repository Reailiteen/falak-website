import type { Locale } from "@/lib/landing/types";

export type { Locale };

export const LOCALES: ReadonlyArray<Locale> = ["en", "ar"];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE_NAME = "falak_locale";

export function isLocale(value: string | null | undefined): value is Locale {
  if (!value) {
    return false;
  }

  return LOCALES.includes(value as Locale);
}

export function getLocaleDirection(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function detectLocaleFromAcceptLanguage(
  acceptLanguageHeader: string | null,
): Locale {
  if (!acceptLanguageHeader) {
    return DEFAULT_LOCALE;
  }

  const candidates = acceptLanguageHeader
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase() ?? "")
    .filter(Boolean);

  for (const candidate of candidates) {
    const normalized = candidate.split("-")[0];
    if (isLocale(normalized)) {
      return normalized;
    }
  }

  return DEFAULT_LOCALE;
}

export function extractLocaleFromPathname(pathname: string): Locale | null {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return isLocale(firstSegment) ? firstSegment : null;
}
