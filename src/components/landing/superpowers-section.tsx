import { SUPERPOWERS } from "@/lib/landing/content";
import { UI } from "@/lib/landing/ui-copy";

export function SuperpowersSection() {
  return (
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
  );
}
