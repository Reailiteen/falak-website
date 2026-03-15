"use client";

import { useTranslations } from "next-intl";


export function CardOs({ mobile }: { mobile?: boolean }) {
  const t = useTranslations("chaos");
  const bgStyle: React.CSSProperties = {
    position: "absolute",
    height: "100%",
    width: "100%",
    inset: "0px",
    objectFit: "cover",
  };

  if (mobile) {
    return (
      <div className="bg-[#1E293B] min-h-[580px] max-h-[590px] p-6 relative overflow-hidden">
        <img alt="background" loading="lazy" className="absolute inset-0 object-cover z-0" src="/images/hero/family-hero-mobile.png" style={bgStyle} />
        <div className="relative z-10 mt-2 max-w-2xl">
          <h2 className="text-[32px] leading-tight text-white mb-3">
            {t("card4")}
          </h2>
          <div className="space-y-4 text-white text-base leading-tight">
            <p>{t("card4Body1")}</p>
            <p>{t("card4Body2")}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[498px] max-h-[500px] rounded-3xl p-8 relative overflow-hidden bg-[#06070b]">
      <img alt="background" loading="lazy" className="absolute z-0" src="/images/hero/family-hero-desktop.png" style={{ position: "absolute", top: 0, right: 0, height: "100%", width: "60%", objectFit: "cover",scale: 1.05, objectPosition: "left center" }} />
      <div className="relative z-10 mt-[10%] max-w-2xl">
        <h2 className="text-[40px] text-white mb-6">{t("card4")}</h2>
        <div className="space-y-4 text-white text-2xl">
          <p>{t("card4Body1")}</p>
          <p>{t("card4Body2")}</p>
        </div>
      </div>
    </div>
  );
}
