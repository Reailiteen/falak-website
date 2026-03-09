interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  textSizeClass: string;
}

export function FaqItem({ question, answer, isOpen, onToggle, textSizeClass }: FaqItemProps) {
  return (
    <div
      className="bg-[#F3F1F6] hover:bg-black/5 text-[#121723] backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
      onClick={onToggle}
    >
      <button className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none cursor-pointer">
        <span className={`${textSizeClass} pr-4`}>{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-5 h-5 text-[#557BF4] transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {isOpen && (
        <p className="px-6 pb-5 text-sm leading-7 text-[#121723]/70">{answer}</p>
      )}
    </div>
  );
}
