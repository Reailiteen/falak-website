"use client";

import { useRef, useState, useCallback } from "react";
import { PRICING_PLANS, MEDIA } from "@/lib/landing/content";
import type { Locale } from "@/lib/landing/types";
import { PricingCard } from "./pricing-card";
import type { CardVisualConfig } from "./pricing-card";

const CARD_CONFIGS: Record<string, CardVisualConfig> = {
  origin: {
    bgImage: MEDIA.frame2147238145,
    buttonClassName: "bg-[#557BF4]",
    videoBg: "bg-[#EAF2F1] hover:bg-[#d8ebe9]",
    annualTotal: "36",
    monthlyTotal: "72",
    showPerMonth: true,
    priceClassName: "text-[32px] lg:text-[38px]",
    nameClassName: "text-[28px] lg:text-[24px]",
    annualTextColor: "text-gray-400",
    ctaTextSize: "text-2xl",
    glowColor: "rgba(85, 123, 244, 0.5)",
  },
  supernova: {
    bgImage: MEDIA.frame369458,
    buttonClassName: "",
    buttonStyle: { background: "linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(236, 72, 153) 100%)" },
    videoBg: "bg-white hover:bg-gray-50",
    annualTotal: "72",
    monthlyTotal: "144",
    showPerMonth: true,
    priceClassName: "text-[32px] lg:text-[40px]",
    nameClassName: "text-[24px]",
    annualTextColor: "text-gray-300",
    ctaTextSize: "text-xl lg:text-2xl",
    glowColor: "linear-gradient(135deg, rgba(92, 123, 243, 0.5) 0%, rgba(255, 102, 196, 0.5) 100%)",
  },
  bigbang: {
    bgImage: MEDIA.frame2147238144,
    buttonClassName: "bg-[#FAB115]",
    videoBg: "bg-[#EAF2F1] hover:bg-[#d8ebe9]",
    annualTotal: "216",
    monthlyTotal: "432",
    showPerMonth: false,
    priceClassName: "text-[32px] lg:text-[38px]",
    nameClassName: "text-[28px] lg:text-[24px]",
    annualTextColor: "text-gray-400",
    ctaTextSize: "text-2xl",
    accentClassName: "ring-2 ring-[#f9b31c]",
    glowColor: "rgba(250, 177, 21, 0.5)",
  },
};

interface PricingCardsProps {
  isAnnual: boolean;
  locale: Locale;
  activeCardId: string;
  onCardHover: (id: string) => void;
}

export function PricingCards({ isAnnual, locale, activeCardId, onCardHover }: PricingCardsProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const container = carouselRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const slides = container.querySelectorAll<HTMLElement>("[data-slide]");
    let bestIdx = 0;
    let maxVisible = 0;
    slides.forEach((slide, i) => {
      const rect = slide.getBoundingClientRect();
      const visible = Math.max(
        0,
        Math.min(rect.right, containerRect.right) - Math.max(rect.left, containerRect.left),
      );
      if (visible > maxVisible) {
        maxVisible = visible;
        bestIdx = i;
      }
    });
    setActiveIndex(bestIdx);
  }, []);

  const scrollToIndex = (idx: number) => {
    const container = carouselRef.current;
    if (!container) return;
    const slides = container.querySelectorAll<HTMLElement>("[data-slide]");
    slides[idx]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <section className="w-full relative bg-transparent">
      {/* Desktop: 3-column grid */}
      <div className="hidden lg:block relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-6 items-start">
            {PRICING_PLANS.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                isAnnual={isAnnual}
                locale={locale}
                config={CARD_CONFIGS[plan.id]}
                isActive={activeCardId === plan.id}
                onHover={() => onCardHover(plan.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: snap carousel */}
      <div className="lg:hidden overflow-hidden">
        <div
          ref={carouselRef}
          aria-roledescription="carousel"
          onScroll={handleScroll}
          className="flex w-full overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden relative z-10"
          style={{
            overscrollBehaviorX: "contain",
            scrollBehavior: "smooth",
            paddingLeft: "calc(50% - min(42.5vw, 200px))",
            paddingRight: "calc(50% - min(42.5vw, 200px))",
          }}
        >
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              data-slide
              className="snap-center shrink-0 w-[85vw] max-w-[400px] px-0.5 transition-none"
            >
              <PricingCard
                plan={plan}
                isAnnual={isAnnual}
                locale={locale}
                config={CARD_CONFIGS[plan.id]}
                isActive={activeCardId === plan.id}
                onHover={() => onCardHover(plan.id)}
              />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="mt-4 flex items-center justify-center gap-2 relative z-10">
          {PRICING_PLANS.map((plan, idx) => (
            <button
              key={plan.id}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => scrollToIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? "w-6 bg-white" : "w-2 bg-gray-500 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
