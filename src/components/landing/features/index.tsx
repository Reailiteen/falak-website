"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import type { FeatureCardData } from "./features-card";
import { FeaturesHeader } from "./features-header";
import { FeaturesCarousel } from "./features-carousel";
import { FeaturesNav } from "./features-nav";

export function FeaturesSection() {
  const t = useTranslations("features");
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) =>
    scrollRef.current?.scrollBy({ left: dir * 334, behavior: "smooth" });

  const CARDS: FeatureCardData[] = Array.from({ length: 11 }, (_, i) => ({
    title: t(`card${i}Title`),
    userMessage: t(`card${i}User`),
    botReply: t(`card${i}Bot`),
  }));

  return (
    <div className="animate-up">
      <section className="bg-white py-20 md:py-52 relative">
        <div className="mx-auto px-4 flex flex-col relative">
          <FeaturesHeader onPrev={() => scroll(-1)} onNext={() => scroll(1)} />
          <FeaturesCarousel scrollRef={scrollRef} cards={CARDS} />
          <FeaturesNav
            className="flex md:hidden justify-center gap-4 mt-4"
            onPrev={() => scroll(-1)}
            onNext={() => scroll(1)}
          />
        </div>
      </section>
    </div>
  );
}
