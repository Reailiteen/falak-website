type Props = {
  onPrev: () => void;
  onNext: () => void;
  className: string;
};

export function FeaturesNav({ onPrev, onNext, className }: Props) {
  return (
    <div className={className}>
      <button type="button" aria-label="Previous" onClick={onPrev} className="w-10 h-10 flex items-center justify-center bg-[#333333] rounded-full shadow-md text-white hover:bg-[#333333]/80 cursor-pointer transition z-10">
        <svg width="24" height="24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button type="button" aria-label="Next" onClick={onNext} className="w-10 h-10 flex items-center justify-center bg-[#333333] rounded-full shadow-md text-white hover:bg-[#333333]/80 cursor-pointer transition z-10">
        <svg width="24" height="24" fill="none">
          <path d="M9 6l6 6-6 6" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
