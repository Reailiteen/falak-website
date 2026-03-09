"use client";

import { useTranslations } from "next-intl";
import { MEDIA } from "@/lib/landing/content";
import { FooterTryButton } from "./footer-try-button";
import { FooterSocialIcons } from "./footer-social-icons";
import { FooterStoreBadges } from "./footer-store-badges";
import { FooterLinks } from "./footer-links";

export function FooterMobile() {
  const t = useTranslations("footer");
  return (
    <div className="xl:hidden">
      <div className="flex justify-center mb-10 mt-0">
        <FooterTryButton className="w-[70%] hover:opacity-90 transition-opacity" />
      </div>

      <div className="relative bg-[#000729] rounded-3xl mx-2 p-8 md:p-12 text-white overflow-hidden min-h-[600px]">
        <div className="absolute -top-8 -end-10 w-32 h-32 rounded-full">
          <img alt="memo" loading="lazy" width={140} height={140} src={MEDIA.ring} style={{ color: "transparent" }} />
        </div>

        <div className="mb-8 relative">
          <img alt="memorae-logo" loading="lazy" width={140} height={140} src={MEDIA.logoWhite} style={{ color: "transparent" }} />
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

        {/* Inspirational mascot */}
        <div className="absolute bottom-20 -end-28 sm:-end-32 w-72 h-72">
          <div className="relative w-full h-full">
            <img alt="memo" loading="lazy" width={250} height={250} src={MEDIA.memoraeInspirational} style={{ color: "transparent" }} />
          </div>
        </div>
      </div>

      <div className="bg-white w-full h-6" />
    </div>
  );
}
