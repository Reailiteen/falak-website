interface BillingToggleProps {
  billingCycle: "monthly" | "annual";
  onChange: (cycle: "monthly" | "annual") => void;
}

export function BillingToggle({ billingCycle, onChange }: BillingToggleProps) {
  const isAnnual = billingCycle === "annual";

  return (
    <div className="max-w-sm mx-auto py-3 mt-2">
      <div className="relative bg-[#1D1D12] border border-white rounded-full mt-10 md:mt-8 lg:mt-0 flex items-center">
        <div
          className={`absolute h-full rounded-full bg-gradient-to-r from-[#5C7BF3] to-[#FF66C4] transition-all duration-300 ease-in-out ${
            isAnnual ? "left-[40%] right-0" : "left-0 right-[60%]"
          }`}
        />
        <button
          type="button"
          className="cursor-pointer relative z-10 px-4 py-2 h-full rounded-full text-sm font-medium transition-colors duration-300 text-white"
          onClick={() => onChange("monthly")}
        >
          Monthly
        </button>
        <button
          type="button"
          className="cursor-pointer relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2 text-white"
          onClick={() => onChange("annual")}
        >
          Annual
          <span className="bg-[#23CF67] text-white text-xs px-2 py-1 rounded-full font-semibold">-50%</span>
        </button>
      </div>
    </div>
  );
}
