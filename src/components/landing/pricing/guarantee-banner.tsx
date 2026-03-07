import { MEDIA } from "@/lib/landing/content";

export function GuaranteeBanner() {
  return (
    <div className="lg:max-w-[850px] lg:mx-auto lg:px-4">
      <div className="text-sm text-[#23CF67] bg-[#23CF67]/15 border border-emerald-400/30 rounded-xl px-4 py-3 text-left flex gap-3 items-center">
        <div className="w-8 h-8 lg:w-5 lg:h-5 flex items-center justify-center flex-shrink-0">
          <img
            alt="Guarantee"
            loading="lazy"
            className="w-full h-full lg:w-10 lg:h-10 object-contain"
            src={MEDIA.guaranteeIcon}
          />
        </div>
        <div className="flex-1">
          <span className="font-semibold">14-day money-back guarantee.</span>{" "}
          <span>
            Try it for free. Then you have a full 14 days to request a complete refund. No questions, no forms, just
            your money back.
          </span>
        </div>
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-white">
        Everything you can unlock with the{" "}
        <span className="bg-gradient-to-r bg-clip-text text-transparent from-[#FAB115] to-white">Big Bang</span>
      </h3>
    </div>
  );
}
