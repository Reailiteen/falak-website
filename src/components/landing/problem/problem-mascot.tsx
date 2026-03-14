export function ProblemMascot() {
  return (
    <>
      {/* Mobile — bottom right */}
      <div className="absolute md:hidden -bottom-[30rem] -right-[15rem] w-80 h-80 z-10">
        <img alt="mascot" src="/falak-mascot-crying.png" width={428} height={428} className="w-full h-full object-contain" loading="lazy" />
      </div>

      {/* Desktop — bottom right */}
      <div className="absolute hidden md:block -bottom-[15rem] -right-[15rem] w-[1000px] h-[1000px] z-10">
        <img alt="mascot" src="/falak-mascot-crying.png" width={856} height={856} className="w-full h-full object-contain" loading="lazy" />
      </div>
    </>
  );
}
