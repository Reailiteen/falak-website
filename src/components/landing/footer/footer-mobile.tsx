"use client";

import { useTranslations } from "next-intl";
import { MEDIA } from "@/lib/landing/content";
import { FooterSocialIcons } from "./footer-social-icons";
import { FooterStoreBadges } from "./footer-store-badges";
import { FooterLinks } from "./footer-links";

export function FooterMobile() {
  const t = useTranslations("footer");
  return (
    <div className="xl:hidden">
        <div className="relative rounded-3xl mx-2 p-8 md:p-12 text-white overflow-hidden min-h-[600px]">
        <div className="absolute bottom-16 end-4 w-32 h-32">
          <img alt="" aria-hidden="true" loading="lazy" width={140} height={140} src={MEDIA.ring} style={{ color: "transparent" }} />
        </div>

        {/* Decorative 6-new chip */}
        <img alt="" aria-hidden="true" loading="lazy" width={80} height={80} src={MEDIA.sixNew} className="absolute bottom-8 end-4 w-16 h-16 opacity-80 pointer-events-none" style={{ color: "transparent" }} />

        <div className="mb-8 relative">
          <img alt="falak-logo" loading="lazy" width={140} height={40} src={MEDIA.logoHome} style={{ color: "transparent" }} />
        </div>

        <div className="mb-12 relative">
          <h1 className="text-4xl sm:text-5xl mb-4 leading-tight">
            {t("tagline")}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-md leading-tight">
            {t("subtitle")}
          </p>
        </div>

        {/* Social icons */}
        <FooterSocialIcons containerClass="flex space-x-6 mb-8 relative" />

        {/* Store badges */}
        <FooterStoreBadges compact={false} containerClass="flex flex-wrap gap-3 mb-12 relative" />

        {/* Footer links */}
        <FooterLinks layout="vertical" />

        <div className="text-sm text-gray-400 relative">{t("copyright")}</div>

      </div>

    </div>
  );
}
