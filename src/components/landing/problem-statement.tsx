import { MEDIA, MESSAGE_LINES, MEMORY_SYSTEM } from "@/lib/landing/content";

export function ProblemStatement() {
  return (
    <>
      {/* Message lines */}
      <section className="relative bg-white px-4">
        <div className="mx-auto flex min-h-[40vh] max-w-[500px] flex-col items-center justify-center gap-4 px-2 py-28 text-center md:min-h-[70vh] md:max-w-[1080px] md:py-52">
          {MESSAGE_LINES.map((line) => (
            <p key={line} className="memo-message-line">{line}</p>
          ))}
        </div>
        <img src={MEDIA.note1} alt="" className="pointer-events-none absolute left-[5%] top-[20%] h-14 w-12 -rotate-12 object-contain md:h-20 md:w-16" loading="lazy" />
        <img src={MEDIA.note2} alt="" className="pointer-events-none absolute right-[10%] top-[15%] h-14 w-12 rotate-6 object-contain md:h-20 md:w-16" loading="lazy" />
        <img src={MEDIA.note3} alt="" className="pointer-events-none absolute right-[25%] bottom-[15%] h-12 w-10 rotate-12 object-contain md:h-16 md:w-14" loading="lazy" />
      </section>

      {/* Memory system */}
      <section className="relative overflow-hidden bg-white px-4 pb-10 md:pb-20 md:py-40">
        <div className="container-shell relative">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold leading-tight text-[#333] md:text-4xl lg:text-5xl">
              {MEMORY_SYSTEM.heading}
            </h2>
            <p className="mt-6 text-lg text-[#555]">{MEMORY_SYSTEM.line1}</p>
            <p className="mt-2 text-lg text-[#555]">{MEMORY_SYSTEM.line2}</p>

            <div className="mt-8 flex items-center gap-4">
              {[
                { icon: MEDIA.groupIcon, label: "WhatsApp" },
                { icon: MEDIA.image318, label: "Telegram" },
                { icon: MEDIA.image10, label: "Email" },
                { icon: MEDIA.appStoreIcon, label: "Memorae App" },
              ].map((ch) => (
                <div key={ch.label} className="flex flex-col items-center gap-1">
                  <img src={ch.icon} alt={ch.label} className="h-10 w-10 object-contain" loading="lazy" />
                  <span className="text-xs text-[#777]">{ch.label}</span>
                </div>
              ))}
            </div>
          </div>

          <img
            src={MEDIA.mascot}
            alt="Memorae mascot"
            className="pointer-events-none absolute -bottom-16 -right-[5%] hidden h-[420px] w-[420px] object-contain md:block 2xl:right-0"
            loading="lazy"
          />

          <div className="pointer-events-none absolute -right-[15%] top-[10%] hidden opacity-30 lg:block">
            <img src={MEDIA.brainImage} alt="" className="h-40 w-40 object-contain" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
