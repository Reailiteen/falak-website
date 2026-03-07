import { MESSAGE_LINES } from "@/lib/landing/content";

export function ProblemText() {
  return (
    <div className="text-center z-10 mt-16 md:mt-0 px-4 md:max-w-6xl max-w-[340px] mx-auto">
      {MESSAGE_LINES.map((line) => (
        <p key={line} className="font-semibold text-[#333333] leading-tight text-xl md:text-3xl lg:text-4xl">
          {line}
        </p>
      ))}
    </div>
  );
}
