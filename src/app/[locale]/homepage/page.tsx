import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing/LandingPage";
import { isLocale, SUPPORTED_LOCALES } from "@/lib/landing/locales";

type LocaleHomepagePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams(): Array<{ locale: string }> {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleHomepagePage({ params }: LocaleHomepagePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <LandingPage forcedLocale={locale} />;
}
