"use client";

import { useRef } from "react";
import { MEDIA, CHAT_DEMOS } from "@/lib/landing/content";
import { UI } from "@/lib/landing/ui-copy";

export function FeaturesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-[#f7f9ff]">
      <div className="container-shell">
        <h2 className="section-heading text-center text-[#1a1a2e]">
          {UI.chatDemoHeading}
        </h2>

        <div className="relative mt-8">
          <button
            type="button"
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-lg md:block"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#557bf4" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div ref={scrollRef} className="memo-carousel px-1">
            {CHAT_DEMOS.map((demo) => (
              <article key={demo.id} className="memo-chat-card">
                <h3 className="mb-3 text-sm font-semibold text-[#333]">{demo.title}</h3>
                <div className="space-y-3">
                  <div className="memo-chat-user">{demo.userMessage}</div>
                  <div className="flex items-start gap-2">
                    <img src={MEDIA.memoraeLogo} alt="" className="mt-1 h-5 w-5 rounded-full object-contain" loading="lazy" />
                    <div className="memo-chat-bot">{demo.botReply}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <button
            type="button"
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-lg md:block"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#557bf4" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
