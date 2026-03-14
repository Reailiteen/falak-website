"use client";

import { useTranslations } from "next-intl";
import { MEDIA } from "@/lib/landing/content";

export function CardApp({ mobile }: { mobile?: boolean }) {
  const t = useTranslations("chaos");
  if (mobile) {
    return (
      <div className="bg-[#B6DEDE] rounded-4xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-[36px] leading-tight text-[#121C28] mb-6">
            {t("subheading")}
          </h2>
          <div className="leading-tight text-base text-[#121C28]">
            <p>{t("appBody")}</p>
          </div>
        </div>
        <div className="w-full mb-14">
          <img alt="mem-bg" width="1920" height="1080" className="w-full h-auto" src={MEDIA.multiCards} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#B6DEDE] rounded-3xl overflow-hidden">
      <div className="p-8">
        <h2 className="text-[36px] leading-tight text-gray-800 mb-6">
          {t("subheading")}
        </h2>
        <div className="leading-normal text-base text-gray-700">
          <p>{t("appBody")}</p>
        </div>
      </div>
      <div className="w-full">
        <img alt="mem-bg" width="1920" height="1080" className="w-full h-auto" src={MEDIA.multiCards} />
      </div>
    </div>
  );
}
