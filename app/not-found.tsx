import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import { SITE_LINKS } from "@/lib/constants";
import { Metadata } from "next";
import OptimizedImage from "@/components/ui/OptimizedImage";
import Link from "next/link";
import React from "react";

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

export const metadata: Metadata = {
  title:"Not found"
}


const NotFoundPage = () => {
  return (
    <div className="min-h-screen py-12 px-6 md:px-10 w-full max-w-[1720px] mx-auto flex flex-col">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12 flex-1 items-center">
        <div className="flex flex-col h-full">
          <Link href="/">
            <OptimizedImage src={"/Logo_primary-big.png"} alt="LYNA" width={142} height={24} />
          </Link>
          <div className="my-auto py-12 md:py-0 text-center md:text-left">
            <span className="text-font text-8xl md:text-[128px] font-lexend font-extralight leading-none">
              404
            </span>
            <div className="mt-8 md:mt-12">
              <Typography
                as="h3"
                variant={"h3"}
                className="font-medium font-lora text-font"
              >
                This page didn’t load correctly
              </Typography>
              <Typography
                as="p"
                variant={"body-lg"}
                className="font-light font-lexend text-gray mt-4 md:mt-6"
              >
                Try refreshing the page or return to the main experience.
              </Typography>
            </div>
            <Button as={Link} href="/" className="w-full md:w-max mt-10 md:mt-12">
              <Typography
                as="span"
                variant={"button"}
                className="text-white font-lexend uppercase tracking-widest"
              >
                Back to track
              </Typography>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden">
          <OptimizedImage src={"/not-found.jpg"} alt="" fill className="object-cover" />
        </div>
      </div>

      <footer className="relative mt-12 py-8 flex flex-col md:flex-row gap-y-6 w-full justify-between items-center border-t border-[#E9E2E7]">
        <Typography
          as="span"
          variant={"body-sm"}
          className="font-lexend font-light text-gray order-3 md:order-1"
        >
          © {new Date().getFullYear()} LYNA. All rights reserved.
        </Typography>
        
        <div className="relative flex flex-wrap justify-center gap-x-6 gap-y-2 order-1 md:order-2">
          {links.map(({ label, href }, index) => (
            <Typography
              key={`footer-link-${index}`}
              as={Link}
              href={href}
              variant={"subtitle"}
              className="font-light font-lexend text-gray uppercase hover:underline text-xs"
            >
              {label}
            </Typography>
          ))}
        </div>

        <div className="flex items-center gap-x-6 order-2 md:order-3">
          <Link href={SITE_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <OptimizedImage src={"/instagram.svg"} alt="" width={20} height={20} />
          </Link>
          <Link href={SITE_LINKS.TWITTER} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <OptimizedImage src={"/tiktok.svg"} alt="" width={20} height={20} />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default NotFoundPage;
