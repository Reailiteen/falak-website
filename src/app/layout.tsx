import type { Metadata } from "next";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
