import type { RefObject } from "react";
import { SuperpowersCard, type CardData } from "./superpowers-card";

type Props = {
  scrollRef: RefObject<HTMLDivElement | null>;
  cards: CardData[];
};

export function SuperpowersCarousel({ scrollRef, cards }: Props) {
  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory items-start scrollbar-hide pt-4 pb-6 md:pb-8 w-full px-4 md:px-6"
      style={{ scrollPadding: "0px 1rem" }}
    >
      {cards.map((card) => (
        <SuperpowersCard key={card.title} {...card} />
      ))}
    </div>
  );
}
