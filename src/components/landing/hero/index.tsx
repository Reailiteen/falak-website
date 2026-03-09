"use client";

import { useTranslations } from "next-intl";
import { MEDIA } from "@/lib/landing/content";
import { AppReview } from "./app-review";
import { HeroCTAs } from "./hero-ctas";
import { AppPromoCard } from "./app-promo-card";
import { HeroVideo } from "./hero-video";

export function HeroSection() {
  const t = useTranslations("hero");
  return (
    <section className="memo-hero-bg relative overflow-hidden">
      <div
        className="w-full max-w-[1600px] mx-auto relative h-full md:min-h-screen flex flex-col"
        style={{ zIndex: 1 }}
      >
        {/* Nav spacer */}
        <div className="mb-20 md:mb-0">
          <div aria-hidden="true" style={{ height: "82px" }} />
        </div>

        {/* 6-new floating chip */}
        <div className="hidden md:flex flex-col absolute start-16 bottom-20 lg:start-[90%] md:top-[20%] px-4">
          <img
            alt="whatsapp"
            src={MEDIA.sixNew}
            width={100}
            height={100}
            loading="lazy"
          />
        </div>

        {/* Main content */}
        <div className="flex pt-10 md:pt-10 flex-col justify-center items-center text-center px-4 md:px-0">

          {/* Heading group: review + orbs + H1 */}
          <div className="flex flex-col items-center mb-4 md:mt-0">
            <AppReview />

            {/* Ring orb */}
            <div className="absolute -start-5 mt-[22%] md:mt-[10%] -translate-y-1/2 z-10">
              <img
                alt="logo"
                src={MEDIA.ring}
                className="h-14 w-14 md:h-20 md:w-20"
                width={100}
                height={100}
                loading="lazy"
              />
            </div>

            {/* Bubble orb */}
            <div className="hidden md:block absolute -end-6 mt-[22%] -translate-y-1/2 z-10">
              <img
                alt="logo"
                src={MEDIA.bubble}
                className="h-14 w-14"
                width={100}
                height={100}
                loading="lazy"
              />
            </div>

            {/* H1 — mobile */}
            <h1 className="mt-2 md:hidden z-30 text-center pt-4 md:pt-8 text-[48px] md:text-[3.5rem] lg:text-[6rem] leading-[99%] lg:leading-[6rem] md:leading-[4.5rem] text-white relative">
              {t("titleLine1")}<br />{t("titleLine2")}<br />{t("titleLine3")}
            </h1>

            {/* H1 — desktop */}
            <h1 className="hidden md:block z-30 text-center pt-4 md:pt-8 text-[47px] md:text-[3.5rem] lg:text-[6rem] lg:leading-[6rem] leading-[4rem] md:leading-[4.5rem] text-white relative">
              {t("titleLine1")}<br />{t("titleLine2")}<br />{t("titleLine3")}
            </h1>
          </div>

          {/* Background orb */}
          <div className="-mt-[95%] -ms-[75%] md:me-0 md:start-[20%] md:-mt-[40%] absolute md:-rotate-12 md:rotate-12 md:w-40 md:h-40 inline-flex items-center justify-center">
            <img
              alt="logo"
              src={MEDIA.orb}
              className="h-20 w-20 md:h-40 md:w-40"
              width={100}
              height={100}
              loading="lazy"
            />
          </div>

          {/* CTAs */}
          <HeroCTAs />

          {/* App promo card — desktop */}
          <AppPromoCard variant="desktop" />

          {/* App promo card — mobile */}
          <div className="flex md:hidden w-full h-full items-center justify-center gap-4 mt-6">
            <div className="flex mt-8">
              <a
                href="https://wa.me/390697636235?text=Hi%20Memorae%2C%20I%E2%80%99d%20love%20to%20get%20to%20know%20you%20better.%20I%20want%20to%20understand%20how%20you%20work%2C%20what%20I%20can%20do%20with%20you%2C%20and%20how%20to%20start%20using%20you."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="cursor-pointer inline-block"
              ></a>
            </div>
            <AppPromoCard variant="mobile" />
          </div>

          {/* Video */}
          <HeroVideo />

        </div>
      </div>

      {/* Bottom blend */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
