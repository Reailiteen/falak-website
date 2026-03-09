import { NextIntlClientProvider } from "next-intl";
import { isLocale, DEFAULT_LOCALE } from "@/i18n/config";
import { getMessages } from "@/i18n/load-messages";
import type { Locale } from "@/lib/landing/types";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : DEFAULT_LOCALE;
  const messages = getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
