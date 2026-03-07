"use client";

import { useRef, useState, useEffect } from "react";

const BIG_BANG_FEATURES = [
  { label: "Unlimited reminders", icon: "https://cdn.memorae.ai/l3/Group%2037143-3.png" },
  { label: "Memory everywhere", icon: "https://cdn.memorae.ai/l3/Group%202147203027-3.png" },
  { label: "Multi-calendar integration", icon: "https://cdn.memorae.ai/l3/Group%202147203025-3.png" },
  { label: "Memory trunk", icon: "https://cdn.memorae.ai/l3/treasure-chest-outline%201-3.png" },
  { label: "Create & manage lists", icon: "https://cdn.memorae.ai/l3/Group%2037148-3.png" },
  { label: "Friend-to-friend reminders", icon: "https://cdn.memorae.ai/l3/Group%202147203024-3.png" },
  { label: "Long-term memory", icon: "https://cdn.memorae.ai/l3/neurology.png" },
  { label: "Daily briefing", icon: "https://cdn.memorae.ai/l3/Group%202147203028-2.png" },
  { label: "Image actions", icon: "https://cdn.memorae.ai/l3/Group%2037158-2.png" },
  { label: "Full control dashboard", icon: "https://cdn.memorae.ai/l3/Group%2037157-2.png" },
  { label: "Priority support", icon: "https://cdn.memorae.ai/l3/Group%2037160-2.png" },
  { label: "Google Workspace integration", icon: "https://cdn.memorae.ai/l3/Group.png" },
  { label: "Automatic Inbox Organizer", icon: "https://cdn.memorae.ai/l3/Group%202147203040.png" },
  { label: "Automatic Email Drafting", icon: "https://cdn.memorae.ai/l3/Group%202147203057-3.png" },
];

function FeatureTile({ label, icon }: { label: string; icon: string }) {
  return (
    <div className="w-[107px] h-[81px] rounded-2xl bg-gradient-to-r from-[#121619] to-[#0C1013] pt-1 flex flex-col items-center shadow-lg transition-all duration-300 cursor-pointer relative z-10 hover:-translate-y-2 hover:z-20 hover:border hover:border-[#FAB115]">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg">
        <img alt={label} loading="lazy" width="32" height="32" src={icon} />
      </div>
      <div className="text-center leading-tight">
        <div className="text-[10px] px-2 text-white font-medium pb-2">{label}</div>
      </div>
    </div>
  );
}

const PLAN_FEATURE_COUNTS: Record<string, number> = {
  origin: 6,
  supernova: 11,
  bigbang: 14,
};

export function FeaturesGrid({ activePlanId }: { activePlanId: string }) {
  const count = PLAN_FEATURE_COUNTS[activePlanId] ?? 14;
  const features = BIG_BANG_FEATURES.slice(0, count);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  // Reset scroll to start when active plan changes
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = 0;
    updateScrollState();
  }, [activePlanId]);

  const scroll = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * 250, behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile: 3-col grid */}
      <div className="mt-5 grid grid-cols-3 max-w-sm mx-auto gap-3 lg:hidden">
        {features.map((f) => (
          <FeatureTile key={f.label} label={f.label} icon={f.icon} />
        ))}
      </div>

      {/* Desktop: horizontally scrollable row */}
      <div className="hidden lg:block mt-5 relative w-full">
        <div className="w-full max-w-[1800px] mx-auto">
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-16 pt-2 pb-4 w-full"
          >
            {features.map((f) => (
              <div key={f.label} className="w-[107px] h-[81px] flex-shrink-0">
                <FeatureTile label={f.label} icon={f.icon} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            type="button"
            disabled={!canScrollLeft}
            onClick={() => scroll(-1)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 border ${
              !canScrollLeft
                ? "bg-gray-600/20 text-gray-500 cursor-not-allowed opacity-50 border-gray-600/20"
                : "bg-white/10 hover:bg-white/20 text-white cursor-pointer border-white/20 hover:border-white/40"
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            disabled={!canScrollRight}
            onClick={() => scroll(1)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 border ${
              !canScrollRight
                ? "bg-gray-600/20 text-gray-500 cursor-not-allowed opacity-50 border-gray-600/20"
                : "bg-white/10 hover:bg-white/20 text-white cursor-pointer border-white/20 hover:border-white/40"
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
