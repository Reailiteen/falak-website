import type { Locale } from "@/lib/landing/types";
import { FaqHeader } from "./faq-header";
import { FaqList } from "./faq-list";
import { FaqViewMore } from "./faq-view-more";

export function FaqSection({ locale }: { locale: Locale }) {
  return (
    <div className="animate-up" id="FAQs">
      <div className="py-12 px-4 bg-white mt-8 lg:mt-16" id="FAQs">
        <div className="max-w-3xl mx-auto">
          <FaqHeader />
          <FaqList locale={locale} />
          <FaqViewMore />
        </div>
      </div>
    </div>
  );
}
