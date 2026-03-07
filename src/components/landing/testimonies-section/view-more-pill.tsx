import { MEDIA } from "@/lib/landing/content";

const AVATARS = [MEDIA.Human1, MEDIA.Human2, MEDIA.Human3, MEDIA.Human4];

function ToggleIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {expanded ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      )}
    </svg>
  );
}

interface ViewMorePillProps {
  expanded: boolean;
  onToggle: () => void;
}

export function ViewMorePill({ expanded, onToggle }: ViewMorePillProps) {
  const label = expanded ? "View less" : "View more";

  return (
    <>
      {/* Desktop pill */}
      <div className="relative hidden md:block max-w-[560px] mx-auto mt-8">
        <div
          className="flex items-center justify-between px-5 py-2 rounded-full"
          style={{ background: "rgb(234, 242, 241)" }}
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {AVATARS.map((src, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <img
                    alt={`User ${i + 1}`}
                    loading="lazy"
                    width="40"
                    height="40"
                    src={src}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-gray-700 font-medium text-base">200k+ users love Memorae</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-px h-6 bg-[#333333]" />
            <button
              type="button"
              onClick={onToggle}
              className="flex items-center gap-3 text-gray-700 cursor-pointer hover:text-gray-400 transition-colors"
            >
              <span className="font-medium text-base">{label}</span>
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center hover:scale-105 transition-transform">
                <ToggleIcon expanded={expanded} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile pill */}
      <div className="relative max-w-lg md:hidden mx-auto mt-8">
        <div className="flex justify-center">
          <div
            className="flex flex-col items-center px-6 py-2 rounded-3xl w-full"
            style={{ background: "rgb(234, 242, 241)" }}
          >
            <div className="flex items-center justify-center -space-x-2 py-3">
              {AVATARS.map((src, i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden">
                  <img
                    alt={`User ${i + 1}`}
                    loading="lazy"
                    width="40"
                    height="40"
                    src={src}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-[#333333] font-medium text-lg pb-4">200k+ users love Memorae</span>
            <div className="h-px w-[95%] bg-[#333333] mx-auto" />
            <div className="py-2">
              <button
                type="button"
                onClick={onToggle}
                className="flex items-center gap-3 cursor-pointer text-gray-700 hover:text-gray-900 transition-colors"
              >
                <span className="font-medium text-lg text-[#333333]">{label}</span>
                <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                  <ToggleIcon expanded={expanded} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
