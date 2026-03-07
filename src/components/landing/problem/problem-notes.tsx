import { MEDIA } from "@/lib/landing/content";

export function ProblemNotes() {
  return (
    <>
      {/* note1 — right side mid */}
      <div className="absolute top-[35%] right-[5%] md:right-[15%] w-12 h-14 md:w-16 md:h-20 rotate-12 z-0">
        <img alt="note" src={MEDIA.note1} width={64} height={80} className="w-full h-full object-contain" loading="lazy" />
      </div>

      {/* note2 — left/right top */}
      <div className="absolute top-[20%] left-[5%] md:left-auto md:right-[10%] w-12 h-14 md:w-16 md:h-20 -rotate-12 z-0">
        <img alt="note" src={MEDIA.note2} width={64} height={80} className="w-full h-full object-contain" loading="lazy" />
      </div>

      {/* note3 — upper-center / right mid */}
      <div className="absolute md:top-[45%] top-[2%] right-[25%] md:right-[20%] w-10 h-12 md:w-14 md:h-16 rotate-6 z-0">
        <img alt="note" src={MEDIA.note3} width={56} height={64} className="w-full h-full object-contain" loading="lazy" />
      </div>
    </>
  );
}
