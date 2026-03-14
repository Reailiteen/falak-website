"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const lineClass = "leading-tight text-[#333333] w-full flex justify-center text-[22px] md:text-[34px]";

export function SolutionSection() {
  const t = useTranslations("solution");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [blurAmt, setBlurAmt] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      const vh = window.innerHeight;
      if (top > vh || top < vh * 0.75) {
        setBlurAmt(top > vh ? 1 : 0);
        return;
      }
      setBlurAmt((top - vh * 0.75) / (vh * 0.25));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      <div className="relative flex flex-col items-center gap-1 px-6 py-40 md:py-52 max-w-[450px] md:max-w-[1080px] mx-auto min-h-[40vh] md:min-h-[70vh] bg-white text-center">

        <div className={lineClass}>
          <div className="text-center w-full">
            <span className="bg-gradient-to-r from-[#557BF4] to-[#FF66C4] bg-clip-text text-transparent font-bold">Falak</span>{" "}
            <img src="/falak-mascot-no-bg.png" alt="falak mascot" className="inline-block -mt-1 align-middle w-auto h-[45px] md:h-[70px] object-contain" /> {t("line1")}
          </div>
        </div>

        <div className={lineClass}>
          <div className="text-center w-full">
            {t("line2")}{" "}
            <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f3af.png" alt="intention" className="inline-block -mt-1 align-middle w-[30px] h-[30px] md:w-[50px] md:h-[50px]" />
          </div>
        </div>

        <div className={lineClass}>
          <div className="text-center w-full">
            {t("line3")}
          </div>
        </div>

        <div className={lineClass}>
          <div className="flex items-center justify-center gap-2 md:gap-3">
            <span>{t("channelsIntro")}</span>
            <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f331.png" alt="habits" className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex-shrink-0" />
            <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f3c6.png" alt="milestones" className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex-shrink-0" />
            <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f49b.png" alt="values" className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex-shrink-0" />
            <img src="/falak-mascot.png" alt="Falak" className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-xl object-cover flex-shrink-0" />
          </div>
        </div>

      </div>

      {/* Scroll-triggered blur — fades in as section enters from bottom */}
      {blurAmt > 0 && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backdropFilter: `blur(${blurAmt * 16}px)`,
            WebkitBackdropFilter: `blur(${blurAmt * 16}px)`,
            background: `rgba(245, 245, 245, ${blurAmt * 0.45})`,
            WebkitMaskImage: "linear-gradient(to top, white 35%, transparent 80%)",
            maskImage: "linear-gradient(to top, white 35%, transparent 80%)",
          }}
        />
      )}
    </div>
  );
}
