"use client";

import { useRef } from "react";
import type { FeatureCardData } from "./features-card";
import { FeaturesHeader } from "./features-header";
import { FeaturesCarousel } from "./features-carousel";
import { FeaturesNav } from "./features-nav";

const CARDS: FeatureCardData[] = [
  {
    title: "Add things on the go",
    userMessage: `Memorae, add "buy milk and fruit" to my grocery list.`,
    botReply: `Done, I've added "buy milk and fruit" to your grocery list. Let me know when you arrive so I can send it to you.`,
  },
  {
    title: "See only what's pending",
    userMessage: `Memorae, show me what's still left to do on the "Today" list`,
    botReply: `Showing you only the pending items on the "Today" list`,
  },
  {
    title: "Review ideas when it's time",
    userMessage: `Memorae, show me my "Business Ideas" list and remind me to review it on Saturday at 10. 💡`,
    botReply: `Here is your "Business Ideas" list; I'll send it to you again on Saturday at 10.`,
  },
  {
    title: "Convert list into reminder",
    userMessage: `Memorae, tomorrow at 9 remind me of everything left on the "Admin" list.`,
    botReply: `Perfect, tomorrow at 9 I'll send you what's pending on the "Admin" list.`,
  },
  {
    title: "Clear done items at once",
    userMessage: `Memorae, in the "Home" list, mark everything as done except "paint room".`,
    botReply: `I've marked the rest as done; only "paint room" remains.`,
  },
  {
    title: "Reorder priorities without rewriting",
    userMessage: `Memorae, in the "Today" list put "send report to Laura" first.`,
    botReply: `I've moved "send report to Laura" to the top of the "Today" list. 🔄`,
  },
  {
    title: "Draft emails instantly",
    userMessage: `Memorae, draft an email to John confirming our meeting for Tuesday at 10 AM.`,
    botReply: `Drafted. Subject: Meeting Confirmation. 'Hi John, confirming our meeting for Tuesday at 10 AM...'`,
  },
  {
    title: "Sync your schedule",
    userMessage: `Memorae, do I have any free time on Friday afternoon?`,
    botReply: `Checking your calendars... You have a free slot between 2 PM and 4 PM on Friday.`,
  },
  {
    title: "Store important files",
    userMessage: `Memorae, save this invoice in the Vault so I don't lose it.`,
    botReply: `Saved to the Vault. You can find it anytime by searching for 'invoice'.`,
  },
  {
    title: "Remind others",
    userMessage: `Memorae, remind Sarah to bring the snacks for the party.`,
    botReply: `I've sent a reminder to Sarah: 'Don't forget the snacks for the party!'`,
  },
  {
    title: "Action from images",
    userMessage: `[Uploads photo of flyer] Memorae, add this event to my calendar.`,
    botReply: `Added 'Jazz Night' to your calendar for Saturday at 8 PM, based on the flyer.`,
  },
];

export function FeaturesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) =>
    scrollRef.current?.scrollBy({ left: dir * 334, behavior: "smooth" });

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
