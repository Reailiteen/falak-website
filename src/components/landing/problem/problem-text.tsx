"use client";

import { useTranslations } from "next-intl";

export function ProblemText() {
  const t = useTranslations("problem");
  return (
    <div className="text-center z-10 mt-16 md:mt-0 px-4 md:max-w-6xl max-w-[340px] mx-auto">
      <p className="text-[#333333] leading-tight text-xl md:text-3xl lg:text-4xl">
        {t("line1")}
      </p>
      <p className="text-[#333333] leading-tight text-xl md:text-3xl lg:text-4xl">
        {t("line2")}
      </p>
    </div>
  );
}
