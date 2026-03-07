import { TESTIMONIALS } from "@/lib/landing/content";
import { TestimonialCard } from "./testimonial-card";

interface TestimonialsGridProps {
  expanded: boolean;
}

export function TestimonialsGrid({ expanded }: TestimonialsGridProps) {
  const visibleDesktop = expanded ? TESTIMONIALS : TESTIMONIALS.slice(0, 9);
  const visibleMobile = expanded ? TESTIMONIALS : TESTIMONIALS.slice(0, 3);

  return (
    <>
      {/* Desktop: 3-col grid, middle column offset */}
      <div className="hidden lg:block relative">
        <div className="grid grid-cols-3 gap-6 mb-8">
          {visibleDesktop.map((t, i) => (
            <div key={t.name} className={i % 3 === 1 ? "lg:mt-10" : ""}>
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>

        {/* Bottom fade overlay — hidden when expanded */}
        {!expanded && (
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: "50%",
              background: "linear-gradient(rgba(255,255,255,0) 0%, rgb(255,255,255) 100%)",
              zIndex: 10,
            }}
          />
        )}
      </div>

      {/* Mobile: show 3 or all */}
      <div className="lg:hidden relative">
        <div className="grid grid-cols-1 gap-4 mb-8">
          {visibleMobile.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

        {/* Bottom fade overlay — tablet range only, hidden when expanded */}
        {!expanded && (
          <div
            className="hidden md:block absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: "50%",
              background: "linear-gradient(rgba(255,255,255,0) 0%, rgb(255,255,255) 100%)",
              zIndex: 10,
            }}
          />
        )}
      </div>
    </>
  );
}
