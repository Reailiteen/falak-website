import { FooterMobile } from "./footer-mobile";
import { FooterDesktop } from "./footer-desktop";

export function FooterSection() {
  return (
    <div className="animate-up" id="falak_app">
      <div id="footer" style={{ backgroundImage: "url('/images/ui/footer-bg.png')", backgroundSize: "90%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundColor: "#080923" }}>
        <FooterMobile />
        <FooterDesktop />
      </div>
    </div>
  );
}
