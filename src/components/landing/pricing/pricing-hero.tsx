"use client";

import { useTranslations } from "next-intl";
import { MEDIA } from "@/lib/landing/content";

export function PricingHero() {
  const t = useTranslations("pricing");
  return (
    <div
      className="min-h-[430px] rounded-t-4xl max-h-[440px] md:min-h-[550px] md:max-h-[600px] w-full flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url("${MEDIA.chaosDesk}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Desktop mascot — behind text */}
      <div className="absolute right-0 bottom-0 hidden md:block">
        <img alt="Falak Mascot" className="w-[576px] h-[576px] object-contain" src={MEDIA.chaosMem} loading="lazy" />
      </div>

      {/* Desktop text — above mascot */}
      <div className="hidden md:flex items-center justify-between w-full max-w-6xl mx-auto px-8 relative z-10">
        <div className="text-center flex-1">
          <h1 className="text-8xl text-white mb-4">{t("heroTitle")}</h1>
          <p className="text-2xl text-white">{t("heroSubtitle")}</p>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden relative flex flex-col justify-center text-center px-4">
        <h1 className="text-6xl text-white mb-4 z-40 -mt-20 leading-tight">{t("heroTitle")}</h1>
        <p className="text-lg text-white mb-12 z-50">{t("heroSubtitle")}</p>
        <img
          alt="Falak Mascot"
          className="w-48 h-48 object-contain absolute top-[66%] -right-[12%]"
          src={MEDIA.chaosMem}
          loading="lazy"
        />
      </div>
    </div>
  );
}
