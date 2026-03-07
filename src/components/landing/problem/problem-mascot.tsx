import { MEDIA } from "@/lib/landing/content";

export function ProblemMascot() {
  return (
    <>
      {/* Mobile — mirrored */}
      <div
        className="absolute md:hidden bottom-20 -left-10 w-32 h-32 md:w-[428px] md:h-[428px] z-10"
        style={{ transform: "perspective(1000px) rotateY(180deg)" }}
      >
        <img alt="mascot" src={MEDIA.mascot} width={428} height={428} className="w-full h-full object-contain" loading="lazy" />
      </div>

      {/* Desktop */}
      <div className="absolute hidden md:block bottom-20 md:-right-[10%] 2xl:right-0 w-32 h-32 md:w-[428px] md:h-[428px] z-10 md:z-0">
        <img alt="mascot" src={MEDIA.mascot} width={428} height={428} className="w-full h-full object-contain" loading="lazy" />
      </div>
    </>
  );
}
