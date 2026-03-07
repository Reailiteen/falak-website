export function CardPlusButton() {
  return (
    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black" aria-hidden="true">
        <path d="M5 12h14" /><path d="M12 5v14" />
      </svg>
    </div>
  );
}
