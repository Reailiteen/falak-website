import { MEDIA } from "@/lib/landing/content";

const AVATARS = [MEDIA.Human1, MEDIA.Human2, MEDIA.Human3, MEDIA.Human4];

export function ViewMorePill() {
  return (
    <div className="flex flex-col items-center gap-5 mt-10">
      {/* Desktop pill */}
      <div className="hidden md:flex items-center gap-4 bg-[#EAF2F1] rounded-full px-5 py-3">
        {/* Overlapping avatars */}
        <div className="flex -space-x-3">
          {AVATARS.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-9 h-9 rounded-full object-cover border-2 border-white"
              loading="lazy"
            />
          ))}
        </div>

        <p className="text-[14px] font-medium text-[#0F172A] whitespace-nowrap">
          200k+ users love Memorae
        </p>

        <div className="w-px h-5 bg-[#CBD5E1]" />

        <button
          type="button"
          className="flex items-center gap-1.5 text-[14px] font-semibold text-[#0F172A] hover:opacity-70 transition-opacity"
        >
          View more
          <span className="w-5 h-5 rounded-full bg-[#0F172A] text-white flex items-center justify-center text-xs leading-none">
            +
          </span>
        </button>
      </div>

      {/* Mobile pill */}
      <div className="md:hidden flex flex-col items-center gap-3">
        <div className="flex -space-x-3">
          {AVATARS.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-9 h-9 rounded-full object-cover border-2 border-white"
              loading="lazy"
            />
          ))}
        </div>
        <p className="text-[13px] text-[#6B7280]">200k+ users love Memorae</p>
        <button
          type="button"
          className="flex items-center gap-2 bg-[#EAF2F1] rounded-full px-5 py-2.5 text-[14px] font-semibold text-[#0F172A]"
        >
          View more
          <span className="w-5 h-5 rounded-full bg-[#0F172A] text-white flex items-center justify-center text-xs">
            +
          </span>
        </button>
      </div>
    </div>
  );
}
