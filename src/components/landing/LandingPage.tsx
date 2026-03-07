"use client";

import { useEffect, useRef, useState } from "react";
import {
  MEDIA,
  STORE_LINKS,
  HERO,
  MESSAGE_LINES,
  MEMORY_SYSTEM,
  SUPERPOWERS,
  CHAT_DEMOS,
  PRICING_PLANS,
  SUPERNOVA_FEATURES,
  TESTIMONIALS,
  FAQ_ITEMS,
  CHAOS_SECTION,
  STATS,
  FOOTER,
} from "@/lib/landing/content";
import { NAV, UI, SOCIAL_ICONS } from "@/lib/landing/ui-copy";
import { trackLandingEvent } from "@/lib/landing/analytics";
import type { Locale } from "@/lib/landing/types";

type NavMenu = "superpowers" | "channels" | null;
type BillingCycle = "monthly" | "annual";

export function LandingPage({ locale }: { locale: Locale }) {
  const [activeMenu, setActiveMenu] = useState<NavMenu>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("annual");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const viewedRef = useRef(false);
  const depthRef = useRef({ half: false, nearEnd: false });
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const testimonialScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    if (!viewedRef.current) {
      trackLandingEvent("landing_view", { locale, section: "page" });
      viewedRef.current = true;
    }
  }, [locale]);

  useEffect(() => {
    const onScroll = () => {
      const pageHeight = document.documentElement.scrollHeight;
      const viewportBottom = window.scrollY + window.innerHeight;
      const depth = (viewportBottom / pageHeight) * 100;
      if (!depthRef.current.half && depth >= 50) {
        depthRef.current.half = true;
        trackLandingEvent("scroll_depth_50", { locale, section: "page" });
      }
      if (!depthRef.current.nearEnd && depth >= 90) {
        depthRef.current.nearEnd = true;
        trackLandingEvent("scroll_depth_90", { locale, section: "page" });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [locale]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollToId = (id: string) => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollCarousel = (ref: React.RefObject<HTMLDivElement | null>, dir: "left" | "right") => {
    if (!ref.current) return;
    const amount = dir === "left" ? -340 : 340;
    ref.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const isAnnual = billingCycle === "annual";

  return (
    <div className="relative min-h-screen overflow-x-clip bg-white text-[#18313b]">
      {/* Gradient overlay at top */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(80%_90%_at_50%_15%,rgba(85,123,244,0.42),rgba(255,102,196,0.28)_35%,rgba(14,27,49,0.92)_100%)]" />

      {/* ════════════ NAVIGATION ════════════ */}
      <header className="sticky top-3 z-40 px-3 md:top-5" onMouseLeave={() => setActiveMenu(null)}>
        <div className="mx-auto max-w-[1300px]">
          <div className="falak-nav-pill">
            <a href="#top" className="text-2xl font-semibold tracking-tight text-white">
              {NAV.logo}
            </a>

            <nav className="hidden items-center gap-7 text-sm font-medium text-white/85 lg:flex">
              <button type="button" className="falak-nav-link cursor-pointer" onMouseEnter={() => setActiveMenu("superpowers")}>
                Superpowers
              </button>
              <button type="button" className="falak-nav-link cursor-pointer" onMouseEnter={() => setActiveMenu("channels")}>
                Channels
              </button>
              <button type="button" className="falak-nav-link cursor-pointer" onClick={() => scrollToId("faq")}>
                Support
              </button>
              <button type="button" className="falak-nav-link cursor-pointer" onClick={() => scrollToId("pricing")}>
                Pricing
              </button>
              <a href="#" className="falak-nav-link">Log in</a>
            </nav>

            <div className="flex items-center gap-2">
              <button type="button" className="cta-primary hidden cursor-pointer px-5 py-2.5 text-sm sm:inline-flex" onClick={() => scrollToId("pricing")}>
                {NAV.ctaTryFree}
              </button>
              {/* Hamburger for mobile */}
              <button type="button" className="lg:hidden" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
                <img src={MEDIA.menuIcon} alt="" className="h-6 w-6 invert" />
              </button>
            </div>
          </div>

          {/* Mega menus */}
          {activeMenu && (
            <div className="falak-mega-menu hidden lg:block" onMouseEnter={() => setActiveMenu(activeMenu)}>
              {activeMenu === "superpowers" ? (
                <>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-[#333]">Superpowers</h3>
                    <button type="button" className="text-sm font-semibold text-[#557BF4]" onClick={() => setActiveMenu(null)}>{NAV.close}</button>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {SUPERPOWERS.slice(0, 6).map((sp) => (
                      <button key={sp.id} type="button" className="falak-mega-card cursor-pointer" onClick={() => scrollToId("superpowers")}>
                        <img src={sp.image} alt={sp.title} className="h-44 w-full rounded-2xl object-cover" loading="lazy" />
                        <p className="mt-3 text-left text-base font-semibold text-[#172f39]">{sp.title}</p>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-[#333]">Channels</h3>
                    <button type="button" className="text-sm font-semibold text-[#557BF4]" onClick={() => setActiveMenu(null)}>{NAV.close}</button>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { title: "WhatsApp", icon: MEDIA.groupIcon },
                      { title: "Telegram", icon: MEDIA.image318 },
                      { title: "Email", icon: MEDIA.image10 },
                      { title: "Memorae App", icon: MEDIA.appStoreIcon },
                    ].map((ch) => (
                      <button key={ch.title} type="button" className="falak-mega-card flex cursor-pointer flex-col items-center gap-2 p-4" onClick={() => scrollToId("channels")}>
                        <img src={ch.icon} alt={ch.title} className="h-12 w-12 object-contain" loading="lazy" />
                        <p className="text-sm font-semibold text-[#172f39]">{ch.title}</p>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="memo-mobile-menu">
          <button type="button" className="absolute right-6 top-6 text-white text-2xl" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
            &#x2715;
          </button>
          <button type="button" onClick={() => scrollToId("superpowers")}>Superpowers</button>
          <button type="button" onClick={() => scrollToId("channels")}>Channels</button>
          <button type="button" onClick={() => scrollToId("faq")}>Support</button>
          <button type="button" onClick={() => scrollToId("pricing")}>Pricing</button>
          <a href="#">Log in</a>
          <button type="button" className="cta-primary px-8 py-3 text-base" onClick={() => scrollToId("pricing")}>
            {UI.tryFree}
          </button>
        </div>
      )}

      {/* ════════════ MAIN ════════════ */}
      <main id="top" className="relative">

        {/* ──── HERO ──── */}
        <section className="memo-hero-bg relative overflow-hidden px-4 pb-24 pt-10 md:pt-10">
          <div className="container-shell relative">
            {/* Floating 6-new chip */}
            <div className="pointer-events-none absolute bottom-20 left-16 hidden lg:left-[90%] lg:top-[20%] lg:flex">
              <img src={MEDIA.sixNew} alt="" className="h-16 w-16 object-contain" loading="lazy" />
            </div>

            <div className="mx-auto flex max-w-4xl flex-col items-center text-center text-white">
              {/* Badge */}
              <div className="mb-4 flex items-center gap-3 rounded-full border border-white/25 bg-white/12 px-4 py-1.5 text-sm backdrop-blur-md">
                <img src={MEDIA.groupIcon} alt="" className="h-5 w-5" loading="lazy" />
                <span className="flex items-center gap-0.5 text-[#FFD369]" aria-hidden="true">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </span>
                <span className="font-semibold">{HERO.rating}</span>
                <span className="opacity-85">|</span>
                <span className="opacity-90">{HERO.badge}</span>
              </div>

              {/* Heading */}
              <h1 className="text-balance text-[47px] font-semibold leading-[4rem] tracking-tight text-white md:text-[3.5rem] md:leading-[4.5rem] lg:text-[6rem] lg:leading-[6rem]">
                {HERO.title}
              </h1>

              {/* CTAs */}
              <div className="mt-6 flex flex-col items-center gap-4 md:flex-row">
                <button type="button" className="cta-primary px-14 py-[14px] text-xl md:text-2xl" onClick={() => scrollToId("pricing")}>
                  {HERO.ctaTryFree} <span className="ml-1">&rarr;</span>
                </button>
                <button type="button" className="cta-outline-light px-10 py-[14px] text-xl md:text-2xl" onClick={() => scrollToId("channels")}>
                  {HERO.ctaTalk} <span className="ml-1">&rarr;</span>
                </button>
              </div>
            </div>

            {/* Floating orbs */}
            <div className="pointer-events-none absolute -left-5 mt-[22%] -translate-y-1/2 md:mt-[10%]">
              <img src={MEDIA.ring} alt="" className="memo-hero-orb object-contain" loading="lazy" />
            </div>
            <div className="pointer-events-none absolute -right-6 mt-[22%] hidden -translate-y-1/2 md:block">
              <img src={MEDIA.bubble} alt="" className="memo-hero-orb object-contain" loading="lazy" />
            </div>

            {/* Chips */}
            <div className="pointer-events-none absolute -left-2 top-[24%] hidden rotate-[-15deg] lg:block">
              <div className="chip border-white/40 bg-white/20 text-white">Memory</div>
            </div>
            <div className="pointer-events-none absolute -right-2 top-[34%] hidden rotate-[11deg] lg:block">
              <div className="chip border-white/40 bg-white/20 text-white">Clarity</div>
            </div>

            {/* App promo card - Desktop */}
            <div className="pointer-events-auto hidden md:absolute md:right-10 md:top-[40%] md:block md:max-w-xs">
              <article className="memo-app-card">
                <div className="flex items-center gap-4">
                  <img src={MEDIA.appStoreIcon} alt="" className="h-16 w-16 rounded-2xl object-contain" loading="lazy" />
                  <div className="flex flex-col">
                    <span className="mb-1 w-fit rounded-md bg-[#557BF4]/15 px-2 py-[2px] text-[10px] font-semibold text-[#557BF4]">
                      AVAILABLE NOW
                    </span>
                    <h3 className="text-left text-lg font-semibold text-[#111827]">Memorae App</h3>
                    <p className="text-left text-sm text-[#6B7280]">On App Store & Google Play</p>
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <img src={MEDIA.appStoreBadge} alt="App Store" className="h-8 object-contain" loading="lazy" />
                </div>
              </article>
            </div>

            {/* App promo card - Mobile */}
            <div className="mx-auto mt-8 flex max-w-[260px] items-center gap-4 md:hidden">
              <article className="memo-app-card w-full">
                <div className="flex items-center gap-3">
                  <img src={MEDIA.appStoreIcon} alt="" className="h-12 w-12 rounded-xl object-contain" loading="lazy" />
                  <div>
                    <p className="text-xs font-semibold text-[#557BF4]">AVAILABLE NOW</p>
                    <h3 className="text-base font-semibold text-[#111827]">Memorae App</h3>
                  </div>
                </div>
              </article>
            </div>

            {/* Background orb */}
            <div className="pointer-events-none absolute -left-[75%] -mt-[95%] hidden md:left-[20%] md:top-[40%] md:block md:-mt-0">
              <img src={MEDIA.orb} alt="" className="h-20 w-20 -rotate-12 object-contain md:h-40 md:w-40" loading="lazy" />
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-0 h-24 w-full bg-gradient-to-t from-white/50 to-transparent" />
        </section>

        {/* ──── MESSAGE LINES ──── */}
        <section className="relative bg-white px-4">
          <div className="mx-auto flex min-h-[40vh] max-w-[500px] flex-col items-center justify-center gap-4 px-2 py-28 text-center md:min-h-[70vh] md:max-w-[1080px] md:py-52">
            {MESSAGE_LINES.map((line) => (
              <p key={line} className="memo-message-line">{line}</p>
            ))}
          </div>
          {/* Floating note images */}
          <img src={MEDIA.note1} alt="" className="pointer-events-none absolute left-[5%] top-[20%] h-14 w-12 -rotate-12 object-contain md:h-20 md:w-16" loading="lazy" />
          <img src={MEDIA.note2} alt="" className="pointer-events-none absolute right-[10%] top-[15%] h-14 w-12 rotate-6 object-contain md:h-20 md:w-16" loading="lazy" />
          <img src={MEDIA.note3} alt="" className="pointer-events-none absolute right-[25%] bottom-[15%] h-12 w-10 rotate-12 object-contain md:h-16 md:w-14" loading="lazy" />
        </section>

        {/* ──── MEMORY SYSTEM ──── */}
        <section className="relative overflow-hidden bg-white px-4 pb-10 md:pb-20 md:py-40">
          <div className="container-shell relative">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold leading-tight text-[#333] md:text-4xl lg:text-5xl">
                {MEMORY_SYSTEM.heading}
              </h2>
              <p className="mt-6 text-lg text-[#555]">{MEMORY_SYSTEM.line1}</p>
              <p className="mt-2 text-lg text-[#555]">{MEMORY_SYSTEM.line2}</p>

              {/* Channel icons */}
              <div className="mt-8 flex items-center gap-4">
                {[
                  { icon: MEDIA.groupIcon, label: "WhatsApp" },
                  { icon: MEDIA.image318, label: "Telegram" },
                  { icon: MEDIA.image10, label: "Email" },
                  { icon: MEDIA.appStoreIcon, label: "Memorae App" },
                ].map((ch) => (
                  <div key={ch.label} className="flex flex-col items-center gap-1">
                    <img src={ch.icon} alt={ch.label} className="h-10 w-10 object-contain" loading="lazy" />
                    <span className="text-xs text-[#777]">{ch.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mascot on right */}
            <img
              src={MEDIA.mascot}
              alt="Memorae mascot"
              className="pointer-events-none absolute -bottom-16 -right-[5%] hidden h-[420px] w-[420px] object-contain md:block 2xl:right-0"
              loading="lazy"
            />

            {/* Brain and writing illustrations */}
            <div className="pointer-events-none absolute -right-[15%] top-[10%] hidden opacity-30 lg:block">
              <img src={MEDIA.brainImage} alt="" className="h-40 w-40 object-contain" loading="lazy" />
            </div>
          </div>
        </section>

        {/* ──── SUPERPOWERS ──── */}
        <section id="superpowers" className="section-padding memo-dark-zone">
          <div className="container-shell">
            <h2 className="section-heading text-center text-white">
              Superpowers for minds that can&apos;t do it all
            </h2>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SUPERPOWERS.map((sp) => (
                <article key={sp.id} className="memo-sp-card">
                  <img src={sp.image} alt={sp.title} className="h-44 w-full object-cover" loading="lazy" />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <img src={sp.icon} alt="" className="h-5 w-5 object-contain" loading="lazy" />
                      <h3 className="text-base font-semibold text-white">{sp.title}</h3>
                      {sp.isNew && (
                        <span className="rounded-full bg-[#FF66C4]/20 px-2 py-0.5 text-[10px] font-bold text-[#FF66C4]">NEW FEATURE</span>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/75">{sp.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button type="button" className="cta-outline-light px-8 py-3 text-sm">
                {UI.discoverSuperpowers}
              </button>
            </div>
          </div>
        </section>

        {/* ──── CHAT DEMOS ──── */}
        <section className="section-padding bg-[#f7f9ff]">
          <div className="container-shell">
            <h2 className="section-heading text-center text-[#1a1a2e]">
              {UI.chatDemoHeading}
            </h2>

            <div className="relative mt-8">
              <button
                type="button"
                className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-lg md:block"
                onClick={() => scrollCarousel(chatScrollRef, "left")}
                aria-label="Scroll left"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#557bf4" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <div ref={chatScrollRef} className="memo-carousel px-1">
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
                onClick={() => scrollCarousel(chatScrollRef, "right")}
                aria-label="Scroll right"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#557bf4" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        </section>

        {/* ──── PRICING ──── */}
        <section id="pricing" className="section-padding bg-[#f5f8ff]">
          <div className="container-shell">
            <div className="text-center">
              <h2 className="section-heading text-[#1a1a2e]">Your chaos, your plan</h2>
              <p className="mt-2 text-lg text-[#555]">Choose how you want Memorae to help you</p>
              <p className="text-xl font-semibold text-[#333]">don&apos;t lose your head.</p>
            </div>

            {/* Mascot */}
            <div className="mx-auto mt-4 flex justify-center">
              <img src={MEDIA.mascot} alt="" className="h-20 w-20 object-contain mascot-float" loading="lazy" />
            </div>

            {/* Billing toggle */}
            <div className="mx-auto mt-6 flex w-fit items-center gap-2">
              <div className="memo-billing-toggle">
                <button
                  type="button"
                  className={`memo-billing-btn ${billingCycle === "monthly" ? "memo-billing-btn-active" : "memo-billing-btn-inactive"}`}
                  onClick={() => setBillingCycle("monthly")}
                >
                  {UI.monthly}
                </button>
                <button
                  type="button"
                  className={`memo-billing-btn ${billingCycle === "annual" ? "memo-billing-btn-active" : "memo-billing-btn-inactive"}`}
                  onClick={() => setBillingCycle("annual")}
                >
                  {UI.annual}
                </button>
              </div>
              <span className="rounded-full bg-[#FF66C4] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                {UI.fiftyOff}
              </span>
            </div>

            {/* Plan cards */}
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {PRICING_PLANS.map((plan) => (
                <article key={plan.id} className={`memo-pricing-card ${plan.popular ? "memo-pricing-popular" : ""}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#557bf4] px-4 py-1 text-xs font-bold text-white">
                      {UI.mostPopular}
                    </div>
                  )}
                  <img src={plan.thumbnailImage} alt={plan.name} className="h-40 w-full rounded-2xl object-cover" loading="lazy" />
                  <img src={plan.mascotImage} alt="" className="mx-auto -mt-8 h-16 w-16 object-contain" loading="lazy" />

                  {isAnnual && (
                    <div className="mx-auto mt-2 w-fit rounded-full bg-[#557bf4]/10 px-3 py-0.5 text-[10px] font-bold text-[#557bf4]">
                      {UI.sixMonthsFree}
                    </div>
                  )}

                  <h3 className="mt-3 text-center text-xl font-bold text-[#23364a]">{plan.name}</h3>
                  <p className="text-center text-xs font-semibold tracking-widest text-[#888]">{plan.tier}</p>

                  <p className="mt-3 text-center text-4xl font-bold text-[#557bf4]">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    <span className="ml-1 text-sm font-normal text-[#999]">/mo</span>
                  </p>
                  {isAnnual && (
                    <p className="text-center text-xs text-[#888]">
                      {plan.annualPrice === "$3" ? "$36" : plan.annualPrice === "$6" ? "$72" : "$216"}/year
                    </p>
                  )}

                  <ul className="mt-4 space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[#444]">
                        <span className="mt-0.5 text-[#557bf4]">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="cta-primary mt-5 w-full justify-center px-4 py-3 text-sm"
                    onClick={() => trackLandingEvent("cta_primary_click", { locale, section: `pricing_${plan.id}` })}
                  >
                    {UI.tryFree} &rarr;
                  </button>

                  {plan.id === "supernova" && (
                    <div className="mt-3 flex items-center justify-center gap-2">
                      <img src={MEDIA.videoThumb} alt="" className="h-8 w-8 rounded object-cover" loading="lazy" />
                      <span className="text-xs font-semibold text-[#557bf4]">{UI.videoDemo}</span>
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* 14-day guarantee */}
            <div className="memo-guarantee mx-auto mt-10 flex max-w-2xl items-center gap-4">
              <img src={MEDIA.guaranteeIcon} alt="" className="h-12 w-12 object-contain" loading="lazy" />
              <div>
                <h4 className="text-base font-bold text-[#23364a]">{UI.guarantee}</h4>
                <p className="mt-1 text-sm text-[#666]">{UI.guaranteeDesc}</p>
              </div>
            </div>

            {/* Supernova feature comparison */}
            <div className="mt-14">
              <h3 className="text-center text-xl font-bold text-[#23364a]">{UI.supernovaHeading}</h3>
              <div className="mx-auto mt-6 max-w-3xl">
                <img src={MEDIA.supernovaRow} alt="" className="mb-6 w-full rounded-2xl object-cover" loading="lazy" />
                <div className="grid gap-4 sm:grid-cols-2">
                  {SUPERNOVA_FEATURES.map((f) => (
                    <div key={f.title} className="flex items-start gap-3 rounded-xl border border-[#e8edf6] bg-white p-4">
                      <img src={f.icon} alt="" className="h-6 w-6 object-contain" loading="lazy" />
                      <div>
                        <p className="text-sm font-semibold text-[#333]">{f.title}</p>
                        <p className="text-xs text-[#777]">{f.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──── CHAOS / CHANNELS PHILOSOPHY ──── */}
        <section id="channels" className="section-padding memo-channel-zone">
          <div className="container-shell">
            <h2 className="section-heading text-center text-white">{CHAOS_SECTION.heading}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-white/80">{CHAOS_SECTION.subheading}</p>

            <div className="mx-auto mt-6 max-w-3xl space-y-4">
              {CHAOS_SECTION.paragraphs.map((p, i) => (
                <p key={i} className="text-center text-[15px] leading-7 text-white/85">{p}</p>
              ))}
            </div>

            {/* Animated card mockups */}
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                { title: "Meeting", subtitle: "Tomorrow 9:00 AM", icon: "📅" },
                { title: "Shopping list", subtitle: "5 items pending", icon: "📝" },
                { title: "Reminder", subtitle: "Send the report", icon: "⏰" },
              ].map((card) => (
                <div key={card.title} className="memo-notif-mock text-white mascot-float" style={{ animationDelay: `${Math.random() * 2}s` }}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{card.icon}</span>
                    <div>
                      <p className="text-sm font-semibold">{card.title}</p>
                      <p className="text-xs text-white/70">{card.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sub-sections with background images */}
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {CHAOS_SECTION.cards.map((card) => (
                <article
                  key={card.title}
                  className="memo-chaos-card flex items-end"
                  style={{
                    backgroundImage: `linear-gradient(180deg,rgba(9,22,44,0.25),rgba(9,22,44,0.72)),url(${card.bg})`,
                  }}
                >
                  <h3 className="text-xl font-semibold text-white md:text-2xl">{card.title}</h3>
                </article>
              ))}
            </div>

            {/* Notification mock */}
            <div className="mx-auto mt-10 flex justify-center">
              <div className="memo-notif-mock flex items-center gap-3 text-white">
                <img src={MEDIA.notifIcon1} alt="" className="h-8 w-8 object-contain" loading="lazy" />
                <div>
                  <p className="text-sm font-semibold">Remember to send the report...</p>
                  <p className="text-xs text-white/60">Memorae &middot; just now</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──── STATS + SOCIAL PROOF ──── */}
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

        {/* ──── TESTIMONIALS ──── */}
        <section className="section-padding bg-[#f7f9ff]">
          <div className="container-shell">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="section-heading text-[#1a1a2e]">{UI.usersLove}</h2>
              </div>
              <div className="hidden gap-2 md:flex">
                <button
                  type="button"
                  className="rounded-full bg-white p-2 shadow"
                  onClick={() => scrollCarousel(testimonialScrollRef, "left")}
                  aria-label="Previous testimonial"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#557bf4" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button
                  type="button"
                  className="rounded-full bg-white p-2 shadow"
                  onClick={() => scrollCarousel(testimonialScrollRef, "right")}
                  aria-label="Next testimonial"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#557bf4" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </div>
            </div>

            <div ref={testimonialScrollRef} className="memo-carousel mt-8">
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

        {/* ──── FAQ ──── */}
        <section id="faq" className="section-padding memo-faq-zone">
          <div className="container-shell">
            <h2 className="section-heading text-white">{UI.faqHeading}</h2>
            <p className="mt-2 text-white/70">{UI.faqSubheading}</p>

            <div className="mt-6 space-y-3">
              {FAQ_ITEMS.map((item, idx) => (
                <div key={item.question} className="memo-faq-item p-5">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left text-base font-semibold text-white"
                    onClick={() => {
                      setOpenFaq(openFaq === idx ? null : idx);
                      if (openFaq !== idx) {
                        trackLandingEvent("faq_expand", { locale, section: "faq", question_index: idx + 1 });
                      }
                    }}
                    aria-expanded={openFaq === idx}
                  >
                    <span>{item.question}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      className={`ml-4 flex-shrink-0 transition-transform ${openFaq === idx ? "rotate-180" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {openFaq === idx && (
                    <p className="mt-3 text-sm leading-7 text-white/80 animate-fade-in-up">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button type="button" className="text-sm font-semibold text-[#557bf4]">{UI.viewMore}</button>
            </div>
          </div>
        </section>

        {/* ──── FINAL CTA ──── */}
        <section className="section-padding bg-white">
          <div className="container-shell flex flex-col items-center gap-6 text-center">
            <button type="button" className="cta-primary px-14 py-4 text-xl" onClick={() => scrollToId("pricing")}>
              {UI.tryFree} &rarr;
            </button>
            <div className="flex items-center gap-4">
              <a href={STORE_LINKS.ios} target="_blank" rel="noopener noreferrer">
                <img src={MEDIA.appStoreBadge} alt="App Store" className="h-10 object-contain" loading="lazy" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ════════════ FOOTER ════════════ */}
      <footer
        className="border-t border-white/20 text-white"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(8, 13, 28, 0.88), rgba(8, 13, 28, 0.92)), url(${MEDIA.footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-shell py-12">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Logo */}
            <img src={MEDIA.logoHome} alt="Memorae" className="h-8 object-contain" loading="lazy" />

            <p className="text-lg font-semibold text-white/90">{FOOTER.tagline}</p>
            <p className="text-sm text-white/60">{FOOTER.subtitle}</p>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
              {FOOTER.links.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              {Object.entries(SOCIAL_ICONS).map(([name, svg]) => (
                <a
                  key={name}
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label={name}
                  dangerouslySetInnerHTML={{ __html: svg }}
                />
              ))}
            </div>

            <p className="text-xs text-white/50">
              &copy; {FOOTER.copyright}
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA bar */}
      <div className="fixed inset-x-4 bottom-4 z-40 rounded-2xl border border-[#e8edf6] bg-white/95 p-2 shadow-[0_16px_36px_rgba(27,82,95,0.14)] backdrop-blur sm:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={STORE_LINKS.ios}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary h-11 justify-center px-3 text-xs"
          >
            App Store
          </a>
          <a
            href={STORE_LINKS.android}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary h-11 justify-center px-3 text-xs"
          >
            Google Play
          </a>
        </div>
      </div>
    </div>
  );
}
