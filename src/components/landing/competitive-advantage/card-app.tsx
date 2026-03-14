"use client";

import { useTranslations } from "next-intl";

export function CardApp({ mobile }: { mobile?: boolean }) {
  const t = useTranslations("chaos");
  if (mobile) {
    return (
      <div className="rounded-4xl overflow-hidden" style={{ backgroundImage: "url('/falak-quests-calm-bg.png')", backgroundColor: "##51adfd", backgroundSize: "33%", backgroundPosition: "bottom center", backgroundRepeat: "no-repeat" }}>
        <div className="p-6">
          <h2 className="text-[36px] leading-tight text-[#121C28] mb-6">
            {t("subheading")}
          </h2>
          <div className="leading-tight text-base text-[#121C28]">
            <p>{t("appBody")}</p>
          </div>
        </div>
        <div className="h-64" />
      </div>
    );
  }

  return (
    <div className="rounded-3xl overflow-hidden" style={{ backgroundImage: "url('/falak-quests-calm-bg.png')", backgroundColor: "#51adfd", backgroundSize: "65%", backgroundPosition: "bottom center", backgroundRepeat: "no-repeat" }}>
      <div className="p-8">
        <h2 className="text-[36px] leading-tight text-gray-800 mb-6">
          {t("subheading")}
        </h2>
        <div className="leading-normal text-base text-gray-700">
          <p>{t("appBody")}</p>
        </div>
      </div>
      <div className="h-64" />
    </div>
  );
}
