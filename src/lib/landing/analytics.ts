import type { LandingEventName } from "@/lib/landing/types";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

type Primitive = string | number | boolean | null | undefined;

export type LandingEventPayload = Record<string, Primitive>;

export function getDeviceType(): "mobile" | "desktop" {
  if (typeof window === "undefined") {
    return "desktop";
  }

  return window.matchMedia("(max-width: 768px)").matches ? "mobile" : "desktop";
}

export function getUtmParams(): LandingEventPayload {
  if (typeof window === "undefined") {
    return {};
  }

  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get("utm_source") ?? undefined,
    utm_medium: params.get("utm_medium") ?? undefined,
    utm_campaign: params.get("utm_campaign") ?? undefined,
    utm_term: params.get("utm_term") ?? undefined,
    utm_content: params.get("utm_content") ?? undefined,
  };
}

export function trackLandingEvent(
  eventName: LandingEventName,
  payload: LandingEventPayload = {},
): void {
  if (typeof window === "undefined") {
    return;
  }

  const eventPayload = {
    event: eventName,
    ts: Date.now(),
    device_type: getDeviceType(),
    ...getUtmParams(),
    ...payload,
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(eventPayload);

  window.dispatchEvent(
    new CustomEvent("falak:analytics", {
      detail: eventPayload,
    }),
  );

  if (process.env.NODE_ENV !== "production") {
    console.info("[falak-event]", eventPayload);
  }
}

export function buildTrackedUrl(
  baseUrl: string,
  extras: LandingEventPayload = {},
): string {
  if (!baseUrl.startsWith("http")) {
    return baseUrl;
  }

  const url = new URL(baseUrl);

  Object.entries(getUtmParams()).forEach(([key, value]) => {
    if (typeof value === "string" && value.length > 0) {
      url.searchParams.set(key, value);
    }
  });

  Object.entries(extras).forEach(([key, value]) => {
    if (typeof value === "string" && value.length > 0) {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
}
