"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { trackLandingEvent } from "@/lib/landing/analytics";
import type { Locale } from "@/lib/landing/types";
import { FaqItem } from "./faq-item";

const FAQ_COUNT = 9;

export function FaqList({ locale }: { locale: Locale }) {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = Array.from({ length: FAQ_COUNT }, (_, i) => ({
    question: t(`q${i}`),
    answer: t(`a${i}`),
  }));

  const handleToggle = (idx: number) => {
    if (openIndex !== idx) {
      trackLandingEvent("faq_expand", { locale, section: "faq", question_index: idx + 1 });
    }
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      {/* Mobile */}
      <div className="md:hidden space-y-4 bg-white shadow-2xl p-4 rounded-2xl">
        {items.map((item, idx) => (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === idx}
            onToggle={() => handleToggle(idx)}
            textSizeClass="text-lg"
          />
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:block space-y-4 bg-white p-4 shadow-2xl rounded-2xl">
        {items.map((item, idx) => (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === idx}
            onToggle={() => handleToggle(idx)}
            textSizeClass="text-[15px]"
          />
        ))}
      </div>
    </>
  );
}
