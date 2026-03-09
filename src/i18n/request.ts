import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";
import { isLocale, DEFAULT_LOCALE } from "./config";
import { getMessages } from "./load-messages";

export default getRequestConfig(async () => {
  const requestHeaders = await headers();
  const localeHeader = requestHeaders.get("x-falak-locale");
  const locale = isLocale(localeHeader) ? localeHeader : DEFAULT_LOCALE;

  return {
    locale,
    messages: getMessages(locale),
  };
});
