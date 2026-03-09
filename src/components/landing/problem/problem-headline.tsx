"use client";

import { useTranslations } from "next-intl";

function WordSpan({ word, className }: { word: string; className: string }) {
  return (
    <span className={className} style={{ lineHeight: 1 }}>
      {word.split("").map((letter, i) => (
        <span key={i} className="inline-block" style={{ lineHeight: 1, verticalAlign: "baseline" }}>
          {letter}
        </span>
      ))}
    </span>
  );
}

export function ProblemHeadline() {
  const t = useTranslations("problem");
  return (
    <h1
      className="text-[12vw] md:text-[100px] lg:text-[200px] xl:text-[255px] mt-40 text-[#333333] leading-none text-center z-10 select-none flex flex-nowrap justify-center whitespace-nowrap"
      style={{ lineHeight: 1 }}
    >
      <WordSpan word={t("word1")} className="inline-block" />
      <WordSpan word={t("word2")} className="inline-block ms-3 lg:ms-10" />
    </h1>
  );
}
