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

          <BillingToggle billingCycle={billingCycle} onChange={setBillingCycle} />

          <div className="relative z-10">
            <PricingCards isAnnual={isAnnual} locale={locale} />
          </div>

          <div
            id="feature-section"
            className="relative z-30 mt-8 px-4 lg:px-0 max-w-4xl lg:max-w-none mx-auto text-center lg:w-full lg:bg-transparent"
          >
            <GuaranteeBanner />
            <FeaturesGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
