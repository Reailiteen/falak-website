import { ChaosTitle } from "./chaos-title";
import { CardApp } from "./card-app";
import { CardDecompress } from "./card-decompress";
import { CardEnemy } from "./card-enemy";
import { CardShift } from "./card-shift";
import { CardOs } from "./card-os";

export function CompetitiveAdvantage() {
  return (
    <div className="animate-up w-full lg:py-40 px-4">
      <div className="max-w-7xl mx-auto md:px-20">

        {/* ── Desktop layout ── */}
        <div className="hidden lg:block">
          <div className="text-center mb-16">
            <ChaosTitle />
          </div>

          <div className="space-y-8">
            {/* Row 1: teal app card (7fr) + blue decompress card (13fr) */}
            <div className="grid grid-cols-[7fr_13fr] gap-4">
              <CardApp />
              <CardDecompress />
            </div>

            {/* Row 2: enemy card + shift card */}
            <div className="grid grid-cols-2 gap-8">
              <CardEnemy />
              <CardShift />
            </div>

            {/* Row 3: full-width OS card */}
            <CardOs />
          </div>
        </div>

        {/* ── Mobile layout ── */}
        <div className="lg:hidden pt-20 space-y-8">
          <div className="bg-white rounded-3xl -mt-2 px-6">
            <ChaosTitle />
          </div>
          <CardApp mobile />
          <CardDecompress mobile />
          <CardEnemy mobile />
          <CardShift mobile />
          <CardOs mobile />
        </div>

      </div>
    </div>
  );
}
