"use client";

import { useTranslations, useLocale } from "next-intl";

const FOOTER_LINK_PATHS = [
  { labelKey: "privacyPolicy" as const, path: "privacy-policy" },
  { labelKey: "termsAndConditions" as const, path: "terms" },
  { labelKey: "cookieSettings" as const, path: "cookies-settings" },
  { labelKey: "legalNotice" as const, path: "legal-notice" },
  { labelKey: "communicationChannels" as const, path: "communications" },
  { labelKey: "refundsAndReturns" as const, path: "refunds-and-return-policy" },
];

interface FooterLinksProps {
  layout: "vertical" | "horizontal";
}

export function FooterLinks({ layout }: FooterLinksProps) {
  const t = useTranslations("footer");
  const locale = useLocale();
  const FOOTER_LINKS = FOOTER_LINK_PATHS.map(({ labelKey, path }) => ({
    labelKey,
    href: `/${locale}/${path}/`,
  }));
  if (layout === "vertical") {
    return (
      <div className="space-y-4 mb-8 relative">
        {FOOTER_LINKS.map(({ labelKey, href }) => (
          <div key={labelKey}>
            <a
              href={href}
              className="text-white text-sm hover:text-purple-300 transition-colors duration-200 underline underline-offset-4"
            >
              {t(labelKey)}
            </a>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex space-x-8 justify-end">
      {FOOTER_LINKS.map(({ labelKey, href }) => (
        <a
          key={labelKey}
          href={href}
          className="text-white text-sm hover:text-purple-300 transition-colors duration-200 underline underline-offset-4"
        >
          {t(labelKey)}
        </a>
      ))}
    </div>
  );
}
