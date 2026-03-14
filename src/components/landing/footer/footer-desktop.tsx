"use client";

import { useTranslations } from "next-intl";
import { MEDIA } from "@/lib/landing/content";
import { FooterSocialIcons } from "./footer-social-icons";
import { FooterStoreBadges } from "./footer-store-badges";
import { FooterLinks } from "./footer-links";

export function FooterDesktop() {
  const t = useTranslations("footer");
  return (
    <div className="px-3 hidden xl:block pt-14">
<div
        className="h-[50vh] rounded-3xl relative overflow-hidden"
      >
        {/* Decorative ring — bottom left */}
        <img alt="" aria-hidden="true" loading="lazy" width={160} height={160} src={MEDIA.ring} className="absolute bottom-6 start-[45%] w-36 h-36 opacity-80 pointer-events-none" style={{ color: "transparent" }} />
        {/* Decorative 6-new chip — top right */}
        <img alt="" aria-hidden="true" loading="lazy" width={100} height={100} src={MEDIA.sixNew} className="absolute top-6 end-6 w-20 h-20 opacity-90 pointer-events-none" style={{ color: "transparent" }} />

        <div className="absolute inset-0 p-12">
          <div className="flex justify-between items-start">
            <div>
              <img
                alt="falak-logo"
                loading="lazy"
                width={140}
                height={40}
                src={MEDIA.logoHome}
                style={{ color: "transparent" }}
              />
            </div>

            <div className="flex flex-col items-end gap-4 mt-20">
              <FooterSocialIcons containerClass="flex space-x-4" />
              <FooterStoreBadges compact={true} containerClass="flex gap-3" />
            </div>
          </div>

          <div className="absolute start-12 top-1/2 transform -translate-y-1/2">
            <div className="max-w-2xl">
              <h1 className="text-5xl mb-4 leading-tight text-white">
                {t("tagline")}
              </h1>
              <p className="text-lg text-gray-300 max-w-md leading-relaxed">
                {t("subtitle")}
              </p>
            </div>
          </div>

          <div className="absolute end-12 top-10/12 transform -translate-y-1/2">
            <div className="text-end">
              <FooterLinks layout="horizontal" />
            </div>
          </div>

          <div className="absolute bottom-12 start-12">
            <div className="text-sm text-gray-400">{t("copyright")}</div>
          </div>
        </div>
      </div>

    </div>
  );
}
