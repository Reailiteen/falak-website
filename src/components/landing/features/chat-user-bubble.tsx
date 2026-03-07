type Props = { message: string };

export function ChatUserBubble({ message }: Props) {
  return (
    <div
      className="relative text-white text-sm leading-[150%] rounded-[16px] px-4 py-3 w-full max-w-[260px] shadow-lg self-end mb-4"
      style={{
        background: "linear-gradient(321.93deg, rgb(85, 123, 244) 21.96%, rgb(56, 78, 151) 81.21%)",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 9px",
      }}
    >
      {message}
      {/* Right tail */}
      <span aria-hidden="true" className="pointer-events-none absolute -right-3 bottom-2 flex h-6 w-4">
        <svg width="15" height="24" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scaleX(-1)" }}>
          <path d="M1.36168 11.1627C6.74752 9.05674 9.97354 5.28535 9.97354 0V15.4706C5.73611 15.2641 2.66586 14.5094 0.762812 13.2066C0.578088 13.0801 0.437211 12.8994 0.359587 12.6894C0.152585 12.1295 0.438679 11.5077 0.998626 11.3007L1.36168 11.1627Z" fill="#557BF4" />
        </svg>
      </span>
    </div>
  );
}
