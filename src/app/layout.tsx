import type { Metadata } from "next";
import { headers } from "next/headers";
import {
  DEFAULT_LOCALE,
  getLocaleDirection,
  isLocale,
} from "@/i18n/config";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memorae | Your personal memory assistant",
  description:
    "Memorae helps you remember, organize, and act. Unlimited reminders, smart lists, and AI-powered memory across WhatsApp, Telegram, email, and the Memorae App.",
  metadataBase: new URL("https://memorae.ai"),
  openGraph: {
    title: "Memorae",
    description:
      "You are not designed to remember everything. Memorae is.",
    url: "https://memorae.ai",
    siteName: "Memorae",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memorae",
    description:
      "Your personal memory assistant. Unlimited reminders, smart lists, and AI-powered memory.",
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
