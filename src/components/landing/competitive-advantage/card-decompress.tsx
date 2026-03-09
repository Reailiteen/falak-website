"use client";

import { useTranslations } from "next-intl";
import { MEDIA } from "@/lib/landing/content";
import { NotificationStrip } from "./notification-strip";

export function CardDecompress({ mobile }: { mobile?: boolean }) {
  const t = useTranslations("chaos");
  const bgStyle: React.CSSProperties = {
    position: "absolute",
    height: "100%",
    width: "100%",
    inset: "0px",
    objectFit: "cover",
  };

  if (mobile) {
    return (
      <div className="bg-[#3B82F6] rounded-4xl relative overflow-hidden">
        <img alt="background" loading="lazy" className="absolute inset-0 object-cover z-0" src={MEDIA.forget2} style={bgStyle} />
        <div className="relative z-10">
          <NotificationStrip compact />
          <h2 className="text-[36px] leading-tight text-white mb-4 px-6 pt-3">
            {t("card1")}
          </h2>
          <div className="space-y-3 text-lg text-white px-6 mb-6">
            <p>Chaos isn't solved with more tools. It's removed by taking away friction.</p>
            <p>Memorae converts messages into tasks, emails into plans, ideas into action. Without you having to think twice.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#3B82F6] rounded-3xl relative overflow-hidden mx-4">
      <img alt="background" loading="lazy" className="absolute inset-0 object-cover z-0" src={MEDIA.forget2} style={bgStyle} />
      <div className="relative z-10">
        <NotificationStrip />
        <div className="p-8 pt-0">
          <h2 className="text-[40px] leading-tight text-white mb-6 pt-10">
            {t("card1")}
          </h2>
          <div className="space-y-4 text-white">
            <p>Chaos isn't solved with more tools. It's removed by taking away friction.</p>
            <p>Memorae converts messages into tasks, emails into plans, ideas into action. Without you having to think twice.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
