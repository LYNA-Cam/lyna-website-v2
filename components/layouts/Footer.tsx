"use client";

import Typography from "../ui/Typography";
import Link from "next/link";
import OptimizedImage from "@/components/ui/OptimizedImage";

import { SITE_LINKS } from "@/lib/constants";

type LINK = {
  label: string;
  href: string;
};

const links: LINK[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookies", href: "/cookie-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Data Safety", href: "/data-safety" },
];

const Footer = () => {
  return (
    <footer className="relative w-full max-w-[1720px] mx-auto border-t border-[#E9E2E7] py-12 px-6 md:px-10 gap-y-6 flex flex-col">
      <div className="relative w-full flex flex-col gap-y-10 md:gap-y-4">
        {/* Main Footer Row: Pages (on left), Logo (center), Social (right) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-10 md:gap-y-0 min-h-[48px]">
          {/* Mandatory Pages: Position 1 on Desktop, Position 4 on Mobile */}
          <div className="flex-1 flex gap-x-6 max-md:flex-col gap-y-4 max-md:items-center items-center order-4 md:order-1">
            {links.map(({ label, href }, index) => (
              <Typography
                key={`footer-link-${index}`}
                as={Link}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variant={"subtitle"}
                className="font-light font-lexend text-gray uppercase hover:underline leading-none flex items-center"
              >
                {label}
              </Typography>
            ))}
          </div>

          {/* Logo: Position 2 on Desktop, Position 1 on Mobile */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex-1 flex justify-center items-center h-full order-1 md:order-2"
          >
            <OptimizedImage
              src={"/Logo_primary-big.png"}
              alt=""
              width={142}
              height={24}
              className="object-contain"
            />
          </Link>

          {/* Social Icons: Position 3 on Desktop, Position 2 on Mobile */}
          <div className="flex-1 flex items-center gap-x-6 justify-end max-md:justify-center h-full order-2 md:order-3">
            <Link
              href={SITE_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <OptimizedImage src={"/instagram.svg"} alt="" width={24} height={24} />
            </Link>
            <Link
              href={SITE_LINKS.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <OptimizedImage src={"/tiktok.svg"} alt="" width={22} height={24} />
            </Link>
          </div>
        </div>

        {/* Bottom Footer Row: Stores (on left), Copyright (on right) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-6 md:gap-y-0 border-t border-[#E9E2E7] md:border-none pt-10 md:pt-0">
          {/* Store Icons: Position 1 on Desktop, Position 3 on Mobile */}
          <div className="flex gap-x-4 items-center order-3 md:order-1">
            <Link
              href={SITE_LINKS.APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <OptimizedImage
                src="/app_store.svg"
                alt="Download on the App Store"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <Link
              href={SITE_LINKS.PLAY_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <OptimizedImage
                src="/google_play.svg"
                alt="Get it on Google Play"
                width={135}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <Typography
            as="p"
            variant={"body-sm"}
            className="font-lexend font-light text-[#8C8198] order-5 md:order-2"
          >
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            LYNA. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
