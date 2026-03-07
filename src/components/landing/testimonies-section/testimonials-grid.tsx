import { TESTIMONIALS } from "@/lib/landing/content";
import { TestimonialCard } from "./testimonial-card";

export function TestimonialsGrid() {
  return (
    <>
      {/* Desktop: 3-col grid, middle column offset */}
      <div className="hidden lg:block relative">
        <div className="grid grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className={i % 3 === 1 ? "lg:mt-10" : ""}>
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>

        {/* Bottom fade overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{
            background: "linear-gradient(rgba(255,255,255,0) 0%, rgb(255,255,255) 100%)",
          }}
        />
      </div>

      {/* Mobile: 1-col, first 3 only */}
      <div className="lg:hidden relative">
        <div className="grid grid-cols-1 gap-5">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

        {/* Bottom fade overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(rgba(255,255,255,0) 0%, rgb(255,255,255) 100%)",
          }}
        />
      </div>
    </>
  );
}
