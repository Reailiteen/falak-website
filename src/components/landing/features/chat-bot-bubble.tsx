import { MEDIA } from "@/lib/landing/content";

type Props = { reply: string };

export function ChatBotBubble({ reply }: Props) {
  return (
    <div className="relative bg-white text-gray-900 rounded-[12px] px-4 py-3 flex flex-col gap-2 w-full max-w-[280px] shadow-lg self-start">
      {/* Left tail */}
      <span aria-hidden="true" className="pointer-events-none absolute -left-3 bottom-4 flex h-6 w-4">
        <svg width="15" height="24" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scaleX(-1)" }}>
          <path d="M10.6604 11.1627C5.2746 9.05674 2.04858 5.28535 2.04858 0V15.4706C6.28601 15.2641 9.35627 14.5094 11.2593 13.2066C11.444 13.0801 11.5849 12.8994 11.6626 12.6894C11.8696 12.1295 11.5835 11.5077 11.0236 11.3007L10.6604 11.1627Z" fill="white" />
        </svg>
      </span>

      {/* Memorae badge */}
      <div className="flex items-center gap-1 rounded-[6px] bg-[#E4ECFF] px-2 py-1 w-fit">
        <div className="h-[14px] w-[14px] rounded-full bg-white grid place-items-center">
          <img alt="Memorae logo" src={MEDIA.memoraeLogo} width={20} height={20} className="object-contain" loading="lazy" />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wide text-[#557BF4]">Memorae</span>
      </div>

      <p className="text-sm font-medium leading-[136%] text-[#01214F] text-left">{reply}</p>
    </div>
  );
}
