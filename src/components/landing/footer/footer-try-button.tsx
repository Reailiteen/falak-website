"use client";

import { useTranslations } from "next-intl";

interface FooterTryButtonProps {
  className?: string;
}

export function FooterTryButton({ className = "" }: FooterTryButtonProps) {
  const t = useTranslations("ui");
  return (
    <button
      className={`cursor-pointer bg-gradient-to-r from-[#557BF4] to-[#FF66C4] text-white text-2xl  py-3 rounded-full flex items-center justify-center gap-2 ${className}`}
    >
      <span>{t("tryFree")}</span>
      <span className="text-lg">→</span>
    </button>
  );
}
