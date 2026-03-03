import { headers } from "next/headers";
import { redirect } from "next/navigation";

function resolveDefaultLocale(acceptLanguageHeader: string): "en" | "ar" {
  return /\bar\b/i.test(acceptLanguageHeader) ? "ar" : "en";
}

export default async function Home() {
  const requestHeaders = await headers();
  const acceptLanguage = requestHeaders.get("accept-language") ?? "";
  const locale = resolveDefaultLocale(acceptLanguage);
  redirect(`/${locale}/homepage`);
}
