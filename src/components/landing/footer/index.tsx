import { FooterMobile } from "./footer-mobile";
import { FooterDesktop } from "./footer-desktop";

export function FooterSection() {
  return (
    <div className="animate-up" id="memorae_app">
      <div id="footer" className="bg-white">
        <FooterMobile />
        <FooterDesktop />
      </div>
    </div>
  );
}
