"use client";

import { useState } from "react";
import { MEDIA, PRICING_PLANS, SUPERNOVA_FEATURES } from "@/lib/landing/content";
import { UI } from "@/lib/landing/ui-copy";
import { trackLandingEvent } from "@/lib/landing/analytics";
import type { Locale } from "@/lib/landing/types";

export function PlansSection({ locale }: { locale: Locale }) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  const isAnnual = billingCycle === "annual";

  return (
    <section id="pricing" className="section-padding bg-[#f5f8ff]">
      <div className="container-shell">
        <div className="text-center">
          <h2 className="section-heading text-[#1a1a2e]">Your chaos, your plan</h2>
          <p className="mt-2 text-lg text-[#555]">Choose how you want Memorae to help you</p>
          <p className="text-xl font-semibold text-[#333]">don&apos;t lose your head.</p>
        </div>

        <div className="mx-auto mt-4 flex justify-center">
          <img src={MEDIA.mascot} alt="" className="h-20 w-20 object-contain mascot-float" loading="lazy" />
        </div>

        <div className="mx-auto mt-6 flex w-fit items-center gap-2">
          <div className="memo-billing-toggle">
            <button
              type="button"
              className={`memo-billing-btn ${billingCycle === "monthly" ? "memo-billing-btn-active" : "memo-billing-btn-inactive"}`}
              onClick={() => setBillingCycle("monthly")}
            >
              {UI.monthly}
            </button>
            <button
              type="button"
              className={`memo-billing-btn ${billingCycle === "annual" ? "memo-billing-btn-active" : "memo-billing-btn-inactive"}`}
              onClick={() => setBillingCycle("annual")}
            >
              {UI.annual}
            </button>
          </div>
          <span className="rounded-full bg-[#FF66C4] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            {UI.fiftyOff}
          </span>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <article key={plan.id} className={`memo-pricing-card ${plan.popular ? "memo-pricing-popular" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#557bf4] px-4 py-1 text-xs font-bold text-white">
                  {UI.mostPopular}
                </div>
              )}
              <img src={plan.thumbnailImage} alt={plan.name} className="h-40 w-full rounded-2xl object-cover" loading="lazy" />
              <img src={plan.mascotImage} alt="" className="mx-auto -mt-8 h-16 w-16 object-contain" loading="lazy" />

              {isAnnual && (
                <div className="mx-auto mt-2 w-fit rounded-full bg-[#557bf4]/10 px-3 py-0.5 text-[10px] font-bold text-[#557bf4]">
                  {UI.sixMonthsFree}
                </div>
              )}

              <h3 className="mt-3 text-center text-xl font-bold text-[#23364a]">{plan.name}</h3>
              <p className="text-center text-xs font-semibold tracking-widest text-[#888]">{plan.tier}</p>

              <p className="mt-3 text-center text-4xl font-bold text-[#557bf4]">
                {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                <span className="ml-1 text-sm font-normal text-[#999]">/mo</span>
              </p>
              {isAnnual && (
                <p className="text-center text-xs text-[#888]">
                  {plan.annualPrice === "$3" ? "$36" : plan.annualPrice === "$6" ? "$72" : "$216"}/year
                </p>
              )}

              <ul className="mt-4 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#444]">
                    <span className="mt-0.5 text-[#557bf4]">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="cta-primary mt-5 w-full justify-center px-4 py-3 text-sm"
                onClick={() => trackLandingEvent("cta_primary_click", { locale, section: `pricing_${plan.id}` })}
              >
                {UI.tryFree} &rarr;
              </button>

              {plan.id === "supernova" && (
                <div className="mt-3 flex items-center justify-center gap-2">
                  <img src={MEDIA.videoThumb} alt="" className="h-8 w-8 rounded object-cover" loading="lazy" />
                  <span className="text-xs font-semibold text-[#557bf4]">{UI.videoDemo}</span>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="memo-guarantee mx-auto mt-10 flex max-w-2xl items-center gap-4">
          <img src={MEDIA.guaranteeIcon} alt="" className="h-12 w-12 object-contain" loading="lazy" />
          <div>
            <h4 className="text-base font-bold text-[#23364a]">{UI.guarantee}</h4>
            <p className="mt-1 text-sm text-[#666]">{UI.guaranteeDesc}</p>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-center text-xl font-bold text-[#23364a]">{UI.supernovaHeading}</h3>
          <div className="mx-auto mt-6 max-w-3xl">
            <img src={MEDIA.supernovaRow} alt="" className="mb-6 w-full rounded-2xl object-cover" loading="lazy" />
            <div className="grid gap-4 sm:grid-cols-2">
              {SUPERNOVA_FEATURES.map((f) => (
                <div key={f.title} className="flex items-start gap-3 rounded-xl border border-[#e8edf6] bg-white p-4">
                  <img src={f.icon} alt="" className="h-6 w-6 object-contain" loading="lazy" />
                  <div>
                    <p className="text-sm font-semibold text-[#333]">{f.title}</p>
                    <p className="text-xs text-[#777]">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
