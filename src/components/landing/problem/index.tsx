"use client";

import { useRef } from "react";
import { ProblemText } from "./problem-text";
import { ProblemNotes } from "./problem-notes";
import { ProblemMascot } from "./problem-mascot";
import { ProblemHeadline } from "./problem-headline";
import { ProblemCanvas } from "./problem-canvas";

export function ProblemStatement() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div
        ref={containerRef}
        className="relative w-full mx-auto min-h-[500px] md:min-h-[700px] max-w-[1600px] flex flex-col items-center justify-between pb-10 md:pb-20 md:py-40 overflow-hidden bg-white"
      >
        <ProblemText />
        <ProblemNotes />
        <ProblemMascot />
        <ProblemHeadline />
        <ProblemCanvas containerRef={containerRef} />
      </div>
    </div>
  );
}
