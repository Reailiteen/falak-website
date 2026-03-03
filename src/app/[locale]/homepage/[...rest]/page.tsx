import { notFound, redirect } from "next/navigation";
import { isLocale } from "@/lib/landing/locales";

type LocaleHomepageRestPageProps = {
  params: Promise<{ locale: string; rest: string[] }>;
};

export default async function LocaleHomepageRestPage({
  params,
}: LocaleHomepageRestPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  redirect(`/${locale}/homepage`);
}
