export function FaqViewMore() {
  return (
    <div className="flex justify-center mt-8">
      <button className="bg-[#EAF2F1] cursor-pointer hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105">
        <span className="">View more</span>
        <div className="w-7 h-7 bg-[#333333] rounded-full flex items-center justify-center transition-transform duration-300 rotate-0">
          <span className="text-white text-2xl">+</span>
        </div>
      </button>
    </div>
  );
}
