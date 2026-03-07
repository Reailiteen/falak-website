"use client";

import { MEDIA, STORE_LINKS, FOOTER } from "@/lib/landing/content";
import { UI, SOCIAL_ICONS } from "@/lib/landing/ui-copy";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function FooterSection() {
  return (
    <>
      {/* Final CTA */}
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

      {/* Footer */}
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
            <img src={MEDIA.logoHome} alt="Memorae" className="h-8 object-contain" loading="lazy" />

            <p className="text-lg font-semibold text-white/90">{FOOTER.tagline}</p>
            <p className="text-sm text-white/60">{FOOTER.subtitle}</p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
              {FOOTER.links.map((link) => (
                <a key={link.label} href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {Object.entries(SOCIAL_ICONS).map(([name, svg]) => (
                <a
                  key={name}
                  href="#"
                  className="transition-colors text-white/60 hover:text-white"
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
    </>
  );
}
