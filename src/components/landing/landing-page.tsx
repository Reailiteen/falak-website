"use client";

import { useEffect, useRef, useState } from "react";
import { getLocaleDirection } from "@/i18n/config";
import { trackLandingEvent } from "@/lib/landing/analytics";
import type { Locale } from "@/lib/landing/types";

import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero";
import { ProblemStatement } from "@/components/landing/problem";
import { SolutionSection } from "@/components/landing/solution/solution-section";
import { SuperpowersSection } from "@/components/landing/superpowers";
import { FeaturesSection } from "@/components/landing/features";
import { PricingSection } from "@/components/landing/pricing";
import { CompetitiveAdvantage } from "@/components/landing/competitive-advantage";
import { TestimoniesSection } from "@/components/landing/testimonies-section";
import { FaqSection } from "@/components/landing/faq";
import { FooterSection } from "@/components/landing/footer";
import { FooterTryButton } from "@/components/landing/footer/footer-try-button";

const SCROLL_THRESHOLD = 8;

export function LandingPage({ locale }: { locale: Locale }) {
  const viewedRef = useRef(false);
  const depthRef = useRef({ half: false, nearEnd: false });
  const heroRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [navVisible, setNavVisible] = useState(true);
  const [isInHero, setIsInHero] = useState(true);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = getLocaleDirection(locale);
    if (!viewedRef.current) {
      trackLandingEvent("landing_view", { locale, section: "page" });
      viewedRef.current = true;
    }
  }, [locale]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight ?? window.innerHeight;
      setIsInHero(y < heroHeight);

      const delta = y - lastScrollY.current;
      if (Math.abs(delta) >= SCROLL_THRESHOLD) {
        setNavVisible(delta <= 0);
        lastScrollY.current = y;
      }
      if (y <= 0) {
        setNavVisible(true);
      }

      const pageHeight = document.documentElement.scrollHeight;
      const viewportBottom = y + window.innerHeight;
      const depth = (viewportBottom / pageHeight) * 100;
      if (!depthRef.current.half && depth >= 50) {
        depthRef.current.half = true;
        trackLandingEvent("scroll_depth_50", { locale, section: "page" });
      }
      if (!depthRef.current.nearEnd && depth >= 90) {
        depthRef.current.nearEnd = true;
        trackLandingEvent("scroll_depth_90", { locale, section: "page" });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [locale]);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-white text-[#18313b] pt-0 pb-0">
      <Navbar visible={navVisible} isInHero={isInHero} />

      <main id="top" className="relative">
        <div ref={heroRef}>
          <HeroSection />
        </div>
        <ProblemStatement />
        <SolutionSection />
        <SuperpowersSection />
        <FeaturesSection />
        <PricingSection locale={locale} />
        <CompetitiveAdvantage />
        <TestimoniesSection />
        <FaqSection locale={locale} />
      </main>

      <div className="flex justify-center py-10 bg-white">
        <FooterTryButton className="w-[70%] md:w-[20%] hover:scale-105 transition-all duration-300" />
      </div>
      <FooterSection />
    </div>
  );
}
