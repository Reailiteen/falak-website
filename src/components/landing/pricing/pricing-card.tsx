"use client";

import { trackLandingEvent } from "@/lib/landing/analytics";
import type { PricingPlan } from "@/lib/landing/types";
import type { Locale } from "@/lib/landing/types";

const PLAY_CIRCLE = "https://cdn.memorae.ai/assets/play_circle.svg";

const MEMORAE_PATH =
  "M5.34434 15.5971C4.74534 15.5971 4.23021 15.3897 3.79896 14.9748C3.36771 14.5599 3.13046 14.0568 3.08721 13.4654C2.39971 13.3607 1.82759 13.0463 1.37084 12.5223C0.914088 11.9982 0.685713 11.3837 0.685713 10.679C0.685713 10.4328 0.717713 10.1897 0.781713 9.94941C0.845588 9.70916 0.941463 9.4836 1.06934 9.27272C0.917463 9.05247 0.803525 8.81428 0.727525 8.55816C0.651525 8.30191 0.613525 8.03291 0.613525 7.75116C0.613525 7.03166 0.850338 6.40947 1.32396 5.8846C1.79746 5.35972 2.38378 5.05447 3.0829 4.96885C3.07803 4.9496 3.07559 4.93035 3.07559 4.9111V4.84622C3.09871 4.24235 3.32971 3.73178 3.76859 3.31453C4.20759 2.89728 4.73284 2.68866 5.34434 2.68866C5.68859 2.68866 5.99534 2.75597 6.26459 2.8906C6.53384 3.0251 6.78959 3.21547 7.03184 3.46172C7.27121 3.21547 7.52509 3.0251 7.79346 2.8906C8.06171 2.75597 8.37034 2.68866 8.71934 2.68866C9.32409 2.68866 9.84453 2.89653 10.2807 3.31228C10.7167 3.72816 10.9462 4.23566 10.9693 4.83478V4.89966C10.9693 4.91891 10.9669 4.93816 10.962 4.95741C11.6611 5.04291 12.2506 5.34891 12.7303 5.87541C13.2102 6.40178 13.4501 7.02703 13.4501 7.75116C13.4501 8.03291 13.411 8.30191 13.3326 8.55816C13.2542 8.81428 13.139 9.05247 12.987 9.27272C13.1149 9.48335 13.212 9.70878 13.2784 9.94903C13.3448 10.1894 13.378 10.4327 13.378 10.679C13.378 11.3962 13.1476 12.015 12.687 12.5352C12.2265 13.0553 11.6501 13.3654 10.9577 13.4654C10.9145 14.0568 10.6803 14.5599 10.2553 14.9748C9.83034 15.3897 9.31834 15.5971 8.71934 15.5971C8.37321 15.5971 8.06527 15.5317 7.79552 15.401C7.52577 15.2702 7.27121 15.0793 7.03184 14.8283C6.78471 15.0793 6.52702 15.2702 6.25877 15.401C5.99052 15.5317 5.68571 15.5971 5.34434 15.5971ZM7.59434 4.93866V13.3473C7.59434 13.6623 7.7034 13.9285 7.92153 14.146C8.13965 14.3635 8.40659 14.4723 8.72234 14.4723C9.02321 14.4723 9.28109 14.3602 9.49596 14.1361C9.71096 13.9121 9.82709 13.651 9.84434 13.3529C9.52896 13.2867 9.23784 13.1667 8.97096 12.9931C8.70421 12.8196 8.47371 12.5972 8.27946 12.326C8.18334 12.1943 8.14709 12.0542 8.17071 11.9054C8.19434 11.7567 8.2724 11.6358 8.4049 11.543C8.53665 11.4467 8.67777 11.4105 8.82827 11.4342C8.9789 11.4578 9.10121 11.5359 9.19521 11.6684C9.35034 11.894 9.54777 12.0668 9.78752 12.1867C10.0273 12.3065 10.2866 12.3665 10.5655 12.3665C11.0357 12.3665 11.4345 12.2028 11.7619 11.8754C12.0893 11.5479 12.253 11.1491 12.253 10.679C12.253 10.5843 12.2438 10.4898 12.2256 10.3953C12.2073 10.3008 12.1785 10.2078 12.139 10.1165C11.9265 10.2607 11.6921 10.3713 11.4358 10.4482C11.1796 10.525 10.9135 10.5635 10.6376 10.5635C10.4783 10.5635 10.3447 10.5096 10.2368 10.4018C10.129 10.294 10.0751 10.1603 10.0751 10.0008C10.0751 9.84141 10.129 9.70785 10.2368 9.6001C10.3447 9.49247 10.4783 9.43866 10.6376 9.43866C11.1078 9.43866 11.5066 9.27491 11.8341 8.94741C12.1615 8.62003 12.3251 8.22128 12.3251 7.75116C12.3251 7.28841 12.1638 6.89578 11.8412 6.57328C11.5186 6.25078 11.127 6.08085 10.6665 6.06347C10.5385 6.29335 10.37 6.49385 10.1608 6.66497C9.95171 6.8361 9.71834 6.97166 9.46071 7.07166C9.31359 7.12741 9.16996 7.12278 9.02984 7.05778C8.88971 6.99278 8.79634 6.88591 8.74971 6.73716C8.70159 6.59003 8.70734 6.44553 8.76696 6.30366C8.82659 6.16191 8.93234 6.06697 9.08421 6.01885C9.31021 5.94197 9.4934 5.80541 9.63377 5.60916C9.77415 5.41303 9.84434 5.18828 9.84434 4.93491C9.84434 4.62191 9.73553 4.35678 9.5179 4.13953C9.3004 3.92216 9.03409 3.81347 8.71896 3.81347C8.40384 3.81347 8.13759 3.92222 7.92021 4.13972C7.70296 4.35722 7.59434 4.62353 7.59434 4.93866ZM6.46934 13.3473V4.93866C6.46934 4.62353 6.36053 4.35722 6.1429 4.13972C5.9254 3.92222 5.65909 3.81347 5.34396 3.81347C5.02884 3.81347 4.76259 3.92222 4.54521 4.13972C4.32796 4.35722 4.21934 4.62353 4.21934 4.93866C4.21934 5.18191 4.28759 5.40353 4.42409 5.60353C4.56071 5.80353 4.74196 5.94197 4.96784 6.01885C5.11496 6.06697 5.22265 6.16072 5.2909 6.3001C5.35915 6.43947 5.36965 6.58328 5.3224 6.73153C5.26577 6.87966 5.16659 6.9861 5.02484 7.05085C4.88309 7.11572 4.73621 7.12029 4.58421 7.06454C4.32659 6.96453 4.09321 6.83016 3.88409 6.66141C3.67496 6.49266 3.5064 6.29335 3.3784 6.06347C2.9304 6.08085 2.54509 6.25322 2.22246 6.5806C1.89984 6.90797 1.73853 7.29891 1.73853 7.75341C1.73853 8.22203 1.90221 8.62003 2.22959 8.94741C2.55709 9.27491 2.9559 9.43866 3.42603 9.43866C3.5854 9.43866 3.71903 9.49253 3.8269 9.60028C3.93465 9.70816 3.98853 9.84185 3.98853 10.0013C3.98853 10.1607 3.93465 10.2943 3.8269 10.402C3.71903 10.5097 3.5854 10.5635 3.42603 10.5635C3.15015 10.5635 2.88409 10.525 2.62784 10.4482C2.37159 10.3713 2.13721 10.2607 1.92471 10.1165C1.88521 10.2078 1.85634 10.3008 1.83809 10.3953C1.81984 10.4898 1.81071 10.5843 1.81071 10.679C1.81071 11.1491 1.9744 11.5479 2.30178 11.8754C2.62915 12.2028 3.02796 12.3665 3.49821 12.3665C3.77846 12.3665 4.03771 12.3062 4.27596 12.1855C4.51421 12.0648 4.71171 11.8924 4.86846 11.6684C4.96246 11.5359 5.08477 11.4578 5.2354 11.4342C5.3859 11.4105 5.52702 11.4455 5.65877 11.5392C5.79052 11.633 5.8684 11.7546 5.8924 11.9041C5.9164 12.0537 5.88034 12.1943 5.78421 12.326C5.58521 12.5972 5.35034 12.8215 5.07959 12.9989C4.80896 13.1763 4.51596 13.2982 4.20059 13.3645C4.21784 13.6627 4.33709 13.9218 4.55834 14.1419C4.77946 14.3622 5.04046 14.4723 5.34134 14.4723C5.65709 14.4723 5.92402 14.3635 6.14215 14.146C6.36027 13.9285 6.46934 13.6623 6.46934 13.3473Z";

export interface CardVisualConfig {
  bgImage: string;
  buttonClassName: string;
  buttonStyle?: React.CSSProperties;
  videoBg: string;
  annualTotal: string;
  monthlyTotal: string;
  showPerMonth: boolean;
  priceClassName: string;
  nameClassName: string;
  annualTextColor: string;
  ctaTextSize: string;
  accentClassName?: string;
}

interface CardContentProps {
  plan: PricingPlan;
  isAnnual: boolean;
  locale: Locale;
  config: CardVisualConfig;
}

function CardContent({ plan, isAnnual, locale, config }: CardContentProps) {
  return (
    <div className="relative z-10">
      {/* Tier label */}
      <div className="flex items-center gap-2 mb-2">
        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" className="flex-shrink-0">
          <path d={MEMORAE_PATH} fill="white" />
        </svg>
        <h1 className="text-white text-sm font-normal uppercase">{plan.tier}</h1>
      </div>

      {/* Plan name + badge */}
      <div className="flex flex-col items-start mb-2">
        <h2 className={`${config.nameClassName} font-normal text-white inline whitespace-nowrap text-left`}>
          {plan.name}
        </h2>
        {isAnnual && (
          <span className="px-1 py-1 text-[11px] rounded-sm font-semibold inline text-[#090D10] bg-green-500">
            6 MONTHS FREE
          </span>
        )}
      </div>

      {/* Price */}
      <div className="mb-3">
        <div className="flex items-baseline gap-2 mb-2">
          <span className={`${config.priceClassName} font-semibold text-white whitespace-nowrap`}>
            {isAnnual ? plan.annualPrice : plan.monthlyPrice}
          </span>
          {isAnnual && (
            <span className="text-[28px] lg:text-[32px] text-white/70 line-through whitespace-nowrap flex-shrink-0">
              {plan.monthlyPrice}
            </span>
          )}
          {config.showPerMonth && (
            <span className="text-gray-400 font-normal flex-shrink-0 text-[16px] whitespace-nowrap">per month</span>
          )}
        </div>
        {isAnnual && (
          <p className={`${config.annualTextColor} text-[16px] flex items-start`}>
            12 months for {config.annualTotal} $ (<span className="line-through">{config.monthlyTotal} $</span>)
          </p>
        )}
      </div>

      {/* Video demo */}
      <div
        className={`${config.videoBg} rounded-2xl p-2 mb-6 flex items-center gap-4 cursor-pointer transition-all duration-200 group hover:-translate-y-0.5`}
      >
        <div className="relative">
          <div className="w-32 h-16 bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden transform transition-transform duration-200 group-hover:scale-[1.02]">
            <img
              alt="demo thumbnail"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              src={plan.thumbnailImage}
            />
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
              <img alt="Play icon" width="20" height="20" src={PLAY_CIRCLE} />
            </div>
          </div>
        </div>
        <div className="text-left flex-1 min-h-[64px] flex items-center">
          <p className="text-[13px] font-semibold text-gray-800 leading-tight">
            Watch{" "}
            <span className="bg-gradient-to-r from-[#9734E6] to-[#E5469F] bg-clip-text text-transparent font-medium text-[13px] inline">
              {plan.name}
            </span>{" "}
            in action
          </p>
        </div>
      </div>

      {/* CTA button */}
      <button
        type="button"
        className={`w-full text-white ${config.ctaTextSize} font-semibold py-[11px] rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-all cursor-pointer hover:-translate-y-0.5 ${config.buttonClassName}`}
        style={config.buttonStyle}
        onClick={() => trackLandingEvent("cta_primary_click", { locale, section: `pricing_${plan.id}` })}
      >
        Try for Free <span className="text-lg">→</span>
      </button>
    </div>
  );
}

export interface PricingCardProps {
  plan: PricingPlan;
  isAnnual: boolean;
  locale: Locale;
  config: CardVisualConfig;
}

export function PricingCard({ plan, isAnnual, locale, config }: PricingCardProps) {
  const bgImage = (
    <img
      alt=""
      className="absolute inset-0 w-full h-full z-0 rounded-inherit"
      src={config.bgImage}
      style={{ objectFit: "fill", objectPosition: "center center" }}
    />
  );

  if (plan.popular) {
    return (
      <div className="w-full cursor-pointer transition-transform duration-200 hover:scale-[1.02]">
        <div className="relative w-[95%] lg:max-w-md mx-auto mt-6 transition-all duration-300 hover:-translate-y-1">
          <div className="rounded-3xl transition-all duration-300">
            <div className="rounded-3xl bg-black">
              <div className="rounded-3xl bg-gradient-to-r from-[#5C7BF3] to-[#FF66C4] relative z-10">
                <div
                  className="text-center py-1.5 text-white font-semibold text-lg rounded-t-3xl"
                  style={{ background: "linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(236, 72, 153) 100%)" }}
                >
                  Most Popular
                </div>
                <div className="bg-[#090D10] rounded-b-3xl p-6 text-white -mt-[3px] relative z-20 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,102,196,0.15)] overflow-hidden">
                  {bgImage}
                  <div className="absolute inset-0 rounded-b-3xl z-0" />
                  <div className="absolute right-3 top-3 md:right-0 md:top-2 z-10 w-28 h-28 lg:w-[120px] lg:h-[120px]">
                    <img
                      alt={`${plan.name} mascot`}
                      className="w-full h-full object-contain drop-shadow-[0_0_16px_rgba(0,0,0,0.5)]"
                      loading="lazy"
                      src={plan.mascotImage}
                    />
                  </div>
                  <CardContent plan={plan} isAnnual={isAnnual} locale={locale} config={config} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full cursor-pointer transition-transform duration-200 hover:scale-[1.02]">
      <div
        className={`mx-auto bg-[#090D10] rounded-4xl p-6 w-[95%] lg:max-w-md relative mt-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,102,196,0.15)] ${config.accentClassName ?? ""}`}
      >
        {bgImage}
        <div className="absolute inset-0 rounded-4xl z-0" />
        <div className="absolute right-[9px] top-0 md:right-1 md:top-0 z-10 w-28 h-28 lg:w-[120px] lg:h-[120px]">
          <img
            alt={`${plan.name} mascot`}
            className="w-full h-full object-contain drop-shadow-[0_0_16px_rgba(0,0,0,0.5)]"
            loading="lazy"
            src={plan.mascotImage}
          />
        </div>
        <CardContent plan={plan} isAnnual={isAnnual} locale={locale} config={config} />
      </div>
    </div>
  );
}
