"use client";

import { useTranslations } from "next-intl";

export function CardEnemy({ mobile }: { mobile?: boolean }) {
  const t = useTranslations("chaos");
  if (mobile) {
    return (
      <div className="bg-[#EAF2F1] rounded-4xl pt-1 px-6 pb-4">
        <div className="bg-white rounded-xl px-4 pb-2 mt-8">
          <p className="text-[20px] text-gray-800 pt-2">
            Remember to send the report to your boss today before 4:00 PM.
          </p>
          <p className="text-xs text-gray-500 text-end">17:45</p>
        </div>
        <h2 className="text-[36px] leading-tight text-[#01214F] mb-6 pt-5">{t("card2")}</h2>
        <div className="space-y-3 text-gray-700 mb-2 text-[16px] leading-tight">
          <p>
            We don't compete with other apps. We compete with what escapes you. With the important things that never
            happen. With the mental load that exhausts.
          </p>
          <p>We don't sell features. We sell clarity. And clarity is power.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#EAF2F1] rounded-3xl p-8">
      <div className="bg-white rounded-xl px-4 mt-8">
        <p className="text-[20px] text-gray-800 pt-2 leading-tight">
          Remember to send the report to your boss today before 4:00 PM.
        </p>
        <p className="text-xs text-gray-500 text-end pb-1">17:45</p>
      </div>
      <h2 className="text-[40px] leading-tight text-[#01214F] mb-6 pt-10">{t("card2")}</h2>
      <div className="space-y-4 text-gray-700">
        <p>
          We don't compete with other apps. We compete with what escapes you. With the important things that never
          happen. With the mental load that exhausts.
        </p>
        <p>We don't sell features. We sell clarity. And clarity is power.</p>
      </div>
    </div>
  );
}
