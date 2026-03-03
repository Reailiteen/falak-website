export type Locale = "en" | "ar";

export type Direction = "ltr" | "rtl";

export type CtaMode = "buttons" | "hybrid";

export type LandingEventName =
  | "landing_view"
  | "cta_primary_click"
  | "cta_store_ios"
  | "cta_store_android"
  | "cta_phone_submit"
  | "faq_expand"
  | "scroll_depth_50"
  | "scroll_depth_90"
  | "language_switch";

export interface ThemeTokens {
  color: {
    primary: string;
    primaryStrong: string;
    accent: string;
    surface: string;
    surfaceAlt: string;
    text: string;
    textMuted: string;
    border: string;
    success: string;
    warning: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  spacing: {
    section: string;
    container: string;
  };
  motion: {
    fast: string;
    base: string;
  };
}

export interface MascotConfig {
  characterId: string;
  pose: "wave" | "point" | "celebrate-soft" | "listen" | "calm";
  expression: "warm" | "reassuring" | "confident" | "gentle";
  size: "sm" | "md" | "lg";
  placement: "hero" | "steps" | "cta" | "ambient";
  localeVariant: "mirrored" | "default";
}

export interface StatItem {
  value: string;
  label: string;
  source: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: "calendar" | "shield" | "gift" | "spark" | "sync" | "check";
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LandingContent {
  nav: {
    logoWord: string;
    links: {
      howItWorks: string;
      parents: string;
      kids: string;
      faq: string;
    };
    cta: string;
    languageToggle: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimaryIos: string;
    ctaPrimaryAndroid: string;
    ctaSecondary: string;
    phoneLabel: string;
    phonePlaceholder: string;
    phoneButton: string;
    phoneDisabledNote: string;
    trust: string[];
  };
  socialProof: {
    heading: string;
    testimonialSnippet: string;
    testimonialAuthor: string;
  };
  roleSplit: {
    heading: string;
    parentTitle: string;
    parentDescription: string;
    kidTitle: string;
    kidDescription: string;
  };
  howItWorks: {
    heading: string;
    steps: Array<{ title: string; description: string }>;
  };
  features: {
    heading: string;
    items: FeatureItem[];
  };
  proof: {
    heading: string;
    testimonials: TestimonialItem[];
    stats: StatItem[];
  };
  safety: {
    heading: string;
    points: string[];
  };
  faq: {
    heading: string;
    items: FaqItem[];
  };
  finalCta: {
    heading: string;
    subtitle: string;
    ctaPrimaryIos: string;
    ctaPrimaryAndroid: string;
  };
  footer: {
    privacy: string;
    terms: string;
    contact: string;
    language: string;
    rights: string;
  };
  seo: {
    title: string;
    description: string;
  };
}
