export type Locale = "en" | "ar";

export type Direction = "ltr" | "rtl";

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

export interface SuperpowerItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  isNew?: boolean;
}

export interface ChatDemoItem {
  id: string;
  title: string;
  userMessage: string;
  botReply: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tier: string;
  monthlyPrice: string;
  annualPrice: string;
  mascotImage: string;
  thumbnailImage: string;
  videoThumb?: string;
  popular?: boolean;
  features: string[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  title: string;
  quote: string;
  photo: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SupernovaFeature {
  icon: string;
  title: string;
  description: string;
}
