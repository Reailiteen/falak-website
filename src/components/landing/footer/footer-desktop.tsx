import { MEDIA } from "@/lib/landing/content";
import { FooterTryButton } from "./footer-try-button";
import { FooterSocialIcons } from "./footer-social-icons";
import { FooterStoreBadges } from "./footer-store-badges";
import { FooterLinks } from "./footer-links";

export function FooterDesktop() {
  return (
    <div className="px-3 hidden xl:block pt-14">
      <div className="flex justify-center mb-20">
        <FooterTryButton className="w-[20%] hover:scale-105 transition-all duration-300" />
      </div>

      <div
        className="bg-cover bg-center bg-no-repeat h-[50vh] rounded-3xl relative overflow-hidden"
        style={{ backgroundImage: `url("${MEDIA.footerBg}")` }}
      >
        <div className="absolute inset-0 p-12">
          <div className="flex justify-between items-start">
            {/* Logo — top left */}
            <div>
              <img
                alt="memorae-logo"
                loading="lazy"
                width={140}
                height={40}
                src={MEDIA.logoWhite}
                style={{ color: "transparent" }}
              />
            </div>

            {/* Social icons + store badges — top right */}
            <div className="flex flex-col items-end gap-4 mt-20">
              <FooterSocialIcons containerClass="flex space-x-4" />
              <FooterStoreBadges compact={true} containerClass="flex gap-3" />
            </div>
          </div>

          {/* Headline + subtitle — center left */}
          <div className="absolute left-12 top-1/2 transform -translate-y-1/2">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-semibold mb-4 leading-tight text-white">
                You just live.<br />Memorae remembers for you.
              </h1>
              <p className="text-lg text-gray-300 max-w-md leading-relaxed">
                Your to-do list asked us for help. Here we are.
              </p>
            </div>
          </div>

          {/* Links — bottom right */}
          <div className="absolute right-12 top-10/12 transform -translate-y-1/2">
            <div className="text-right">
              <FooterLinks layout="horizontal" />
            </div>
          </div>

          {/* Copyright — bottom left */}
          <div className="absolute bottom-12 left-12">
            <div className="text-sm text-gray-400">© 2026 Memorae Inc. All rights reserved.</div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full h-6" />
    </div>
  );
}
