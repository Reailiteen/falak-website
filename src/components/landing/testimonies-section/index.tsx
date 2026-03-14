"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { TestimoniesHeading } from "./testimonies-heading";
import { TestimonialsGrid } from "./testimonials-grid";
import { ViewMorePill } from "./view-more-pill";

export function TestimoniesSection() {
  const t = useTranslations("ui");
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="animate-up" id="testimonies">
      <div className="w-full py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <TestimoniesHeading />
          <TestimonialsGrid expanded={expanded} />
          <ViewMorePill expanded={expanded} onToggle={() => setExpanded((v) => !v)} />

          {/* Mobile CTA */}
          <div className="mt-12 flex justify-center md:hidden">
            <button
              type="button"
              className="w-[320px] px-6 py-3 rounded-full bg-gradient-to-r from-[#557BF4] to-[#FF66C4] text-white text-2xl flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform"
            >
              <span>{t("tryFree")}</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
