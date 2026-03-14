"use client";

import { useTranslations } from "next-intl";

export function FaqHeader() {
  const t = useTranslations("ui");
  return (
    <div className="text-center mb-12">
      <a
        href="#FAQs"
        className="text-3xl md:text-4xl mb-4 text-[#01214F] hover:opacity-80 transition-opacity cursor-pointer inline-block"
      >
        {t("faqHeading")}
      </a>
      <p className="text-base md:text-lg text-[#01214F] mt-4">{t("faqSubheading")}</p>
    </div>
  );
}
