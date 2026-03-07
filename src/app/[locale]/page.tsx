import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing/landing-page";
import { SEO } from "@/lib/landing/content";
import { LOCALES, isLocale } from "@/i18n/config";

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

  return {
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      title: SEO.title,
      description: SEO.description,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: SEO.title,
      description: SEO.description,
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
