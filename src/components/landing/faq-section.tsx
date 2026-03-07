"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/landing/content";
import { UI } from "@/lib/landing/ui-copy";
import { trackLandingEvent } from "@/lib/landing/analytics";
import type { Locale } from "@/lib/landing/types";

export function FaqSection({ locale }: { locale: Locale }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding memo-faq-zone">
      <div className="container-shell">
        <h2 className="section-heading text-white">{UI.faqHeading}</h2>
        <p className="mt-2 text-white/70">{UI.faqSubheading}</p>

        <div className="mt-6 space-y-3">
          {FAQ_ITEMS.map((item, idx) => (
            <div key={item.question} className="memo-faq-item p-5">
              <button
                type="button"
                className="flex w-full items-center justify-between text-left text-base font-semibold text-white"
                onClick={() => {
                  setOpenFaq(openFaq === idx ? null : idx);
                  if (openFaq !== idx) {
                    trackLandingEvent("faq_expand", { locale, section: "faq", question_index: idx + 1 });
                  }
                }}
                aria-expanded={openFaq === idx}
              >
                <span>{item.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  className={`ml-4 flex-shrink-0 transition-transform ${openFaq === idx ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {openFaq === idx && (
                <p className="mt-3 animate-fade-in-up text-sm leading-7 text-white/80">{item.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button type="button" className="text-sm font-semibold text-[#557bf4]">{UI.viewMore}</button>
        </div>
      </div>
    </section>
  );
}
