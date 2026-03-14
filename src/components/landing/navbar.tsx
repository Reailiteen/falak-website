"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { MEDIA, SUPERPOWERS } from "@/lib/landing/content";

type NavMenu = "superpowers" | "channels" | null;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

type NavbarProps = {
  visible?: boolean;
  isInHero?: boolean;
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const PROMO_CARDS = [
  { image: "https://cdn.memorae.ai/l3/Frame%202147238449-3.webp", titleKey: "promoCard1" as const },
  { image: "https://cdn.memorae.ai/l3/Frame%202147238450.webp", titleKey: "promoCard2" as const },
];

export function Navbar({ visible = true }: NavbarProps) {
  const t = useTranslations("nav");
  const [activeMenu, setActiveMenu] = useState<NavMenu>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    scrollToId(id);
  };

  const scrollPanel = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Fixed hide-on-scroll wrapper */}
      <div
        className="fixed left-0 right-0 top-0 z-[101] transition-transform duration-300 ease-out"
        style={{ transform: visible ? "translateY(0)" : "translateY(-110%)" }}
      >
        <div className="mx-auto max-w-[1600px] px-4 md:px-6">

          {/* ── Desktop ── */}
          <div className="hidden lg:block" onMouseLeave={() => setActiveMenu(null)}>
            <header
              className="relative mx-auto mt-5 max-w-fit rounded-full border px-3 py-1 overflow-hidden backdrop-blur-xl transition-all duration-300"
              style={{
                background: scrolled ? "rgba(25, 30, 48, 0.82)" : "rgba(255, 255, 255, 0.12)",
                borderColor: scrolled ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 0.2)",
                boxShadow: scrolled ? "rgba(15, 23, 42, 0.30) 0px 18px 40px" : "rgba(15, 23, 42, 0.12) 0px 18px 40px",
                transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div className="flex items-center justify-between">
                {/* Logo */}
                <a href="#top" className="ms-4 me-10 flex-shrink-0 text-white text-2xl">
                  <img src={MEDIA.logoHome} alt="Memorae" className="h-[4rem] w-[8rem] cursor-pointer object-contain" />
                </a>

                {/* Nav links */}
                <nav className="flex items-center space-x-8 text-sm text-white">
                  {/* Superpowers */}
                  <div className="relative z-[110] flex items-center space-x-1">
                    <button
                      type="button"
                      className="cursor-pointer border-none bg-transparent p-0 text-white transition-all duration-200 hover:scale-105 hover:text-blue-200 hover:underline"
                      onMouseEnter={() => setActiveMenu("superpowers")}
                    >
                      {t("superpowers")}
                    </button>
                    <button
                      type="button"
                      aria-label="Toggle superpower menu"
                      className="flex cursor-pointer items-center text-white transition-all duration-200 hover:text-blue-200"
                      onMouseEnter={() => setActiveMenu("superpowers")}
                    >
                      <ChevronIcon open={activeMenu === "superpowers"} />
                    </button>
                  </div>

                  {/* Channels */}
                  <div className="relative z-[110] flex items-center space-x-1">
                    <button
                      type="button"
                      className="cursor-pointer border-none bg-transparent p-0 text-white transition-all duration-200 hover:scale-105 hover:text-blue-200 hover:underline"
                      onMouseEnter={() => setActiveMenu("channels")}
                    >
                      {t("channels")}
                    </button>
                    <button
                      type="button"
                      aria-label="Toggle channels menu"
                      className="flex cursor-pointer items-center text-white transition-all duration-200 hover:text-blue-200"
                      onMouseEnter={() => setActiveMenu("channels")}
                    >
                      <ChevronIcon open={activeMenu === "channels"} />
                    </button>
                  </div>

                  <button
                    type="button"
                    className="cursor-pointer text-white transition-all duration-200 hover:scale-105 hover:text-blue-200 hover:underline"
                    onClick={() => handleNav("faq")}
                  >
                    {t("support")}
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer text-white transition-all duration-200 hover:scale-105 hover:text-blue-200 hover:underline"
                    onClick={() => handleNav("pricing")}
                  >
                    {t("pricing")}
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer text-white transition-all duration-200 hover:scale-105 hover:text-blue-200 hover:underline"
                  >
                    {t("logIn")}
                  </button>

                  {/* CTA button */}
                  <button
                    type="button"
                    className="group relative inline-flex cursor-pointer items-center overflow-hidden rounded-full bg-gradient-to-r from-[#557BF4] to-[#FF66C4] px-6 py-3 text-white transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(85,123,244,0.3)]"
                    onClick={() => handleNav("pricing")}
                  >
                    <span className="absolute inset-0 scale-105 bg-[radial-gradient(circle,rgba(255,255,255,0.25),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative z-10">{t("ctaTryFree")}</span>
                  </button>
                </nav>
              </div>

              {/* Mega menus — absolute below the pill */}
              {activeMenu && (
                <div
                  className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2"
                  onMouseEnter={() => setActiveMenu(activeMenu)}
                >
                  {activeMenu === "superpowers" ? (
                    /* ── Superpowers mega menu ── */
                    <div
                      style={{
                        width: "1227px",
                        minHeight: "370px",
                        background: "#ffffff",
                        borderRadius: "32px",
                        border: "1px solid rgba(255,255,255,0.2)",
                        boxShadow: "0 22px 46px rgba(12,22,44,0.22)",
                        padding: "32px",
                        display: "flex",
                        gap: "16px",
                      }}
                    >
                      {/* Left: 2 tall promo cards */}
                      <div style={{ display: "flex", gap: "16px", flexShrink: 0 }}>
                        {PROMO_CARDS.map((card) => (
                          <button
                            key={card.titleKey}
                            type="button"
                            className="cursor-pointer"
                            onClick={() => handleNav("superpowers")}
                            style={{
                              width: "236px",
                              height: "320px",
                              borderRadius: "20px",
                              overflow: "hidden",
                              position: "relative",
                              backgroundImage: `url(${card.image})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              border: "none",
                              padding: 0,
                              flexShrink: 0,
                            }}
                          >
                            {/* Badge + title at top */}
                            <div
                              style={{
                                position: "absolute",
                                top: "16px",
                                left: "16px",
                                right: "16px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                                alignItems: "flex-start",
                              }}
                            >
                              <span
                                style={{
                                  background: "#557BF4",
                                  color: "white",
                                  fontSize: "10px",
                                  fontWeight: 700,
                                  letterSpacing: "0.08em",
                                  padding: "3px 10px",
                                  borderRadius: "20px",
                                  textTransform: "uppercase",
                                }}
                              >
                                {t("newSuperpower")}
                              </span>
                              <p
                                style={{
                                  color: "white",
                                  fontSize: "16px",
                                  fontWeight: 400,
                                  lineHeight: 1.3,
                                  textAlign: "left",
                                  margin: 0,
                                }}
                              >
                                {t(card.titleKey)}
                              </p>
                            </div>

                            {/* Discover now button at bottom */}
                            <div
                              style={{
                                position: "absolute",
                                bottom: "16px",
                                left: "16px",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  background: "linear-gradient(90deg, #557BF4 0%, #FF66C4 100%)",
                                  color: "white",
                                  fontSize: "13px",
                                  fontWeight: 600,
                                  padding: "8px 18px",
                                  borderRadius: "20px",
                                }}
                              >
                                {t("discoverNow")}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Right: scrollable superpowers panel */}
                      <div
                        style={{
                          flex: 1,
                          background: "#EAF2F1",
                          borderRadius: "16px",
                          padding: "20px",
                          display: "flex",
                          flexDirection: "column",
                          minWidth: 0,
                        }}
                      >
                        {/* Panel header */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "16px",
                            flexShrink: 0,
                          }}
                        >
                          <h3 style={{ fontSize: "20px", fontWeight: 400, color: "#172f39", margin: 0 }}>
                            {t("superpowers")}
                          </h3>
                          <div style={{ display: "flex", gap: "8px" }}>
                            <button
                              type="button"
                              onClick={() => scrollPanel("left")}
                              className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow transition hover:shadow-md"
                            >
                              <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              onClick={() => scrollPanel("right")}
                              className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow transition hover:shadow-md"
                            >
                              <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        {/* Horizontally scrollable cards */}
                        <div
                          ref={scrollRef}
                          style={{
                            display: "flex",
                            gap: "12px",
                            overflowX: "auto",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                          }}
                          className="[&::-webkit-scrollbar]:hidden"
                        >
                          {SUPERPOWERS.map((sp) => (
                            <button
                              key={sp.id}
                              type="button"
                              className="group cursor-pointer border-none bg-transparent p-0 text-left"
                              onClick={() => handleNav("superpowers")}
                              style={{ flexShrink: 0 }}
                            >
                              <div
                                style={{
                                  width: "168px",
                                  height: "211px",
                                  borderRadius: "16px",
                                  overflow: "hidden",
                                  background: "#fff",
                                  border: "1px solid #e6edf8",
                                  transition: "transform 180ms ease, box-shadow 180ms ease",
                                }}
                                className="group-hover:-translate-y-1 group-hover:shadow-lg"
                              >
                                <img
                                  src={sp.image}
                                  alt={sp.title}
                                  className="h-full w-full object-cover"
                                  loading="lazy"
                                />
                              </div>
                              <p
                                style={{
                                  marginTop: "8px",
                                  fontSize: "12px",
                                  fontWeight: 400,
                                  color: "#172f39",
                                  maxWidth: "168px",
                                  lineHeight: 1.3,
                                }}
                              >
                                {sp.title}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* ── Channels mega menu ── */
                    <div
                      style={{
                        background: "#ffffff",
                        borderRadius: "32px",
                        boxShadow: "0 22px 46px rgba(12,22,44,0.22)",
                        padding: "28px",
                        width: "760px",
                      }}
                    >
                      <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#111", margin: "0 0 20px 0" }}>
                        {t("channels")}
                      </h3>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "14px" }}>
                        {[
                          { title: "WhatsApp", bg: "linear-gradient(135deg, #25D366 0%, #128C5E 100%)", icon: MEDIA.groupIcon },
                          { title: "Telegram", bg: "linear-gradient(135deg, #5BA7E0 0%, #2F80C4 100%)", icon: MEDIA.image318 },
                          { title: "Email", bg: "linear-gradient(135deg, #F5A623 0%, #E08A00 100%)", icon: MEDIA.image10 },
                          { title: "App", bg: "linear-gradient(135deg, #E91E8C 0%, #C0126E 100%)", icon: MEDIA.appStoreIcon },
                        ].map((ch) => (
                          <button
                            key={ch.title}
                            type="button"
                            onClick={() => handleNav("channels")}
                            style={{
                              background: ch.bg,
                              borderRadius: "20px",
                              height: "200px",
                              position: "relative",
                              overflow: "hidden",
                              border: "none",
                              cursor: "pointer",
                              padding: 0,
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            {/* Channel name */}
                            <span
                              style={{
                                position: "absolute",
                                top: "14px",
                                left: "14px",
                                color: "white",
                                fontWeight: 400,
                                fontSize: "15px",
                                zIndex: 2,
                              }}
                            >
                              {ch.title}
                            </span>

                            {/* Mascot */}
                            <img
                              src={MEDIA.mascot}
                              alt={ch.title}
                              style={{
                                position: "absolute",
                                bottom: "0",
                                left: "50%",
                                transform: "translateX(-50%)",
                                height: "130px",
                                width: "auto",
                                objectFit: "contain",
                              }}
                              loading="lazy"
                            />

                            {/* Plus button */}
                            <div
                              style={{
                                position: "absolute",
                                bottom: "12px",
                                right: "12px",
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                background: "rgba(255,255,255,0.9)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "20px",
                                fontWeight: 400,
                                color: "#333",
                                lineHeight: 1,
                                zIndex: 2,
                              }}
                            >
                              +
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </header>
          </div>

          {/* ── Mobile ── */}
          <div className="lg:hidden">
            <div
              className="mx-auto mt-5 flex max-w-[380px] items-center justify-between px-4"
              style={{
                height: "46px",
                borderRadius: "50px",
                background: scrolled ? "rgba(25, 30, 48, 0.85)" : "rgba(255, 255, 255, 0.35)",
                boxShadow: scrolled ? "rgba(13, 28, 67, 0.30) 0px 8px 24px" : "rgba(13, 28, 67, 0.15) 0px 8px 24px",
                backdropFilter: "blur(12px)",
                transition: "background 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <img src={MEDIA.logoHome} alt="Memorae" className="h-[3.375rem] w-auto cursor-pointer" />
              <button
                aria-label="Toggle menu"
                className="flex items-center justify-center rounded-full p-2 text-white transition hover:bg-white/20"
                onClick={() => setMobileMenuOpen(true)}
              >
                <img src={MEDIA.menuIcon} alt="menu" className="h-8 w-auto" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="memo-mobile-menu">
          <button type="button" className="absolute end-6 top-6 text-2xl text-white" onClick={() => setMobileMenuOpen(false)} aria-label={t("close")}>
            &#x2715;
          </button>
          <button type="button" onClick={() => handleNav("superpowers")}>{t("superpowers")}</button>
          <button type="button" onClick={() => handleNav("channels")}>{t("channels")}</button>
          <button type="button" onClick={() => handleNav("faq")}>{t("support")}</button>
          <button type="button" onClick={() => handleNav("pricing")}>{t("pricing")}</button>
          <a href="#">{t("logIn")}</a>
          <button type="button" className="cta-primary px-8 py-3 text-base" onClick={() => handleNav("pricing")}>
            {t("ctaTryFree")}
          </button>
        </div>
      )}
    </>
  );
}
