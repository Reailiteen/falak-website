"use client";

import { HERO } from "@/lib/landing/content";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HeroCTAs() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-6 z-30">
      <button
        type="button"
        className="cursor-pointer bg-gradient-to-r from-indigo-400 to-pink-400 text-white font-medium py-[14px] px-16 rounded-full text-2xl shadow-lg hover:scale-105 duration-200"
        onClick={() => scrollToId("pricing")}
      >
        {HERO.ctaTryFree} →
      </button>
      <button
        type="button"
        className="cursor-pointer border border-white text-white font-medium py-[14px] px-10 rounded-full text-xl md:text-2xl hover:bg-white/10 hover:scale-105 duration-200 flex items-center gap-2"
        onClick={() => scrollToId("channels")}
      >
        {HERO.ctaTalk} →
      </button>
    </div>
  );
}
