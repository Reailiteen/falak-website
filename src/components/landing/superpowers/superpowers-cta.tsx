export function SuperpowersCTA() {
  return (
    <div className="flex justify-center mt-6 md:mt-0">
      <a
        href="/en/superpower/"
        className="bg-gradient-to-r from-[#5561F4] to-[#FF66C4] cursor-pointer py-3 rounded-full text-lg md:text-[22px] hover:scale-105 transition-all duration-300 font-semibold text-white shadow mt-5 w-full max-w-sm md:max-w-[422px] hover:opacity-90 flex items-center justify-center gap-2"
      >
        Discover all the superpowers{" "}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline" aria-hidden="true">
          <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
