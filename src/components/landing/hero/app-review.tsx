import { MEDIA, HERO } from "@/lib/landing/content";

export function AppReview() {
  return (
    <div className="z-10 text-white text-base md:mt-10 md:text-lg mb-2">
      <div className="flex flex-row items-center justify-center md:justify-start gap-1 md:space-x-2 text-[13px] md:text-base">
        <div className="flex items-center space-x-1 md:space-x-2">
          <span className="flex items-center space-x-1 md:space-x-2">
            {[...Array(5)].map((_, i) => (
              <img key={i} alt="star" className="h-4 w-4 md:h-5 md:w-5" src={MEDIA.starHome} />
            ))}
          </span>
          <span>{HERO.rating}</span>
        </div>
        <div className="mt-0 text-center md:text-left">
          <span className="md:inline">| </span>
          <span>{HERO.badge}</span>
        </div>
      </div>
    </div>
  );
}
