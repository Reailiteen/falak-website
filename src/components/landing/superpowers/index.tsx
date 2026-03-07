"use client";

import { useRef } from "react";
import { MEDIA } from "@/lib/landing/content";
import type { CardData } from "./superpowers-card";
import { SuperpowersHeading } from "./superpowers-heading";
import { SuperpowersNav } from "./superpowers-nav";
import { SuperpowersCarousel } from "./superpowers-carousel";
import { SuperpowersCTA } from "./superpowers-cta";

const CARDS: CardData[] = [
  { title: "Unlimited reminders",          image: MEDIA.unlimitedReminders },
  { title: "Memory trunk",                 image: MEDIA.memoryTrunk },
  { title: "Memory everywhere",            image: MEDIA.memoryEverywhere },
  { title: "Create & manage lists",        image: MEDIA.createLists },
  { title: "Friend-to-friend reminders",   image: MEDIA.friendReminders },
  { title: "Daily briefing",               image: MEDIA.prioritySupport3 },
  { title: "Action from Image",            image: MEDIA.imageIntelligence },
  { title: "Google Workspace integration", image: MEDIA.googleWorkspace5, isNew: true },
  { title: "Long-term memory",             image: MEDIA.prioritySupport5 },
  { title: "Full Control Dashboard",       image: MEDIA.prioritySupport6 },
  { title: "Automatic Inbox Organizer",    image: MEDIA.googleWorkspace6, isNew: true },
  { title: "Autopilot Email Drafting",     image: MEDIA.googleWorkspace7, isNew: true },
  { title: "Multi-calendar integration",   image: MEDIA.prioritySupport7 },
];

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
