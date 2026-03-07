interface FooterStoreBadgesProps {
  compact?: boolean;
  containerClass?: string;
}

export function FooterStoreBadges({ compact = false, containerClass }: FooterStoreBadgesProps) {
  const iconSize = compact ? 20 : 24;
  const labelSize = compact ? "text-[9px]" : "text-[10px]";
  const titleSize = compact ? "text-xs" : "text-sm";
  const padding = compact ? "px-4 py-2" : "px-4 py-2.5";
  const hoverClass = compact ? "hover:scale-105" : "";

  return (
    <div className={containerClass}>
      <a
        href="https://apps.apple.com/app/id6756915818"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl ${padding} transition-all duration-200 ${hoverClass}`}
        aria-label="Download on App Store"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="white">
          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
        </svg>
        <div className="flex flex-col">
          <span className={`${labelSize} text-white/70 leading-none`}>Download on the</span>
          <span className={`${titleSize} font-semibold text-white leading-tight`}>App Store</span>
        </div>
      </a>

      <a
        href="https://play.google.com/store/apps/details?id=ai.memorae"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl ${padding} transition-all duration-200 ${hoverClass}`}
        aria-label="Get it on Google Play"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <path d="M3.60001 1.80005C3.30001 2.10005 3.10001 2.60005 3.10001 3.20005V20.8C3.10001 21.4 3.30001 21.9 3.60001 22.2L3.70001 22.3L13.8 12.2V12V11.8L3.70001 1.70005L3.60001 1.80005Z" fill="#4285F4" />
          <path d="M17.2 15.6L13.8 12.2V12V11.8L17.2 8.40002L17.3 8.50002L21.4 10.8C22.5 11.4 22.5 12.4 21.4 13L17.3 15.5L17.2 15.6Z" fill="#FFBA00" />
          <path d="M17.3 15.5L13.8 12L3.60001 22.2C4.00001 22.6 4.60001 22.7 5.30001 22.3L17.3 15.5Z" fill="#F44336" />
          <path d="M17.3 8.50005L5.30001 1.70005C4.60001 1.30005 4.00001 1.40005 3.60001 1.80005L13.8 12L17.3 8.50005Z" fill="#4CAF50" />
        </svg>
        <div className="flex flex-col">
          <span className={`${labelSize} text-white/70 leading-none`}>Get it on</span>
          <span className={`${titleSize} font-semibold text-white leading-tight`}>Google Play</span>
        </div>
      </a>
    </div>
  );
}
