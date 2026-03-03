import type { Locale, MascotConfig } from "@/lib/landing/types";

type MascotGuideProps = {
  config: MascotConfig;
  locale: Locale;
};

export function MascotGuide({ config, locale }: MascotGuideProps) {
  const isMirrored = config.localeVariant === "mirrored" && locale === "ar";
  const sizeClass =
    config.size === "lg"
      ? "h-32 w-32"
      : config.size === "sm"
        ? "h-20 w-20"
        : "h-24 w-24";

  return (
    <div
      aria-hidden="true"
      className={`relative ${sizeClass} mascot-float ${isMirrored ? "scale-x-[-1]" : ""}`}
    >
      <svg
        viewBox="0 0 120 120"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full drop-shadow-[0_10px_20px_rgba(47,156,168,0.2)]"
      >
        <circle cx="60" cy="60" r="44" fill="#CFEFF3" />
        <path
          d="M60 20L68 41L92 41L73 56L80 80L60 65L40 80L47 56L28 41L52 41Z"
          fill="#7CCFD6"
          stroke="#2F9CA8"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="56" r="4" fill="#18313B" />
        <circle cx="70" cy="56" r="4" fill="#18313B" />
        <path
          d="M48 70C53 75 67 75 72 70"
          fill="none"
          stroke="#18313B"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="84" cy="35" r="8" fill="#F5C27D" />
      </svg>
    </div>
  );
}
