"use client";

import { useRef } from "react";
import { SUPERPOWER_CARDS } from "@/lib/landing/content";
import type { CardData } from "./superpowers-card";
import { SuperpowersHeading } from "./superpowers-heading";
import { SuperpowersNav } from "./superpowers-nav";
import { SuperpowersCarousel } from "./superpowers-carousel";
import { SuperpowersCTA } from "./superpowers-cta";

const CARDS: CardData[] = SUPERPOWER_CARDS.map((c) => ({ title: c.label, image: c.image, isNew: (c as { isNew?: boolean }).isNew }));

export function SuperpowersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) =>
    scrollRef.current?.scrollBy({ left: dir * 336, behavior: "smooth" });

  return (
    <div className="animate-up">
      <section
        id="superpowers"
        className="relative w-full min-h-[430px] h-auto md:min-h-[700px] md:h-auto 2xl:py-10 2xl:mx-auto rounded-[2rem] pb-2 md:pt-10 md:pb-4 overflow-x-hidden px-2"
      >
        {/* Desktop nav — absolute top-right */}
        <SuperpowersNav
          className="hidden md:flex absolute top-6 md:top-20 md:right-[10%] right-8 gap-3 z-10"
          onPrev={() => scroll(-1)}
          onNext={() => scroll(1)}
        />

        <div className="w-full mx-auto">
          <SuperpowersHeading />
          <SuperpowersCarousel scrollRef={scrollRef} cards={CARDS} />

          {/* Mobile nav — below carousel */}
          <SuperpowersNav
            className="flex md:hidden justify-center gap-4 md:mt-8"
            onPrev={() => scroll(-1)}
            onNext={() => scroll(1)}
          />

          <SuperpowersCTA />
        </div>
      </section>
    </div>
  );
}
