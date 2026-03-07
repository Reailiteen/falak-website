const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms and Conditions", href: "/terms/" },
  { label: "Cookie Settings", href: "/cookies-settings/" },
  { label: "Legal Notice", href: "/legal-notice/" },
  { label: "Communication Channels", href: "/communications/" },
  { label: "Refunds and Returns Policy", href: "/refunds-and-return-policy/" },
];

interface FooterLinksProps {
  layout: "vertical" | "horizontal";
}

export function FooterLinks({ layout }: FooterLinksProps) {
  if (layout === "vertical") {
    return (
      <div className="space-y-4 mb-8 relative">
        {FOOTER_LINKS.map(({ label, href }) => (
          <div key={label}>
            <a
              href={href}
              className="text-white text-sm hover:text-purple-300 transition-colors duration-200 underline underline-offset-4"
            >
              {label}
            </a>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex space-x-8 justify-end">
      {FOOTER_LINKS.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          className="text-white text-sm hover:text-purple-300 transition-colors duration-200 underline underline-offset-4"
        >
          {label}
        </a>
      ))}
    </div>
  );
}
