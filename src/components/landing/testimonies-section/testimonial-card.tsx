import type { TestimonialItem } from "@/lib/landing/types";

const STAR_PATH =
  "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

export function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  return (
    <div
      className="flex flex-col justify-center rounded-4xl border-t border-l border-white/10 items-start p-6 gap-6 relative overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      style={{ background: "linear-gradient(135deg, rgb(250, 250, 250) 10%, rgb(255, 255, 255) 90%)" }}
    >
      {/* Decorative blur element */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10px",
          left: "-10px",
          width: "180px",
          height: "180px",
          background:
            "linear-gradient(45deg, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 40%, transparent 60%)",
          borderRadius: "24px",
          filter: "blur(5px)",
        }}
      />

      {/* Stars + Avatar */}
      <div className="flex justify-between items-center w-full relative z-10 gap-2">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className="w-8 h-8 text-[#E19A00]" fill="currentColor" viewBox="0 0 20 20">
              <path d={STAR_PATH} />
            </svg>
          ))}
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <img
            alt={testimonial.name}
            loading="lazy"
            width="40"
            height="40"
            src={testimonial.photo}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-[#121C28] relative z-10">{testimonial.title}</h3>

      {/* Quote */}
      <p className="text-[#333333] leading-relaxed relative z-10">{testimonial.quote}</p>

      {/* Author */}
      <div className="flex items-center justify-between w-full relative z-10">
        <div className="flex gap-1">
          <p className="font-normal text-sm text-[#333333]">{testimonial.name} -</p>
          <p className="text-sm text-[#333333]">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
