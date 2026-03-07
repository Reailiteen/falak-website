import type { RefObject } from "react";
import { FeaturesCard, type FeatureCardData } from "./features-card";

type Props = {
  scrollRef: RefObject<HTMLDivElement | null>;
  cards: FeatureCardData[];
};

export function FeaturesCarousel({ scrollRef, cards }: Props) {
  return (
    <div
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide [-webkit-overflow-scrolling:touch]"
      style={{ scrollPadding: "0px 1rem" }}
    >
      {cards.map((card) => (
        <FeaturesCard key={card.title} {...card} />
      ))}
    </div>
  );
}
