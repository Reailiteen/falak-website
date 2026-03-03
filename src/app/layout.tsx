import type { Metadata } from "next";
import { headers } from "next/headers";
import {
  DEFAULT_LOCALE,
  getLocaleDirection,
  isLocale,
} from "@/i18n/config";
import "./globals.css";

export const metadata: Metadata = {
  title: "Falak | Calm quest and rewards app for families",
  description:
    "Falak helps parents and children build healthy habits with quests, rewards, and calm weekly progress tracking.",
  metadataBase: new URL("https://falak.app"),
  openGraph: {
    title: "Falak",
    description:
      "Guide healthy habits with less pressure and more consistency through quests and rewards.",
    url: "https://falak.app",
    siteName: "Falak",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Falak",
    description:
      "A calm parent-child app for quests, habits, and rewards with reliable weekly progress tracking.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const localeHeader = requestHeaders.get("x-falak-locale");
  const locale = isLocale(localeHeader) ? localeHeader : DEFAULT_LOCALE;
  const direction = getLocaleDirection(locale);

  return (
    <html lang={locale} dir={direction}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
