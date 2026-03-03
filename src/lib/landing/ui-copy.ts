import type { Locale } from "@/lib/landing/types";

export type LandingUiCopy = {
  navSuperpowers: string;
  navChannels: string;
  navPricing: string;
  ctaTryFree: string;
  ctaTalkToFalak: string;
  close: string;
  trustedByFamilies: string;
  chipCalm: string;
  chipSteady: string;
  soon: string;
  onStores: string;
  comingSoon: string;
  availableOnStores: string;
  featureHeadingLine1: string;
  featureHeadingLine2: string;
  memorySystemTitle: string;
  channelsHeading: string;
  channelsDescription: string;
  pricingHeading: string;
  monthly: string;
  yearly: string;
  sixMonthsFree: string;
  startNow: string;
  languageCode: string;
  talkModalBody: string;
  emailSupport: string;
};

export const LANDING_UI_COPY: Record<Locale, LandingUiCopy> = {
  en: {
    navSuperpowers: "Superpowers",
    navChannels: "Channels",
    navPricing: "Pricing",
    ctaTryFree: "Try free",
    ctaTalkToFalak: "Talk to Falak",
    close: "Close",
    trustedByFamilies: "Trusted by families worldwide",
    chipCalm: "Calm",
    chipSteady: "Steady",
    soon: "Soon",
    onStores: "On App Store and Google Play",
    comingSoon: "Coming soon",
    availableOnStores: "Available on both stores",
    featureHeadingLine1: "Clear steps, calm progress every day.",
    featureHeadingLine2: "No pressure, just steady family growth.",
    memorySystemTitle: "A calm system for daily family flow",
    channelsHeading: "Falak Channels",
    channelsDescription:
      "A unified guardian-child workflow with calm reminders, approvals, and progress in one connected app experience.",
    pricingHeading: "Start with the plan that fits your family",
    monthly: "Monthly",
    yearly: "Yearly",
    sixMonthsFree: "6 Months Free",
    startNow: "Start now",
    languageCode: "EN",
    talkModalBody:
      "Pick the fastest way to start: install the app now or contact our team for setup help.",
    emailSupport: "Email support@falak.app",
  },
  ar: {
    navSuperpowers: "المزايا",
    navChannels: "القنوات",
    navPricing: "الأسعار",
    ctaTryFree: "ابدأ مجاناً",
    ctaTalkToFalak: "تحدث مع فلك",
    close: "إغلاق",
    trustedByFamilies: "موثوق لدى عائلات حول العالم",
    chipCalm: "هدوء",
    chipSteady: "ثبات",
    soon: "قريباً",
    onStores: "على App Store و Google Play",
    comingSoon: "قريباً",
    availableOnStores: "متاح على المتجرين",
    featureHeadingLine1: "خطوات واضحة، نتائج هادئة كل يوم.",
    featureHeadingLine2: "بدون ضغط، فقط نمو ثابت للأسرة.",
    memorySystemTitle: "نظام هادئ ينظم يوم العائلة",
    channelsHeading: "قنوات فلك",
    channelsDescription:
      "تجربة موحّدة بين الوالدين والأطفال مع تنبيهات ودعم مستمر عبر التطبيق.",
    pricingHeading: "ابدأ بالخطة المناسبة",
    monthly: "شهري",
    yearly: "سنوي",
    sixMonthsFree: "6 أشهر مجاناً",
    startNow: "ابدأ الآن",
    languageCode: "AR",
    talkModalBody:
      "اختر أسرع طريقة للبدء: تنزيل التطبيق أو التواصل مع فريقنا.",
    emailSupport: "راسلنا عبر البريد",
  },
};
