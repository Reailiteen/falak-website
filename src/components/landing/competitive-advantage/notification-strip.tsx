"use client";

import { useTranslations } from "next-intl";

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M16 3v4M8 3v4" />
    </svg>
  );
}

function ListIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="6" width="18" height="16" rx="2" />
      <path d="M9 10h6M9 14h6" />
    </svg>
  );
}

function MeetingCard({ compact, t }: { compact?: boolean; t: (k: string) => string }) {
  return (
    <div
      className={`flex flex-col flex-shrink-0 ${compact ? "h-32" : ""}`}
      style={{
        background: "rgba(255, 255, 255, 0.95)",
        borderRadius: "8px",
        boxShadow: "rgba(0, 0, 0, 0.04) 0px 2px 8px",
        minWidth: "200px",
        maxWidth: "300px",
      }}
    >
      <div className="flex items-center bg-[#FFD6E5]/70 px-3 py-1 rounded-sm w-max mt-3 ms-3 mb-2">
        <CalendarIcon className="w-4 h-4 me-1 text-[#F0589E]" />
        <span className="uppercase text-[10px] font-bold text-[#F0589E] tracking-wider" style={{ letterSpacing: "0.08em" }}>
          {t("labelMeeting")}
        </span>
      </div>
      <div className={`text-[#0c254c] leading-tight ${compact ? "text-[1rem]" : "text-[1.3rem]"} mb-2 px-3`}>
        {t("meetingTitle").split("\n").map((line, i) => (
          <span key={i}>{line}{i === 0 && <br />}</span>
        ))}
      </div>
      <div className={`flex items-center justify-around text-[#8498ad] ${compact ? "text-sm" : "text-base"} mt-1 gap-7 font-normal pb-4 px-3`}>
        <span>{t("meetingDate")}</span>
        <span>{t("meetingTime")}</span>
      </div>
    </div>
  );
}

function ListsCard({ compact, t }: { compact?: boolean; t: (k: string) => string }) {
  return (
    <div
      className={`flex flex-col flex-shrink-0 ${compact ? "h-32" : ""}`}
      style={{
        background: "rgba(255, 255, 255, 0.98)",
        borderRadius: "8px",
        boxShadow: "rgba(0, 0, 0, 0.04) 0px 2px 8px",
        minWidth: "200px",
        maxWidth: "300px",
      }}
    >
      <div className="flex items-center bg-[#ECF1FE] px-3 py-[2px] rounded-sm w-max mt-4 ms-4 gap-1">
        <ListIcon className="w-4 h-4 text-[#557BF4]" />
        <span className="text-[10px] font-bold text-[#557BF4] tracking-wider">{t("labelLists")}</span>
      </div>
      <div className={`text-[#1A3556] leading-tight ${compact ? "text-base" : "text-lg"} px-4 mt-2`}>
        {t("listHeader")}
      </div>
      <ul className="mt-1 flex flex-col gap-1 text-sm ms-8 mb-2 list-disc">
        <li className="text-[#989BAB]">{t("listItem1")}</li>
        {!compact && <li className="text-[#989BAB] text-sm">{t("listItem2")}</li>}
        <li className="text-[#989BAB] text-sm">{t("listItem3")}</li>
      </ul>
    </div>
  );
}

function ReminderCard({ compact, t }: { compact?: boolean; t: (k: string) => string }) {
  return (
    <div
      className={`flex flex-col flex-shrink-0 px-2 ${compact ? "h-32" : ""}`}
      style={{
        background: "rgba(255, 255, 255, 0.96)",
        borderRadius: "8px",
        boxShadow: "rgba(0, 0, 0, 0.07) 0px 2px 8px",
        minWidth: "200px",
        maxWidth: "300px",
      }}
    >
      <div className="flex items-center bg-[#23CF67]/10 px-2 py-[2px] rounded-sm w-max mt-3 ms-1 gap-1">
        <CalendarIcon className="w-4 h-4 text-[#35C38C]" />
        <span className="text-[10px] font-bold text-[#23CF67] tracking-wider">{t("labelReminder")}</span>
      </div>
      <div className={`text-[#0c254c] leading-tight ${compact ? "text-[1rem]" : "text-[1.15rem]"} px-2 mt-2`}>
        {t("reminderTitle").split("\n").map((line, i) => (
          <span key={i}>{line}{i === 0 && <br />}</span>
        ))}
      </div>
      <div className="flex items-center px-2 gap-4 text-[#8498ad] text-sm font-normal pb-4 pt-2">
        <span>{t("reminderDate")}</span>
        <span>{t("reminderTime")}</span>
      </div>
    </div>
  );
}

export function NotificationStrip({ compact }: { compact?: boolean }) {
  const t = useTranslations("notificationStrip");
  return (
    <div
      className={`overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${compact ? "mt-6" : "mt-8 p-8"}`}
    >
      <div className="flex gap-4 pb-4" style={{ width: "max-content" }}>
        <MeetingCard compact={compact} t={t} />
        <ListsCard compact={compact} t={t} />
        <ReminderCard compact={compact} t={t} />
        {!compact && (
          <>
            <MeetingCard t={t} />
            <ListsCard t={t} />
          </>
        )}
      </div>
    </div>
  );
}
