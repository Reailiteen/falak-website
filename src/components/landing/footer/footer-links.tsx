"use client";

import { useTranslations } from "next-intl";

const FOOTER_LINKS = [
  { labelKey: "privacyPolicy" as const, href: "/privacy-policy/" },
  { labelKey: "termsAndConditions" as const, href: "/terms/" },
  { labelKey: "cookieSettings" as const, href: "/cookies-settings/" },
  { labelKey: "legalNotice" as const, href: "/legal-notice/" },
  { labelKey: "communicationChannels" as const, href: "/communications/" },
  { labelKey: "refundsAndReturns" as const, href: "/refunds-and-return-policy/" },
];

interface FooterLinksProps {
  layout: "vertical" | "horizontal";
}

export function FooterLinks({ layout }: FooterLinksProps) {
  const t = useTranslations("footer");
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
