"use client";

import { useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const FEATURE_ICONS = [
  "https://cdn.memorae.ai/l3/Group%2037143-3.png",
  "https://cdn.memorae.ai/l3/Group%202147203027-3.png",
  "https://cdn.memorae.ai/l3/Group%202147203025-3.png",
  "https://cdn.memorae.ai/l3/treasure-chest-outline%201-3.png",
  "https://cdn.memorae.ai/l3/Group%2037148-3.png",
  "https://cdn.memorae.ai/l3/Group%202147203024-3.png",
  "https://cdn.memorae.ai/l3/neurology.png",
  "https://cdn.memorae.ai/l3/Group%202147203028-2.png",
  "https://cdn.memorae.ai/l3/Group%2037158-2.png",
  "https://cdn.memorae.ai/l3/Group%2037160-2.png",
  "https://cdn.memorae.ai/l3/Group%2037157-2.png",
  "https://cdn.memorae.ai/l3/Group.png",
  "https://cdn.memorae.ai/l3/Group%202147203040.png",
  "https://cdn.memorae.ai/l3/Group%202147203057-3.png",
];

const PLAN_TILE_CONFIG: Record<string, { accentColor: string; iconFilter?: string }> = {
  orbit:        { accentColor: "#557BF4", iconFilter: "hue-rotate(180deg) brightness(0.75)" },
  constellation:{ accentColor: "#ec4899", iconFilter: "hue-rotate(270deg) saturate(1.3) brightness(0.75)" },
  sanctuary:    { accentColor: "#FAB115" },
};

function FeatureTile({
  label,
  icon,
  accentColor,
  iconFilter,
}: {
  label: string;
  icon: string;
  accentColor: string;
  iconFilter?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-[107px] h-[81px] rounded-2xl bg-gradient-to-r from-[#121619] to-[#0C1013] pt-1 flex flex-col items-center shadow-lg transition-all duration-300 cursor-pointer border"
      style={{
        borderColor: hovered ? accentColor : "transparent",
        transform: hovered ? "translateY(-8px)" : undefined,
        zIndex: hovered ? 20 : 10,
        position: "relative",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg">
        <img
          alt={label}
          loading="lazy"
          width="32"
          height="32"
          src={icon}
          className="transition-[filter] duration-300"
          style={iconFilter ? { filter: iconFilter } : undefined}
        />
      </div>
      <div className="text-center leading-tight">
        <div className="text-[10px] px-2 text-white pb-2">{label}</div>
      </div>
    </div>
  );
}

const PLAN_FEATURE_COUNTS: Record<string, number> = {
  orbit: 5,
  constellation: 10,
  sanctuary: 14,
};

export function FeaturesGrid({ activePlanId }: { activePlanId: string }) {
  const t = useTranslations("pricing");
  const count = PLAN_FEATURE_COUNTS[activePlanId] ?? 14;
  const features = FEATURE_ICONS.slice(0, count).map((icon, i) => ({ label: t(`feature${i}`), icon }));
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { accentColor, iconFilter } = PLAN_TILE_CONFIG[activePlanId] ?? PLAN_TILE_CONFIG.bigbang;

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
      {/* Mobile: 3-col grid, centered */}
      <div className="mt-5 grid grid-cols-3 w-fit mx-auto gap-3 lg:hidden">
        {features.map((f) => (
          <FeatureTile
            key={f.label}
            label={f.label}
            icon={f.icon}
            accentColor={accentColor}
            iconFilter={iconFilter}
          />
        ))}
      </div>

      {/* Desktop: scrollable row, centered when content fits */}
      <div className="hidden lg:block mt-5 relative w-full">
        <div className="w-full max-w-[1800px] mx-auto">
          <div
            ref={scrollRef}
            className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pt-2 pb-4"
          >
            <div className="flex gap-2 w-max mx-auto px-4">
              {features.map((f) => (
                <div key={f.label} className="w-[107px] h-[81px] flex-shrink-0">
                  <FeatureTile
                    label={f.label}
                    icon={f.icon}
                    accentColor={accentColor}
                    iconFilter={iconFilter}
                  />
                </div>
              ))}
            </div>
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
