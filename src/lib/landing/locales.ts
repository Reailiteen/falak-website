import type { Locale } from "@/lib/landing/types";

export const SUPPORTED_LOCALES: ReadonlyArray<Locale> = ["en", "ar"];

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}
