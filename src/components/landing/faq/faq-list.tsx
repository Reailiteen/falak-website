"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/landing/content";
import { trackLandingEvent } from "@/lib/landing/analytics";
import type { Locale } from "@/lib/landing/types";
import { FaqItem } from "./faq-item";

export function FaqList({ locale }: { locale: Locale }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
        {FAQ_ITEMS.map((item, idx) => (
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
        {FAQ_ITEMS.map((item, idx) => (
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
