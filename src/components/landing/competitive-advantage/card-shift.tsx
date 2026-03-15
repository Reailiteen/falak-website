"use client";

import { useTranslations } from "next-intl";
import { MEDIA } from "@/lib/landing/content";

export function CardShift({ mobile }: { mobile?: boolean }) {
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
      <div className="bg-[#ff65c5] h-[560px] rounded-4xl p-6 relative overflow-hidden flex flex-col">
        <img alt="background" loading="lazy" className="absolute inset-0 object-cover z-0" src="/images/ui/portal-mobile.png" style={bgStyle} />
        <div className="relative z-10 pt-4 flex-1 overflow-y-auto pb-6">
          <h2 className="text-[34px] leading-tight text-white mb-6 max-w-[300px]">
            {t("card3")}
          </h2>
          <div className="space-y-4 text-white text-base max-w-[250px]">
            <p>{t("card3Body")}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#ff65c5] rounded-3xl p-8 relative overflow-hidden">
      <img alt="background" loading="lazy" className="absolute inset-0 object-cover z-0" src="/images/ui/portal-desktop.png" style={bgStyle} />
      <div className="relative z-10 top-[35%]">
        <h2 className="text-[36px] leading-tight text-white mb-3 max-w-[300px]">
          {t("card3")}
        </h2>
        <div className="space-y-2 text-white leading-tight">
          <p>{t("card3Body")}</p>
        </div>
      </div>
    </div>
  );
}
