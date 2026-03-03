import { notFound, redirect } from "next/navigation";
import { isLocale } from "@/lib/landing/locales";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  redirect(`/${locale}/homepage`);
}
