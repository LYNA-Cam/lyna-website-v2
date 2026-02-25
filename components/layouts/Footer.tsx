"use client";

import Typography from "../ui/Typography";
import Link from "next/link";
import Image from "next/image";

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
    <footer className="relative w-full max-w-[1720px] mx-auto border-t border-[#E9E2E7] py-12 gap-y-6 flex flex-col">
      <div className="relative w-full flex flex-col gap-y-4">
        <div className="flex justify-between items-center max-md:flex-col max-md:gap-y-10">
          <div className="flex-1 flex gap-x-6 max-md:flex-col gap-y-4 max-md:items-center">
            {links.map(({ label, href }, index) => (
              <Typography
                key={`footer-link-${index}`}
                as={Link}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variant={"subtitle"}
                className="font-light font-lexend text-gray uppercase hover:underline"
              >
                {label}
              </Typography>
            ))}
          </div>
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex-1 flex justify-center items-center"
          >
            <Image
              src={"/Logo_primary-big.png"}
              alt=""
              width={142}
              height={24}
              className="object-contain"
            />
          </Link>
          <div className="flex-1 flex items-center gap-x-6 justify-end max-md:justify-center">
            <Link
              href={SITE_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={"/instagram.svg"} alt="" width={24} height={24} />
            </Link>
            <Link
              href={SITE_LINKS.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={"/tiktok.svg"} alt="" width={22} height={24} />
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center max-md:flex-col max-md:gap-y-6">
          <div className="flex gap-x-4 items-center">
            <Link
              href={SITE_LINKS.APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
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
              <Image
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
            className="font-lexend font-light text-[#8C8198]"
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
