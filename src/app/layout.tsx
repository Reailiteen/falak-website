import type { Metadata } from "next";
import { headers } from "next/headers";
import {
  DEFAULT_LOCALE,
  getLocaleDirection,
  isLocale,
} from "@/i18n/config";
import "./globals.css";

export const metadata: Metadata = {
  title: "Falak | Raise children with clarity and purpose",
  description:
    "Falak helps families build strong habits, meaningful routines, and lasting values — through quests, rewards, and Tarbiyah insights.",
  metadataBase: new URL("https://falak.app"),
  openGraph: {
    title: "Falak",
    description:
      "Raising children shouldn't mean nagging. Falak brings clarity.",
    url: "https://falak.app",
    siteName: "Falak",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Falak",
    description:
      "Your family's quest and responsibility companion. Build habits, reward effort, raise with intention.",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
