import { MEDIA } from "@/lib/landing/content";
import { ChatUserBubble } from "./chat-user-bubble";
import { ChatBotBubble } from "./chat-bot-bubble";

export type FeatureCardData = {
  title: string;
  userMessage: string;
  botReply: string;
};

export function FeaturesCard({ title, userMessage, botReply }: FeatureCardData) {
  return (
    <div className="snap-center flex-shrink-0 first:pl-4 last:pr-4">
      <article
        className="relative flex flex-col justify-start items-center rounded-[32px] p-6 h-[380px] w-[310px] lg:w-[310px] lg:h-[380px] bg-cover bg-center transition-transform duration-300 ease-out hover:-translate-y-1 border border-white/60 shadow-lg"
        style={{ backgroundImage: `url("${MEDIA.frame2147238407}")` }}
      >
        <div className="relative flex flex-col gap-4 w-full h-full">
          <h3 className="text-[24px] leading-[120%] font-semibold text-[#01214F] text-center mb-4">{title}</h3>
          <ChatUserBubble message={userMessage} />
          <ChatBotBubble reply={botReply} />
        </div>
      </article>
    </div>
  );
}
