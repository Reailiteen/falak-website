"use client";

import { useTranslations } from "next-intl";

export function TestimoniesHeading() {
  const t = useTranslations("testimonies");
  return (
    <div className="text-center mb-6 md:mb-12">
      <h2 className="text-4xl md:text-6xl mb-4">
        <span
          className="text-white"
          style={{
            display: "inline",
            background: "linear-gradient(135deg, #557BF4 0%, #FF66C4 100%)",
            borderRadius: "0.35em",
            padding: "0.06em 0.25em",
            boxDecorationBreak: "clone",
            WebkitBoxDecorationBreak: "clone",
          }}
        >
          {t("peopleCount")}
        </span>
        <br />
        <span className="text-[#01214F]">{t("heading")}</span>
      </h2>
    </div>
  );
}
