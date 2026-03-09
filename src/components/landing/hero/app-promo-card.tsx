import { MEDIA } from "@/lib/landing/content";

const cardStyle = {
  background: "rgba(255, 255, 255, 0.2)",
  boxShadow: "rgba(0, 0, 0, 0.08) 0px 20px 24px -4px, rgba(0, 0, 0, 0.03) 0px 8px 8px -4px",
  borderRadius: "16px",
};

type Props = { variant: "desktop" | "mobile" };

export function AppPromoCard({ variant }: Props) {
  const isDesktop = variant === "desktop";

  return (
    <div
      className={
        isDesktop
          ? "hidden md:flex items-center border-[0.5px] border-white gap-4 px-3 md:px-2 py-2 md:py-3 mt-10 mx-auto md:mx-0 md:absolute md:right-10 md:top-[40%] md:max-w-xs md:mt-0 cursor-pointer hover:scale-105 transition-transform duration-200"
          : "flex items-center max-w-[250px] border-[0.5px] border-white gap-4 px-3 py-2 cursor-pointer hover:scale-105 transition-transform duration-200"
      }
      style={cardStyle}
    >
      <div className="rounded-2xl flex md:ml-1 items-center justify-center">
        <img
          alt="Memorae App"
          className="w-20 h-20"
          src={isDesktop ? MEDIA.appStoreIcon : MEDIA.appPromo}
        />
      </div>
      <div className="flex flex-col">
        <span
          className="mb-1 px-2 py-[2px] rounded-md text-[10px]"
          style={
            isDesktop
              ? { color: "rgb(255, 102, 196)", background: "rgba(255, 102, 196, 0.15)", width: "max-content" }
              : { color: "rgb(85, 123, 244)", background: "rgba(85, 123, 244, 0.1)", width: "max-content" }
          }
        >
          AVAILABLE NOW
        </span>
        <h2 className="text-left text-black">Memorae App</h2>
        <div className="flex items-center gap-2 shrink-0">
          <p className={`font-normal text-[#898F91] ${isDesktop ? "text-[14px]" : ""}`}>Available on:</p>
          <img alt="App Store" className="w-4 h-4" src={MEDIA.appStoreBadge} />
          <img alt="Play Store" className="w-4 h-4" src={MEDIA.image318} />
        </div>
      </div>
    </div>
  );
}
