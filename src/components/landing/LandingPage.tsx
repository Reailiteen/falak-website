"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import {
  CTA_MODE,
  LANDING_CONTENT,
  SMS_ENABLED,
  STORE_LINKS,
  STATS_WITH_SOURCES,
  THEME_TOKENS,
} from "@/lib/landing/content";
import { buildTrackedUrl, trackLandingEvent } from "@/lib/landing/analytics";
import type { FeatureItem, Locale } from "@/lib/landing/types";

const SECTION_IDS = {
  howItWorks: "how-it-works",
  parents: "for-parents",
  kids: "for-kids",
  faq: "faq",
  pricing: "pricing-section",
  channels: "channels",
  app: "memorae_app",
};

type NavMenu = "superpowers" | "channels" | null;
type BillingCycle = "monthly" | "yearly";

const REPLICA_MEDIA = {
  heroDesktop: "https://cdn.memorae.ai/l3/Homepage-new-desktop.webp",
  heroMobile: "https://cdn.memorae.ai/l3/Mobile-2.webp",
  orb: "https://cdn.memorae.ai/assets/mm-1.webp",
  ring: "https://memorae.ai/_next/image/?url=https%3A%2F%2Fcdn.memorae.ai%2Fl3%2Fring.webp&w=256&q=75",
  bubble: "https://memorae.ai/_next/image/?url=https%3A%2F%2Fcdn.memorae.ai%2Fl3%2Fbubble-home2.webp&w=256&q=75",
  note1: "https://memorae.ai/_next/image/?url=https%3A%2F%2Fcdn.memorae.ai%2Fl3%2Fimage%2520290.png&w=128&q=75",
  note2: "https://memorae.ai/_next/image/?url=https%3A%2F%2Fcdn.memorae.ai%2Fl3%2Fimage%2520294.png&w=128&q=75",
  note3: "https://memorae.ai/_next/image/?url=https%3A%2F%2Fcdn.memorae.ai%2Fl3%2Fimage%2520293.png&w=128&q=75",
  mascot: "https://memorae.ai/_next/image/?url=https%3A%2F%2Fcdn.memorae.ai%2Fl3%2FGemini_Generated_Image_cy1cxhcy1cxhcy1c.webp&w=1080&q=75",
  forget2: "https://memorae.ai/_next/image/?url=https%3A%2F%2Fcdn.memorae.ai%2Fl3%2Fforget_card2_bg.webp&w=1920&q=75",
  forget3: "https://memorae.ai/_next/image/?url=https%3A%2F%2Fcdn.memorae.ai%2Fl3%2Fforget_card3_bg.webp&w=1920&q=75",
  forget4: "https://memorae.ai/_next/image/?url=https%3A%2F%2Fcdn.memorae.ai%2Fl3%2Fforget_card4_bg.webp&w=1920&q=75",
  multiCards: "https://memorae.ai/_next/image/?url=https%3A%2F%2Fcdn.memorae.ai%2Fl3%2Fmulticards1_bg_2.webp&w=1920&q=75",
  plan1: "https://cdn.memorae.ai/l3/supernova-thumbnail.webp",
  plan2: "https://cdn.memorae.ai/l3/origin-thumbnail.webp",
  plan3: "https://cdn.memorae.ai/l3/bigbang-thumbnail.webp",
  planMascot1: "https://cdn.memorae.ai/l3/supernova-l5-memo-mascot.webp",
  planMascot2: "https://cdn.memorae.ai/l3/origin-l5-memo-mascot.webp",
  planMascot3: "https://cdn.memorae.ai/l3/bigbanh-l5-memo-mascot.webp",
  testimonial1: "https://memorae.ai/_next/image/?url=https%3A%2F%2Fcdn.memorae.ai%2Fl3%2Fhuman2_testimonial.webp&w=96&q=75",
  testimonial2: "https://memorae.ai/_next/image/?url=https%3A%2F%2Fcdn.memorae.ai%2Fl3%2Fhuman3_testimonial.webp&w=96&q=75",
  testimonial3: "https://memorae.ai/_next/image/?url=https%3A%2F%2Fcdn.memorae.ai%2Fl3%2Fhuman1_testimonial.webp&w=96&q=75",
  appPromo: "https://cdn.memorae.ai/l3/Frame%2014.png",
  footer: "https://cdn.memorae.ai/l3/MemoraeFooterbg.webp",
};

const SUPERPOWER_ITEMS = [
  {
    id: "quests",
    title: "Quest Scheduling",
    image: "https://cdn.memorae.ai/l3/Recordatorios%20ilimitados.webp",
    targetId: SECTION_IDS.howItWorks,
  },
  {
    id: "rewards",
    title: "Rewards Store",
    image: "https://cdn.memorae.ai/l3/Bau%CC%81l%20de%20los%20recuerdos.webp",
    targetId: SECTION_IDS.parents,
  },
  {
    id: "support",
    title: "Calm Parent Support",
    image: "https://cdn.memorae.ai/l3/Priority%20support-6.webp",
    targetId: SECTION_IDS.faq,
  },
];

const CHANNEL_ITEMS = [
  {
    id: "app",
    title: "Falak App",
    subtitle: "Main experience",
    image: "https://cdn.memorae.ai/l3/Frame%2014.png",
  },
  {
    id: "notify",
    title: "Push Notifications",
    subtitle: "Gentle reminders",
    image: "https://cdn.memorae.ai/l3/_Notification-iconType.png",
  },
  {
    id: "family",
    title: "Family Flows",
    subtitle: "Parent + child roles",
    image: "https://cdn.memorae.ai/l3/friend%20to%20friend%20reminders.webp",
  },
];

const PRICING_PLANS = {
  monthly: [
    { id: "start", name: "Falak Start", price: "$5", period: "/mo", image: REPLICA_MEDIA.plan1 },
    { id: "plus", name: "Falak Plus", price: "$12", period: "/mo", image: REPLICA_MEDIA.plan2 },
    { id: "family", name: "Falak Family", price: "$19", period: "/mo", image: REPLICA_MEDIA.plan3 },
  ],
  yearly: [
    { id: "start", name: "Falak Start", price: "$48", period: "/yr", image: REPLICA_MEDIA.plan1 },
    { id: "plus", name: "Falak Plus", price: "$108", period: "/yr", image: REPLICA_MEDIA.plan2 },
    { id: "family", name: "Falak Family", price: "$171", period: "/yr", image: REPLICA_MEDIA.plan3 },
  ],
} satisfies Record<BillingCycle, Array<{ id: string; name: string; price: string; period: string; image: string }>>;

export function LandingPage() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const saved = window.localStorage.getItem("falak_locale");
    if (saved === "en" || saved === "ar") {
      return saved;
    }

    return window.navigator.language.toLowerCase().startsWith("ar") ? "ar" : "en";
  });
  const [phone, setPhone] = useState("");
  const [activeMenu, setActiveMenu] = useState<NavMenu>(null);
  const [showTalkModal, setShowTalkModal] = useState(false);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("yearly");
  const viewedRef = useRef(false);
  const previousLocaleRef = useRef<Locale>(locale);
  const depthRef = useRef({ half: false, nearEnd: false });

  const content = LANDING_CONTENT[locale];
  const isArabic = locale === "ar";
  const direction = isArabic ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    window.localStorage.setItem("falak_locale", locale);

    if (!viewedRef.current) {
      trackLandingEvent("landing_view", { locale, section: "page" });
      viewedRef.current = true;
      return;
    }

    if (previousLocaleRef.current !== locale) {
      trackLandingEvent("language_switch", {
        from: previousLocaleRef.current,
        to: locale,
      });
      previousLocaleRef.current = locale;
    }
  }, [direction, locale]);

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

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [locale]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setShowTalkModal(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const iosLink = useMemo(
    () =>
      buildTrackedUrl(STORE_LINKS.ios, {
        locale,
      }),
    [locale],
  );

  const androidLink = useMemo(
    () =>
      buildTrackedUrl(STORE_LINKS.android, {
        locale,
      }),
    [locale],
  );

  const onStoreClick = (store: "ios" | "android", section: string) => {
    trackLandingEvent("cta_primary_click", {
      locale,
      store,
      section,
      cta_mode: CTA_MODE,
    });

    trackLandingEvent(store === "ios" ? "cta_store_ios" : "cta_store_android", {
      locale,
      section,
    });
  };

  const scrollToId = (id: string) => {
    if (typeof window === "undefined") {
      return;
    }

    window.location.hash = id;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const onTryFree = (section: string) => {
    trackLandingEvent("cta_primary_click", {
      locale,
      section,
      cta_mode: CTA_MODE,
      action: "try_free",
    });
    scrollToId(SECTION_IDS.pricing);
  };

  const onPhoneSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    trackLandingEvent("cta_phone_submit", {
      locale,
      section: "hero",
      cta_mode: CTA_MODE,
      sms_enabled: SMS_ENABLED,
      has_value: phone.trim().length > 0,
    });
  };

  const messageLines = isArabic
    ? [
        "فلك يساعدك على التذكر والمتابعة والتنفيذ.",
        "أنت تكتب ما تحتاجه، وفلك ينظمه في الخلفية.",
        "المهام والعادات والمكافآت في تجربة واحدة متناسقة.",
        "متاح للأسرة بالكامل: ولي الأمر والطفل معاً.",
      ]
    : [
        "Falak remembers, organizes, and helps your family execute.",
        "You write what matters, Falak keeps it structured.",
        "Quests, habits, and rewards flow in one calm system.",
        "Built for both guardians and children in one connected experience.",
      ];

  const floatingTags = isArabic
    ? ["عادات", "مهام", "مكافآت", "تركيز", "نمو", "استمرارية"]
    : ["Habits", "Quests", "Rewards", "Focus", "Growth", "Consistency"];

  return (
    <div
      dir={direction}
      className="relative min-h-screen overflow-x-clip bg-[var(--falak-bg)] text-[var(--falak-text)]"
      style={{
        ["--falak-primary" as string]: THEME_TOKENS.color.primary,
        ["--falak-primary-strong" as string]: THEME_TOKENS.color.primaryStrong,
        ["--falak-accent" as string]: THEME_TOKENS.color.accent,
        ["--falak-bg" as string]: THEME_TOKENS.color.surface,
        ["--falak-surface-alt" as string]: THEME_TOKENS.color.surfaceAlt,
        ["--falak-text" as string]: THEME_TOKENS.color.text,
        ["--falak-text-muted" as string]: THEME_TOKENS.color.textMuted,
        ["--falak-border" as string]: THEME_TOKENS.color.border,
      }}
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(80%_90%_at_50%_15%,rgba(85,123,244,0.42),rgba(255,102,196,0.28)_35%,rgba(14,27,49,0.92)_100%)]" />

      <header className="sticky top-3 z-40 px-3 md:top-5" onMouseLeave={() => setActiveMenu(null)}>
        <div className="mx-auto max-w-[1300px]">
          <div className="falak-nav-pill">
            <a href="#top" className="text-2xl font-semibold tracking-tight text-white">
              {content.nav.logoWord}
            </a>

            <nav className="hidden items-center gap-7 text-sm font-medium text-white/85 lg:flex">
              <button type="button" className="falak-nav-link cursor-pointer" onMouseEnter={() => setActiveMenu("superpowers")}>
                {isArabic ? "المزايا" : "Superpowers"}
              </button>
              <button type="button" className="falak-nav-link cursor-pointer" onMouseEnter={() => setActiveMenu("channels")}>
                {isArabic ? "القنوات" : "Channels"}
              </button>
              <button type="button" className="falak-nav-link cursor-pointer" onClick={() => onTryFree("nav_pricing")}>
                {isArabic ? "الأسعار" : "Pricing"}
              </button>
              <a href={`#${SECTION_IDS.howItWorks}`} className="falak-nav-link">
                {content.nav.links.howItWorks}
              </a>
              <a href={`#${SECTION_IDS.faq}`} className="falak-nav-link">
                {content.nav.links.faq}
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="cta-secondary px-4 py-2 text-sm"
                onClick={() => setLocale(isArabic ? "en" : "ar")}
                aria-label="Switch language"
              >
                {content.nav.languageToggle}
              </button>
              <button type="button" className="cta-primary hidden cursor-pointer px-5 py-2.5 text-sm sm:inline-flex" onClick={() => onTryFree("nav")}>
                {isArabic ? "ابدأ مجاناً" : "Try free"}
              </button>
            </div>
          </div>

          {activeMenu ? (
            <div className="falak-mega-menu hidden lg:block" onMouseEnter={() => setActiveMenu(activeMenu)}>
              {activeMenu === "superpowers" ? (
                <>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-[#333333]">{isArabic ? "المزايا" : "Superpowers"}</h3>
                    <button type="button" className="text-sm font-semibold text-[#557BF4]" onClick={() => setActiveMenu(null)}>
                      {isArabic ? "إغلاق" : "Close"}
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {SUPERPOWER_ITEMS.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className="falak-mega-card cursor-pointer"
                        onClick={() => {
                          setActiveMenu(null);
                          scrollToId(item.targetId);
                        }}
                      >
                        <img src={item.image} alt={item.title} className="h-44 w-full rounded-2xl object-cover" loading="lazy" />
                        <p className="mt-3 text-left text-base font-semibold text-[#172f39]">{item.title}</p>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-[#333333]">{isArabic ? "قنوات فلك" : "Falak Channels"}</h3>
                    <button type="button" className="text-sm font-semibold text-[#557BF4]" onClick={() => setActiveMenu(null)}>
                      {isArabic ? "إغلاق" : "Close"}
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {CHANNEL_ITEMS.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className="falak-mega-card cursor-pointer"
                        onClick={() => {
                          setActiveMenu(null);
                          scrollToId(SECTION_IDS.channels);
                        }}
                      >
                        <img src={item.image} alt={item.title} className="h-44 w-full rounded-2xl object-cover" loading="lazy" />
                        <p className="mt-3 text-left text-base font-semibold text-[#172f39]">{item.title}</p>
                        <p className="text-left text-xs text-[#5a7082]">{item.subtitle}</p>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : null}
        </div>
      </header>

      <main id="top" className="relative">
        <section className="falak-hero-bg relative overflow-hidden px-4 pb-24 pt-10 md:pt-10">
          <div className="container-shell relative">
            <div className="pointer-events-none absolute bottom-20 left-16 hidden lg:left-[90%] lg:top-[20%] lg:flex">
              <img
                src="https://memorae.ai/_next/image/?url=https%3A%2F%2Fcdn.memorae.ai%2Fl3%2F6-new.webp&w=256&q=75"
                alt=""
                className="h-16 w-16 object-contain"
                loading="lazy"
              />
            </div>
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center text-white">
              <div className="mb-4 flex items-center gap-3 rounded-full border border-white/25 bg-white/12 px-4 py-1.5 text-sm backdrop-blur-md">
                <span className="flex items-center gap-0.5 text-[#FFD369]" aria-hidden="true">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </span>
                <span className="font-semibold">4.8</span>
                <span className="opacity-85">|</span>
                <span className="opacity-90">{isArabic ? "موثوق لدى عائلات حول العالم" : "Trusted by families worldwide"}</span>
              </div>

              <h1 className="text-balance text-[47px] font-semibold leading-[4rem] tracking-tight text-white md:text-[3.5rem] md:leading-[4.5rem] lg:text-[6rem] lg:leading-[6rem]">
                {content.hero.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
                {content.hero.subtitle}
              </p>

              <div className="mt-6 flex flex-col items-center gap-4 md:flex-row">
                <button type="button" className="cta-primary cursor-pointer px-14 py-[14px] text-xl md:text-2xl" onClick={() => onTryFree("hero")}>
                  {isArabic ? "ابدأ مجاناً" : "Try free"}
                </button>
                <button type="button" className="cta-outline-light cursor-pointer px-10 py-[14px] text-xl md:text-2xl" onClick={() => setShowTalkModal(true)}>
                  {isArabic ? "تحدث مع فلك" : "Talk to Falak"}
                </button>
              </div>

              <form
                className="mt-6 w-full max-w-xl rounded-2xl border border-white/28 bg-white/15 p-4 backdrop-blur-md"
                onSubmit={onPhoneSubmit}
                aria-label={content.hero.phoneLabel}
              >
                <p className="mb-2 text-left text-sm font-semibold text-white/95">{content.hero.phoneLabel}</p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className="h-12 w-full rounded-xl border border-white/30 bg-white/95 px-4 text-sm text-[#19313b] outline-none transition focus:border-[#557BF4] focus:ring-2 focus:ring-[#557BF4]/35"
                    placeholder={content.hero.phonePlaceholder}
                    disabled={!SMS_ENABLED}
                    aria-disabled={!SMS_ENABLED}
                  />
                  <button
                    type="submit"
                    className="cta-primary h-12 min-w-44 justify-center px-5 disabled:cursor-not-allowed disabled:opacity-65"
                    disabled={!SMS_ENABLED}
                  >
                    {content.hero.phoneButton}
                  </button>
                </div>
                {!SMS_ENABLED ? <p className="mt-2 text-left text-xs text-white/90">{content.hero.phoneDisabledNote}</p> : null}
              </form>
            </div>

            <div className="pointer-events-none absolute -left-5 mt-[22%] -translate-y-1/2 md:mt-[10%]">
              <img src={REPLICA_MEDIA.ring} alt="" className="falak-hero-orb object-contain" loading="lazy" />
            </div>
            <div className="pointer-events-none absolute -right-6 mt-[22%] hidden -translate-y-1/2 md:block">
              <img src={REPLICA_MEDIA.bubble} alt="" className="falak-hero-orb object-contain" loading="lazy" />
            </div>
            <div className="pointer-events-none absolute -left-2 top-[24%] hidden rotate-[-15deg] lg:block">
              <div className="chip border-white/40 bg-white/20 text-white">{isArabic ? "هدوء" : "Calm"}</div>
            </div>
            <div className="pointer-events-none absolute -right-2 top-[34%] hidden rotate-[11deg] lg:block">
              <div className="chip border-white/40 bg-white/20 text-white">{isArabic ? "ثبات" : "Steady"}</div>
            </div>

            <div className="mx-auto mt-8 flex max-w-[250px] items-center gap-4 md:hidden">
              <article className="falak-app-side-card w-full">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-white/90 p-2 shadow-sm">
                    <div className="flex h-full w-full items-center justify-center rounded-xl bg-[linear-gradient(140deg,#7CCFD6,#557BF4,#FF66C4)] text-lg font-bold text-white">
                      F
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#557BF4]">{isArabic ? "قريباً" : "Soon"}</p>
                    <h3 className="text-lg font-semibold text-[#102B35]">Falak App</h3>
                    <p className="text-sm text-[#5B6F75]">{isArabic ? "على App Store و Google Play" : "On App Store and Google Play"}</p>
                  </div>
                </div>
              </article>
            </div>

            <div className="pointer-events-auto hidden md:absolute md:right-10 md:top-[40%] md:block md:max-w-xs">
              <article className="falak-app-side-card">
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-2xl bg-white/90 p-2 shadow-sm">
                    <div className="flex h-full w-full items-center justify-center rounded-xl bg-[linear-gradient(140deg,#7CCFD6,#557BF4,#FF66C4)] text-lg font-bold text-white">
                      F
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="mb-1 w-fit rounded-md bg-[#FF66C4]/15 px-2 py-[2px] text-[10px] font-semibold text-[#FF66C4]">
                      {isArabic ? "قريباً" : "Coming soon"}
                    </span>
                    <h3 className="text-left text-lg font-semibold text-[#111827]">Falak App</h3>
                    <p className="text-left text-sm text-[#6B7280]">{isArabic ? "متاح على المتجرين" : "Available on both stores"}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="pointer-events-none absolute -left-[75%] -mt-[95%] hidden md:left-[20%] md:top-[40%] md:block md:-mt-0">
            <img src={REPLICA_MEDIA.orb} alt="" className="h-20 w-20 -rotate-12 object-contain md:h-40 md:w-40" loading="lazy" />
          </div>
          <div className="pointer-events-none absolute bottom-0 h-24 w-full bg-gradient-to-t from-white/50 to-transparent" />
        </section>

        <section className="relative bg-white px-4">
          <div className="mx-auto flex min-h-[40vh] max-w-[450px] flex-col items-center justify-center gap-1 px-2 py-28 text-center md:min-h-[70vh] md:max-w-[1080px] md:py-52">
            <div className="falak-message-stack">
              {messageLines.map((line) => (
                <p key={line} className="falak-message-line">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between overflow-hidden bg-white px-4 pb-10 md:min-h-[700px] md:pb-20 md:py-40">
          <img src={REPLICA_MEDIA.note2} alt="" className="pointer-events-none absolute left-[5%] top-[20%] z-0 h-14 w-12 -rotate-12 object-contain md:left-auto md:right-[10%] md:h-20 md:w-16" loading="lazy" />
          <img src={REPLICA_MEDIA.note1} alt="" className="pointer-events-none absolute right-[5%] top-[35%] z-0 h-14 w-12 rotate-12 object-contain md:right-[15%] md:h-20 md:w-16" loading="lazy" />
          <img src={REPLICA_MEDIA.note3} alt="" className="pointer-events-none absolute right-[25%] top-[2%] z-0 h-12 w-10 rotate-6 object-contain md:right-[20%] md:top-[45%] md:h-16 md:w-14" loading="lazy" />

          <div className="relative z-10 mt-16 w-full max-w-6xl px-4 text-center md:mt-0">
            <h2 className="text-xl font-semibold leading-tight text-[#333333] md:text-3xl lg:text-4xl">
              {isArabic ? "خطوات واضحة، نتائج هادئة كل يوم." : "Clear steps, calm progress every day."}
            </h2>
            <p className="mt-2 text-lg font-semibold leading-tight text-[#333333] md:text-2xl lg:text-3xl">
              {isArabic ? "بدون ضغط، فقط نمو ثابت للأسرة." : "No pressure, just steady family growth."}
            </p>
          </div>

          <div className="container-shell relative z-10">
            <h2 className="falak-memory-title mt-40">
              {isArabic ? "نظام هادئ ينظم يوم العائلة" : "A calm system for daily family flow"}
            </h2>

            <div className="falak-floating-tags" aria-hidden="true">
              {floatingTags.map((tag, index) => (
                <span key={tag} className={`falak-float-tag falak-float-tag-${(index % 6) + 1}`}>
                  {tag}
                </span>
              ))}
            </div>

            <img
              src={REPLICA_MEDIA.mascot}
              alt=""
              className="pointer-events-none absolute -bottom-16 -right-[10%] hidden h-[428px] w-[428px] object-contain md:block 2xl:right-0"
              loading="lazy"
            />
          </div>
        </section>

        <section id={SECTION_IDS.parents} className="section-padding falak-chaos-zone">
          <div className="container-shell">
            <h2 className="section-heading text-center text-white">{content.roleSplit.heading}</h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <article className="falak-chaos-card" style={{ backgroundImage: `linear-gradient(180deg,rgba(9,22,44,0.25),rgba(9,22,44,0.52)),url(${REPLICA_MEDIA.forget2})` }}>
                <h3 className="text-2xl font-semibold text-white">{content.roleSplit.parentTitle}</h3>
                <p className="mt-3 text-[15px] leading-7 text-white/90">{content.roleSplit.parentDescription}</p>
              </article>
              <article
                id={SECTION_IDS.kids}
                className="falak-chaos-card"
                style={{ backgroundImage: `linear-gradient(180deg,rgba(9,22,44,0.25),rgba(9,22,44,0.52)),url(${REPLICA_MEDIA.forget3})` }}
              >
                <h3 className="text-2xl font-semibold text-white">{content.roleSplit.kidTitle}</h3>
                <p className="mt-3 text-[15px] leading-7 text-white/90">{content.roleSplit.kidDescription}</p>
              </article>
            </div>
          </div>
        </section>

        <section id={SECTION_IDS.howItWorks} className="section-padding bg-white pt-4">
          <div className="container-shell">
            <h2 className="section-heading text-center">{content.howItWorks.heading}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {content.howItWorks.steps.map((step, index) => {
                const backgrounds = [REPLICA_MEDIA.forget2, REPLICA_MEDIA.forget3, REPLICA_MEDIA.forget4];
                return (
                  <article
                    key={step.title}
                    className="falak-forget-card"
                    style={{ backgroundImage: `linear-gradient(180deg,rgba(255,255,255,0.18),rgba(19,28,47,0.58)),url(${backgrounds[index % 3]})` }}
                  >
                    <p className="text-sm font-semibold text-white/90">0{index + 1}</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/90">{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding falak-multicards-zone pt-2">
          <div className="container-shell">
            <h2 className="section-heading text-center text-white">{content.features.heading}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {content.features.items.map((feature) => (
                <article key={feature.title} className="falak-multicard p-6">
                  <FeatureIcon icon={feature.icon} />
                  <h3 className="mt-3 text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/88">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#f7f9ff]">
          <div className="container-shell">
            <h2 className="section-heading text-center">{content.proof.heading}</h2>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              <article className="falak-plan-card">
                <img src={REPLICA_MEDIA.plan1} alt="" className="h-40 w-full rounded-2xl object-cover" loading="lazy" />
                <img src={REPLICA_MEDIA.planMascot1} alt="" className="mx-auto -mt-8 h-16 w-16 object-contain" loading="lazy" />
                <p className="mt-2 text-center text-sm font-semibold text-[#557BF4]">Falak Start</p>
              </article>
              <article className="falak-plan-card">
                <img src={REPLICA_MEDIA.plan2} alt="" className="h-40 w-full rounded-2xl object-cover" loading="lazy" />
                <img src={REPLICA_MEDIA.planMascot2} alt="" className="mx-auto -mt-8 h-16 w-16 object-contain" loading="lazy" />
                <p className="mt-2 text-center text-sm font-semibold text-[#557BF4]">Falak Plus</p>
              </article>
              <article className="falak-plan-card">
                <img src={REPLICA_MEDIA.plan3} alt="" className="h-40 w-full rounded-2xl object-cover" loading="lazy" />
                <img src={REPLICA_MEDIA.planMascot3} alt="" className="mx-auto -mt-8 h-16 w-16 object-contain" loading="lazy" />
                <p className="mt-2 text-center text-sm font-semibold text-[#557BF4]">Falak Family</p>
              </article>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {content.proof.testimonials.map((item) => (
                <article key={item.author} className="glass-card p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <img src={REPLICA_MEDIA.testimonial1} alt="" className="h-8 w-8 rounded-full object-cover" loading="lazy" />
                    <img src={REPLICA_MEDIA.testimonial2} alt="" className="h-8 w-8 rounded-full object-cover" loading="lazy" />
                    <img src={REPLICA_MEDIA.testimonial3} alt="" className="h-8 w-8 rounded-full object-cover" loading="lazy" />
                  </div>
                  <p className="text-sm leading-7 text-[var(--falak-text-muted)]">“{item.quote}”</p>
                  <p className="mt-4 text-sm font-semibold text-[var(--falak-text)]">{item.author}</p>
                  <p className="text-xs text-[var(--falak-text-muted)]">{item.role}</p>
                </article>
              ))}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {content.proof.stats.map((stat) => (
                <article key={stat.label} className="glass-card p-5">
                  <p className="text-2xl font-semibold text-[var(--falak-primary-strong)]">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-[var(--falak-text)]">{stat.label}</p>
                  <p className="mt-1 text-xs text-[var(--falak-text-muted)]">{stat.source}</p>
                </article>
              ))}
            </div>
            <p className="mt-4 text-xs text-[var(--falak-text-muted)]">{STATS_WITH_SOURCES[locale]}</p>
          </div>
        </section>

        <section id={SECTION_IDS.channels} className="section-padding falak-channel-zone">
          <div className="container-shell">
            <h2 className="section-heading text-center text-white">{isArabic ? "قنوات فلك" : "Falak Channels"}</h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-white/85">
              {isArabic
                ? "تجربة موحّدة بين الوالدين والأطفال مع تنبيهات ودعم مستمر عبر التطبيق."
                : "A unified guardian-child workflow with calm reminders, approvals, and progress in one connected app experience."}
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {CHANNEL_ITEMS.map((item) => (
                <article key={item.id} className="falak-channel-card">
                  <img src={item.image} alt={item.title} className="h-48 w-full rounded-2xl object-cover" loading="lazy" />
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.subtitle}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={SECTION_IDS.pricing} className="section-padding bg-[#f5f8ff]">
          <div id="try_for_free" className="relative -top-20" aria-hidden="true" />
          <div className="container-shell">
            <h2 className="section-heading text-center">{isArabic ? "ابدأ بالخطة المناسبة" : "Start with the plan that fits your family"}</h2>
            <div className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full bg-[#eaf2f1] p-1">
              <button
                type="button"
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${billingCycle === "monthly" ? "bg-white text-[#2B3A66] shadow-sm" : "text-[#5E6A85]"}`}
                onClick={() => setBillingCycle("monthly")}
              >
                {isArabic ? "شهري" : "Monthly"}
              </button>
              <button
                type="button"
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${billingCycle === "yearly" ? "bg-white text-[#2B3A66] shadow-sm" : "text-[#5E6A85]"}`}
                onClick={() => setBillingCycle("yearly")}
              >
                {isArabic ? "سنوي" : "Yearly"}
              </button>
              <span className="rounded-full bg-[#557BF4] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                {isArabic ? "6 أشهر مجاناً" : "6 Months Free"}
              </span>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {PRICING_PLANS[billingCycle].map((plan) => (
                <article key={plan.id} className="falak-pricing-card">
                  <img src={plan.image} alt={plan.name} className="h-40 w-full rounded-2xl object-cover" loading="lazy" />
                  <h3 className="mt-4 text-xl font-semibold text-[#23364a]">{plan.name}</h3>
                  <p className="mt-2 text-3xl font-semibold text-[#557BF4]">
                    {plan.price}
                    <span className="ml-1 text-sm text-[#71859a]">{plan.period}</span>
                  </p>
                  <button
                    type="button"
                    className="cta-primary mt-5 w-full justify-center px-4 py-3 text-sm"
                    onClick={() => onTryFree(`pricing_${plan.id}`)}
                  >
                    {isArabic ? "ابدأ الآن" : "Start now"}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding falak-trust-zone pt-8">
          <div className="container-shell">
            <h2 className="section-heading text-white">{content.safety.heading}</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {content.safety.points.map((point) => (
                <li key={point} className="falak-trust-item flex items-start gap-3 p-5 text-sm leading-7">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-white" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div id={SECTION_IDS.app} className="cta-panel relative mt-10 overflow-hidden">
              <div className="relative z-10 max-w-2xl space-y-4 text-left">
                <h2 className="text-3xl font-semibold text-[#0E2A31] md:text-4xl">{content.finalCta.heading}</h2>
                <p className="text-[15px] leading-7 text-[#24515B]">{content.finalCta.subtitle}</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={iosLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-primary px-5 py-3"
                    onClick={() => onStoreClick("ios", "final_cta")}
                  >
                    {content.finalCta.ctaPrimaryIos}
                  </a>
                  <a
                    href={androidLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-secondary bg-white px-5 py-3"
                    onClick={() => onStoreClick("android", "final_cta")}
                  >
                    {content.finalCta.ctaPrimaryAndroid}
                  </a>
                </div>
              </div>
              <img src={REPLICA_MEDIA.appPromo} alt="" className="absolute -right-4 top-1 hidden h-40 w-40 object-contain md:block" loading="lazy" />
            </div>
          </div>
        </section>

        <section id="FAQs" className="section-padding falak-faq-zone pt-6">
          <div id={SECTION_IDS.faq} className="container-shell">
            <h2 className="section-heading text-white">{content.faq.heading}</h2>
            <div className="mt-6 space-y-3">
              {content.faq.items.map((item, index) => (
                <details
                  key={item.question}
                  className="falak-faq-item group p-5"
                  onToggle={(event) => {
                    if ((event.currentTarget as HTMLDetailsElement).open) {
                      trackLandingEvent("faq_expand", {
                        locale,
                        section: "faq",
                        question_index: index + 1,
                      });
                    }
                  }}
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-white marker:content-none">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-white/88">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer
        className="border-t border-white/20 text-white"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(8, 13, 28, 0.88), rgba(8, 13, 28, 0.92)), url(${REPLICA_MEDIA.footer})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-shell flex flex-col gap-4 py-8 text-sm text-white/85 md:flex-row md:items-center md:justify-between">
          <p>
            {new Date().getFullYear()} {content.nav.logoWord}. {content.footer.rights}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/privacy" className="hover:text-white">
              {content.footer.privacy}
            </a>
            <a href="/terms" className="hover:text-white">
              {content.footer.terms}
            </a>
            <a href="mailto:support@falak.app" className="hover:text-white">
              {content.footer.contact}
            </a>
            <button
              type="button"
              className="hover:text-white"
              onClick={() => setLocale(isArabic ? "en" : "ar")}
            >
              {content.footer.language}: {isArabic ? "AR" : "EN"}
            </button>
          </div>
        </div>
      </footer>

      {showTalkModal ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#081028]/80 px-4 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="w-full max-w-lg rounded-3xl border border-white/20 bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-2xl font-semibold text-[#23364a]">{isArabic ? "تحدث مع فلك" : "Talk to Falak"}</h3>
                <p className="mt-2 text-sm leading-7 text-[#556b7a]">
                  {isArabic
                    ? "اختر أسرع طريقة للبدء: تنزيل التطبيق أو التواصل مع فريقنا."
                    : "Pick the fastest way to start: install the app now or contact our team for setup help."}
                </p>
              </div>
              <button type="button" className="rounded-full bg-[#eef4ff] px-3 py-1 text-sm font-semibold text-[#405a8e]" onClick={() => setShowTalkModal(false)}>
                {isArabic ? "إغلاق" : "Close"}
              </button>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href={iosLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary justify-center px-4 py-3 text-sm"
                onClick={() => {
                  onStoreClick("ios", "talk_modal");
                  setShowTalkModal(false);
                }}
              >
                {content.hero.ctaPrimaryIos}
              </a>
              <a
                href={androidLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary justify-center px-4 py-3 text-sm"
                onClick={() => {
                  onStoreClick("android", "talk_modal");
                  setShowTalkModal(false);
                }}
              >
                {content.hero.ctaPrimaryAndroid}
              </a>
              <a href="mailto:support@falak.app" className="rounded-2xl border border-[#dbe6f7] px-4 py-3 text-center text-sm font-semibold text-[#2e4f79] sm:col-span-2">
                {isArabic ? "راسلنا عبر البريد" : "Email support@falak.app"}
              </a>
            </div>
          </div>
        </div>
      ) : null}

      <div className="fixed inset-x-4 bottom-4 z-40 rounded-2xl border border-[var(--falak-border)] bg-white/95 p-2 shadow-[0_16px_36px_rgba(27,82,95,0.14)] backdrop-blur sm:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={iosLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary h-11 justify-center px-3 text-xs"
            onClick={() => onStoreClick("ios", "mobile_sticky")}
          >
            App Store
          </a>
          <a
            href={androidLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary h-11 justify-center px-3 text-xs"
            onClick={() => onStoreClick("android", "mobile_sticky")}
          >
            Google Play
          </a>
        </div>
      </div>
    </div>
  );
}

function FeatureIcon({ icon }: { icon: FeatureItem["icon"] }) {
  const commonClass = "h-5 w-5 text-[var(--falak-primary-strong)]";

  switch (icon) {
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={commonClass}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3V7" />
          <path d="M8 3V7" />
          <path d="M3 11H21" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={commonClass}>
          <path d="M12 3L20 7V12C20 16.2 17.4 19.8 12 21C6.6 19.8 4 16.2 4 12V7L12 3Z" />
          <path d="M9 12L11 14L15 10" />
        </svg>
      );
    case "gift":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={commonClass}>
          <rect x="3" y="9" width="18" height="12" rx="2" />
          <path d="M12 9V21" />
          <path d="M3 13H21" />
          <path d="M7.5 9C6 9 5 8 5 6.8C5 5.6 5.8 5 7 5C9 5 10.5 6.8 12 9" />
          <path d="M16.5 9C18 9 19 8 19 6.8C19 5.6 18.2 5 17 5C15 5 13.5 6.8 12 9" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={commonClass}>
          <path d="M12 3L14.2 8.2L19 10.4L14.2 12.6L12 18L9.8 12.6L5 10.4L9.8 8.2L12 3Z" />
        </svg>
      );
    case "sync":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={commonClass}>
          <path d="M21 12A9 9 0 0 0 6 5" />
          <path d="M3 8V4H7" />
          <path d="M3 12A9 9 0 0 0 18 19" />
          <path d="M21 16V20H17" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={commonClass}>
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <path d="M8 12L11 15L16 10" />
        </svg>
      );
    default:
      return null;
  }
}
