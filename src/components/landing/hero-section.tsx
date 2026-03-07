"use client";

import { MEDIA, HERO } from "@/lib/landing/content";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HeroSection() {
  return (
    <section className="memo-hero-bg relative overflow-hidden px-4 pb-10 pt-6 md:pt-8 md:pb-16">
      <div className="container-shell relative">
        {/* Floating 6-new chip */}
        <div className="pointer-events-none absolute bottom-20 left-16 hidden lg:left-[90%] lg:top-[20%] lg:flex">
          <img src={MEDIA.sixNew} alt="" className="h-16 w-16 object-contain" loading="lazy" />
        </div>

        {/* Mascot floating in hero - desktop */}
        <img
          src={MEDIA.mascot}
          alt=""
          className="pointer-events-none absolute -left-[5%] top-[35%] z-20 hidden h-[220px] w-[220px] object-contain mascot-float lg:block"
          loading="lazy"
        />
        {/* Mascot floating in hero - mobile/tablet */}
        <img
          src={MEDIA.mascot}
          alt=""
          className="pointer-events-none absolute -left-4 top-[25%] z-20 h-[120px] w-[120px] object-contain mascot-float lg:hidden"
          loading="lazy"
        />

        <div className="mx-auto flex max-w-4xl flex-col items-center text-center text-white">
          {/* Badge */}
          <div className="mb-6 flex items-center gap-3 rounded-full border border-white/25 bg-white/12 px-4 py-1.5 text-sm backdrop-blur-md">
            <img src={MEDIA.groupIcon} alt="" className="h-5 w-5" loading="lazy" />
            <span className="flex items-center gap-0.5 text-[#FFD369]" aria-hidden="true">
              {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
            </span>
            <span className="font-semibold">{HERO.rating}</span>
            <span className="opacity-85">|</span>
            <span className="opacity-90">{HERO.badge}</span>
          </div>

          {/* Heading */}
          <h1 className="mt-4 text-balance text-[47px] font-semibold leading-[4rem] tracking-tight text-white md:text-[3.5rem] md:leading-[4.5rem] lg:text-[6rem] lg:leading-[6rem]">
            {HERO.title}
          </h1>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-4 md:mt-10 md:flex-row">
            <button type="button" className="cta-primary px-14 py-[14px] text-xl md:text-2xl" onClick={() => scrollToId("pricing")}>
              {HERO.ctaTryFree} <span className="ml-1">&rarr;</span>
            </button>
            <button type="button" className="cta-outline-light px-10 py-[14px] text-xl md:text-2xl" onClick={() => scrollToId("channels")}>
              {HERO.ctaTalk} <span className="ml-1">&rarr;</span>
            </button>
          </div>
        </div>

        {/* Floating orbs */}
        <div className="pointer-events-none absolute -left-8 mt-[22%] -translate-y-1/2 md:-left-12 md:mt-[10%]">
          <img src={MEDIA.ring} alt="" className="memo-hero-orb object-contain" loading="lazy" />
        </div>
        <div className="pointer-events-none absolute -right-8 top-[10%] hidden -translate-y-1/2 md:-right-10 md:block">
          <img src={MEDIA.bubble} alt="" className="memo-hero-orb object-contain" loading="lazy" />
        </div>

        {/* Chips */}
        <div className="pointer-events-none absolute -left-2 top-[24%] hidden rotate-[-15deg] lg:block">
          <div className="chip border-white/40 bg-white/20 text-white">Memory</div>
        </div>
        <div className="pointer-events-none absolute right-[5%] top-[50%] hidden rotate-[11deg] lg:block">
          <div className="chip border-white/40 bg-white/20 text-white">Clarity</div>
        </div>

        {/* App promo card - Desktop */}
        <div className="pointer-events-auto hidden md:absolute md:right-6 md:bottom-[10%] md:block md:max-w-xs">
          <article className="memo-app-card">
            <div className="flex items-center gap-4">
              <img src={MEDIA.appStoreIcon} alt="" className="h-16 w-16 rounded-2xl object-contain" loading="lazy" />
              <div className="flex flex-col">
                <span className="mb-1 w-fit rounded-md bg-[#557BF4]/15 px-2 py-[2px] text-[10px] font-semibold text-[#557BF4]">
                  AVAILABLE NOW
                </span>
                <h3 className="text-left text-lg font-semibold text-[#111827]">Memorae App</h3>
                <p className="text-left text-xs text-[#6B7280]">Available on:</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <img src={MEDIA.appStoreBadge} alt="App Store" className="h-8 object-contain" loading="lazy" />
              <img src={MEDIA.googlePlayBadge} alt="Google Play" className="h-8 object-contain" loading="lazy" />
            </div>
          </article>
        </div>

        {/* App promo card - Mobile */}
        <div className="mx-auto mt-8 flex max-w-[280px] items-center gap-4 md:hidden">
          <article className="memo-app-card w-full">
            <div className="flex items-center gap-3">
              <img src={MEDIA.appStoreIcon} alt="" className="h-12 w-12 rounded-xl object-contain" loading="lazy" />
              <div>
                <p className="text-xs font-semibold text-[#557BF4]">AVAILABLE NOW</p>
                <h3 className="text-base font-semibold text-[#111827]">Memorae App</h3>
                <p className="text-[11px] text-[#6B7280]">Available on:</p>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <img src={MEDIA.appStoreBadge} alt="App Store" className="h-7 object-contain" loading="lazy" />
              <img src={MEDIA.googlePlayBadge} alt="Google Play" className="h-7 object-contain" loading="lazy" />
            </div>
          </article>
        </div>

        {/* Background orb */}
        <div className="pointer-events-none absolute -left-[75%] -mt-[95%] hidden md:left-[20%] md:top-[40%] md:block md:-mt-0">
          <img src={MEDIA.orb} alt="" className="h-20 w-20 -rotate-12 object-contain md:h-40 md:w-40" loading="lazy" />
        </div>
      </div>

      {/* Video embed below CTAs */}
      <div className="mx-auto mt-12 max-w-[740px] px-4 md:mt-16">
        <div className="memo-video-embed">
          <iframe
            src={MEDIA.videoPlaceholder}
            title="Memorae Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 h-24 w-full bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
