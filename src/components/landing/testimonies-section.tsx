"use client";

import { useRef } from "react";
import { TESTIMONIALS, STATS } from "@/lib/landing/content";
import { UI } from "@/lib/landing/ui-copy";

export function TestimoniesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  };

  return (
    <>
      {/* Stats */}
      <section className="section-padding bg-white">
        <div className="container-shell">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div>
              <p className="memo-stat-number">{STATS.peacefulMinds}</p>
              <p className="mt-1 text-sm text-[#666]">{UI.statsLabels.peacefulMinds}</p>
            </div>
            <div>
              <p className="memo-stat-number">{STATS.remindersSent}</p>
              <p className="mt-1 text-sm text-[#666]">{UI.statsLabels.remindersSent}</p>
            </div>
            <div>
              <p className="memo-stat-number">{STATS.forgotToForget}</p>
              <p className="mt-1 text-sm text-[#666]">{UI.statsLabels.forgotToForget}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#f7f9ff]">
        <div className="container-shell">
          <div className="flex items-center justify-between">
            <h2 className="section-heading text-[#1a1a2e]">{UI.usersLove}</h2>
            <div className="hidden gap-2 md:flex">
              <button
                type="button"
                className="rounded-full bg-white p-2 shadow"
                onClick={() => scroll("left")}
                aria-label="Previous testimonial"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#557bf4" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button
                type="button"
                className="rounded-full bg-white p-2 shadow"
                onClick={() => scroll("right")}
                aria-label="Next testimonial"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#557bf4" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="memo-carousel mt-8">
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="memo-testimonial-card">
                <div className="flex items-center gap-3">
                  <img src={t.photo} alt={t.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="text-sm font-semibold text-[#333]">{t.name}</p>
                    <p className="text-xs text-[#888]">{t.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#555]">&ldquo;{t.quote}&rdquo;</p>
              </article>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button type="button" className="text-sm font-semibold text-[#557bf4]">{UI.viewMore}</button>
          </div>
        </div>
      </section>
    </>
  );
}
