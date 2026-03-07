import { MEDIA } from "@/lib/landing/content";

export function CardApp({ mobile }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <div className="bg-[#B6DEDE] rounded-4xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-[36px] leading-tight font-semibold text-[#121C28] mb-6">
            We're not here to create just another app
          </h2>
          <div className="leading-tight text-base text-[#121C28]">
            <p>
              The world doesn't need more disconnected tools. It needs fewer things in the head. Memorae integrates
              into the channels you already use. Centralize what matters. Reduce friction. Clear your mind.
            </p>
          </div>
        </div>
        <div className="w-full mb-14">
          <img alt="mem-bg" width="1920" height="1080" className="w-full h-auto" src={MEDIA.multiCards} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#B6DEDE] rounded-3xl overflow-hidden">
      <div className="p-8">
        <h2 className="text-[36px] leading-tight font-semibold text-gray-800 mb-6">
          We're not here to create just another app
        </h2>
        <div className="leading-normal text-base text-gray-700">
          <p>The world doesn't need more disconnected tools.</p>
          <p>It needs fewer things in the head.</p>
          <p>Memorae integrates into the channels you already use.</p>
          <p>Centralize what matters. Reduce friction. Clear your mind.</p>
        </div>
      </div>
      <div className="w-full">
        <img alt="mem-bg" width="1920" height="1080" className="w-full h-auto" src={MEDIA.multiCards} />
      </div>
    </div>
  );
}
