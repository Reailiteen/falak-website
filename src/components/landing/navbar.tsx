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

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-0.5 opacity-60">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function Navbar({ visible = true, isInHero = false }: NavbarProps) {
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

  const pillClass = isInHero ? "falak-nav-pill-hero" : "falak-nav-pill";

  return (
    <>
      <header
        className="fixed left-0 right-0 top-0 z-40 px-4 pt-2 transition-transform duration-300 ease-out md:pt-3"
        style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="mx-auto max-w-[1120px]">
          <div className={pillClass}>
            {/* Logo */}
            <a href="#top" className="flex-shrink-0">
              <img
                src={MEDIA.logoDark}
                alt="Memorae"
                className="h-7 object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = MEDIA.memoraeLogo;
                }}
              />
            </a>

            {/* Desktop nav links */}
            <nav className="hidden items-center gap-6 text-sm font-medium text-[#1a1a2e]/80 lg:flex">
              <button
                type="button"
                className="falak-nav-link flex cursor-pointer items-center gap-0.5"
                onMouseEnter={() => setActiveMenu("superpowers")}
              >
                Superpowers <Chevron />
              </button>
              <button
                type="button"
                className="falak-nav-link flex cursor-pointer items-center gap-0.5"
                onMouseEnter={() => setActiveMenu("channels")}
              >
                Channels <Chevron />
              </button>
              <button type="button" className="falak-nav-link cursor-pointer" onClick={() => handleNav("faq")}>
                Support
              </button>
              <button type="button" className="falak-nav-link cursor-pointer" onClick={() => handleNav("pricing")}>
                Pricing
              </button>
              <a href="#" className="falak-nav-link">Log in</a>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="cta-primary hidden cursor-pointer px-5 py-2.5 text-sm sm:inline-flex"
                onClick={() => handleNav("pricing")}
              >
                {NAV.ctaTryFree}
              </button>
              {/* Hamburger */}
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <img src={MEDIA.menuIcon} alt="" className="h-5 w-5" />
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
          )}
        </div>
      </header>

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
