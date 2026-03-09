import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing/landing-page";
import { LOCALES, isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/load-messages";
import type { Locale } from "@/lib/landing/types";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams(): Array<{ locale: string }> {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return { title: "Memorae" };
  }
  const messages = getMessages(locale);
  const title = messages.seo.title;
  const description = messages.seo.description;
  const ogLocale = locale === "ar" ? "ar_EG" : "en_US";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <LandingPage locale={locale} />;
}
