"use client";

import { useTranslations } from "next-intl";
import { MEDIA } from "@/lib/landing/content";
import { FooterTryButton } from "./footer-try-button";
import { FooterSocialIcons } from "./footer-social-icons";
import { FooterStoreBadges } from "./footer-store-badges";
import { FooterLinks } from "./footer-links";

export function FooterDesktop() {
  const t = useTranslations("footer");
  return (
    <div className="px-3 hidden xl:block pt-14">
      <div className="flex justify-center mb-20">
        <FooterTryButton className="w-[20%] hover:scale-105 transition-all duration-300" />
      </div>

      <div
        className="bg-cover bg-center bg-no-repeat h-[50vh] rounded-3xl relative overflow-hidden"
        style={{ backgroundImage: `url("${MEDIA.footerBg}")` }}
      >
        <div className="absolute inset-0 p-12">
          <div className="flex justify-between items-start">
            <div>
              <img
                alt="memorae-logo"
                loading="lazy"
                width={140}
                height={40}
                src={MEDIA.logoWhite}
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

      <div className="bg-white w-full h-6" />
    </div>
  );
}
