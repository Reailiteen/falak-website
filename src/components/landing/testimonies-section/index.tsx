import { TestimoniesHeading } from "./testimonies-heading";
import { TestimonialsGrid } from "./testimonials-grid";
import { ViewMorePill } from "./view-more-pill";

export function TestimoniesSection() {
  return (
    <section className="w-full py-20 lg:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto md:px-20">
        <TestimoniesHeading />
        <TestimonialsGrid />
        <ViewMorePill />

        {/* Mobile CTA */}
        <div className="md:hidden mt-8 flex justify-center">
          <button
            type="button"
            className="rounded-full px-8 py-4 text-white font-semibold text-[16px]"
            style={{
              background: "linear-gradient(135deg, #557BF4 0%, #8B5CF6 100%)",
            }}
          >
            Try for free →
          </button>
        </div>
      </div>
    </section>
  );
}
