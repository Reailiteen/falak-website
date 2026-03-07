"use client";

import { useState } from "react";
import type { Locale } from "@/lib/landing/types";
import { PricingHero } from "./pricing-hero";
import { BillingToggle } from "./billing-toggle";
import { PricingCards } from "./pricing-cards";
import { GuaranteeBanner } from "./guarantee-banner";
import { FeaturesGrid } from "./features-grid";

export function PricingSection({ locale }: { locale: Locale }) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  const [activeCardId, setActiveCardId] = useState("bigbang");
  const isAnnual = billingCycle === "annual";

  return (
    <div className="animate-up">
      <PricingHero />

      <div id="pricing-section">
        <div
          id="pricing"
          className="relative w-full bg-[#14171C] pb-16 rounded-b-4xl flex flex-col justify-center overflow-hidden"
        >
          <div className="pricing-gradient-bg" />
          <div className="hero-shadow-overlay" />

          {/* Section-level background glows — desktop only, crossfade on active card change */}
          <div
            className="hidden lg:block absolute inset-0 pointer-events-none transition-opacity duration-700 z-0"
            style={{
              background: "radial-gradient(ellipse 60% 120% at 18% 50%, rgba(85, 123, 244, 0.25) 0%, transparent 80%)",
              opacity: activeCardId === "origin" ? 1 : 0,
            }}
          />
          <div
            className="hidden lg:block absolute inset-0 pointer-events-none transition-opacity duration-700 z-0"
            style={{
              background: "radial-gradient(ellipse 65% 120% at 50% 50%, rgba(140, 80, 230, 0.20) 0%, transparent 80%)",
              opacity: activeCardId === "supernova" ? 1 : 0,
            }}
          />
          <div
            className="hidden lg:block absolute inset-0 pointer-events-none transition-opacity duration-700 z-0"
            style={{
              background: "radial-gradient(ellipse 60% 120% at 82% 50%, rgba(250, 177, 21, 0.20) 0%, transparent 80%)",
              opacity: activeCardId === "bigbang" ? 1 : 0,
            }}
          />

          <BillingToggle billingCycle={billingCycle} onChange={setBillingCycle} />

          <PricingCards
            isAnnual={isAnnual}
            locale={locale}
            activeCardId={activeCardId}
            onCardHover={setActiveCardId}
          />

          <div
            id="feature-section"
            className="relative mt-8 px-4 lg:px-0 max-w-4xl lg:max-w-none mx-auto text-center lg:w-full"
          >
            <GuaranteeBanner activePlanId={activeCardId} />
            <FeaturesGrid activePlanId={activeCardId} />
          </div>
        </div>
      </div>
    </div>
  );
}
