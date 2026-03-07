import { MEDIA } from "@/lib/landing/content";

export function CardOs({ mobile }: { mobile?: boolean }) {
  const bgStyle: React.CSSProperties = {
    position: "absolute",
    height: "100%",
    width: "100%",
    inset: "0px",
    objectFit: "cover",
  };

  if (mobile) {
    return (
      <div className="bg-[#1E293B] min-h-[580px] max-h-[590px] p-6 relative overflow-hidden">
        <img alt="background" loading="lazy" className="absolute inset-0 object-cover z-0" src={MEDIA.forget4Mob} style={bgStyle} />
        <div className="relative z-10 mt-2 max-w-2xl">
          <h2 className="text-[32px] leading-tight font-semibold text-white mb-3">
            What we are creating doesn't exist
          </h2>
          <div className="space-y-4 text-white text-base leading-tight">
            <p>We don't add functions. We're building a mental operating system.</p>
            <p>A new category, a new habit, a new way of living. With a clear head. And life under control.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[498px] max-h-[500px] rounded-3xl p-8 relative overflow-hidden">
      <img alt="background" loading="lazy" className="absolute inset-0 object-cover z-0" src={MEDIA.forget4} style={bgStyle} />
      <div className="relative z-10 mt-[10%] max-w-2xl">
        <h2 className="text-[40px] font-semibold text-white mb-6">What we are creating doesn't exist</h2>
        <div className="space-y-4 text-white text-2xl">
          <p>We don't add functions. We're building a mental operating system.</p>
          <p>A new category, a new habit, a new way of living. With a clear head. And life under control.</p>
        </div>
      </div>
    </div>
  );
}
