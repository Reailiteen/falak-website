import type { Locale } from "@/lib/landing/types";

import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

const messagesMap: Record<Locale, typeof en> = {
  en,
  ar: ar as typeof en,
};

export function getMessages(locale: Locale) {
  return messagesMap[locale] ?? messagesMap.en;
}
