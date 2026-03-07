import { TestimoniesHeading } from "./testimonies-heading";
import { TestimonialsGrid } from "./testimonials-grid";
import { ViewMorePill } from "./view-more-pill";

export function TestimoniesSection() {
  return (
    <div className="animate-up" id="testimonies">
      <div className="w-full py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <TestimoniesHeading />
          <TestimonialsGrid />
          <ViewMorePill />

          {/* Mobile CTA */}
          <div className="mt-12 flex justify-center md:hidden">
            <button
              type="button"
              className="w-[320px] px-6 py-3 rounded-full bg-gradient-to-r from-[#557BF4] to-[#FF66C4] text-white text-2xl font-semibold flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform"
            >
              <span>Try for free</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
