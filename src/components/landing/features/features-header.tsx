import { FeaturesNav } from "./features-nav";

type Props = { onPrev: () => void; onNext: () => void };

export function FeaturesHeader({ onPrev, onNext }: Props) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-12 px-4">
      <header className="text-center md:text-left w-full md:w-auto md:pl-20">
        <h2 className="text-[32px] md:text-[56px] font-semibold text-[#333333] leading-tight max-w-3xl">
          How you&apos;ll stop forgetting forever
        </h2>
      </header>
      <FeaturesNav
        className="hidden md:flex gap-3 md:mr-20"
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}
