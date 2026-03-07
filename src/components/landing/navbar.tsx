"use client";

import { useEffect, useState } from "react";
import { MEDIA, SUPERPOWERS } from "@/lib/landing/content";
import { NAV, UI } from "@/lib/landing/ui-copy";

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

export function Navbar({ visible = true }: NavbarProps) {
  const [activeMenu, setActiveMenu] = useState<NavMenu>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleNav = (id: string) => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    scrollToId(id);
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
              className="relative mx-auto mt-5 max-w-fit rounded-full border px-3 py-4 backdrop-blur-xl transition-all duration-300"
              style={{
                background: "rgba(255, 255, 255, 0.12)",
                borderColor: "rgba(255, 255, 255, 0.2)",
                boxShadow: "rgba(15, 23, 42, 0.12) 0px 18px 40px",
              }}
            >
              <div className="flex items-center justify-between">
                {/* Logo */}
                <a href="#top" className="ml-4 mr-10 flex-shrink-0 text-white text-2xl font-bold">
                  <img src={MEDIA.logoHome} alt="Memorae" className="h-10 w-36 cursor-pointer object-contain" />
                </a>

                {/* Nav links */}
                <nav className="flex items-center space-x-8 text-sm font-medium text-white">
                  {/* Superpowers */}
                  <div className="relative z-[110] flex items-center space-x-1">
                    <button
                      type="button"
                      className="cursor-pointer border-none bg-transparent p-0 text-white transition-all duration-200 hover:scale-105 hover:text-blue-200 hover:underline"
                      onMouseEnter={() => setActiveMenu("superpowers")}
                    >
                      Superpowers
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
                      Channels
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
                    Support
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer text-white transition-all duration-200 hover:scale-105 hover:text-blue-200 hover:underline"
                    onClick={() => handleNav("pricing")}
                  >
                    Pricing
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer text-white transition-all duration-200 hover:scale-105 hover:text-blue-200 hover:underline"
                  >
                    Log in
                  </button>

                  {/* CTA button */}
                  <button
                    type="button"
                    className="group relative inline-flex cursor-pointer items-center overflow-hidden rounded-full bg-gradient-to-r from-[#557BF4] to-[#FF66C4] px-6 py-3 text-white transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(85,123,244,0.3)]"
                    onClick={() => handleNav("pricing")}
                  >
                    <span className="absolute inset-0 scale-105 bg-[radial-gradient(circle,rgba(255,255,255,0.25),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative z-10 font-medium">Try for Free</span>
                  </button>
                </nav>
              </div>

              {/* Mega menus — absolute below the pill */}
              {activeMenu && (
                <div
                  className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2"
                  onMouseEnter={() => setActiveMenu(activeMenu)}
                >
                  <div className="falak-mega-menu w-[720px]">
                    {activeMenu === "superpowers" ? (
                      <>
                        <div className="mb-4 flex items-center justify-between">
                          <h3 className="text-2xl font-semibold text-[#333]">Superpowers</h3>
                          <button type="button" className="text-sm font-semibold text-[#557BF4]" onClick={() => setActiveMenu(null)}>{NAV.close}</button>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          {SUPERPOWERS.slice(0, 6).map((sp) => (
                            <button key={sp.id} type="button" className="falak-mega-card cursor-pointer" onClick={() => handleNav("superpowers")}>
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
                            <button key={ch.title} type="button" className="falak-mega-card flex cursor-pointer flex-col items-center gap-2 p-4" onClick={() => handleNav("channels")}>
                              <img src={ch.icon} alt={ch.title} className="h-12 w-12 object-contain" loading="lazy" />
                              <p className="text-sm font-semibold text-[#172f39]">{ch.title}</p>
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </header>
          </div>

          {/* ── Mobile ── */}
          <div className="lg:hidden">
            <div
              className="mx-auto mt-5 flex max-w-[380px] items-center justify-between px-4"
              style={{
                height: "60px",
                borderRadius: "50px",
                background: "rgba(255, 255, 255, 0.35)",
                boxShadow: "rgba(13, 28, 67, 0.15) 0px 8px 24px",
                backdropFilter: "blur(12px)",
              }}
            >
              <img src={MEDIA.logoHome} alt="Memorae" className="h-9 w-auto cursor-pointer" />
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
          <button type="button" className="absolute right-6 top-6 text-2xl text-white" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
            &#x2715;
          </button>
          <button type="button" onClick={() => handleNav("superpowers")}>Superpowers</button>
          <button type="button" onClick={() => handleNav("channels")}>Channels</button>
          <button type="button" onClick={() => handleNav("faq")}>Support</button>
          <button type="button" onClick={() => handleNav("pricing")}>Pricing</button>
          <a href="#">Log in</a>
          <button type="button" className="cta-primary px-8 py-3 text-base" onClick={() => handleNav("pricing")}>
            {UI.tryFree}
          </button>
        </div>
      )}
    </>
  );
}
