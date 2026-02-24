import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import { SITE_LINKS } from "@/lib/constants";
import { Metadata } from "next";
import Image from "next/image";
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
    <div className="min-h-screen py-[60px] px-[100px] w-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col">
          <Image src={"/Logo_primary-big.png"} alt="" width={240} height={40} />
          <div className="my-auto">
            <span className="text-font text-[128px] font-lexend font-extralight leading-[120%]">
              404
            </span>
            <div className="mt-12">
              <Typography
                as="h3"
                variant={"h3"}
                className="font-medium font-lora text-black"
              >
                This page didn’t load correctly
              </Typography>
              <Typography
                as="p"
                variant={"body-lg"}
                className="font-light font-lexend text-black mt-6"
              >
                Try refreshing the page or return to the main experience.
              </Typography>
            </div>
            <Button className="w-max mt-12">
              <Typography
                as="span"
                variant={"button"}
                className="text-white font-lexend"
              >
                Join LYNA now
              </Typography>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square">
          <Image src={"/not-found.jpg"} alt="" fill className="object-cover" />
        </div>
      </div>
      <footer className="relative mt-[60px] py-4 flex gap-y-4 flex-wrap w-full justify-between before:content-['_'] before:absolute before:inset-0 before:h-px before:bg-linear-to-r before:from-[#c2acfd] before:to-[#f2effa]">
        <Typography
          as="span"
          variant={"body-sm"}
          className="font-lexend font-light text-gray"
        >
          © {new Date().getFullYear()} LYNA. All rights reserved.
        </Typography>
        <div className="relative flex flex-wrap gap-x-6 gap-y-2">
          {links.map(({ label, href }, index) => (
            <Typography
              key={`footer-link-${index}`}
              as={Link}
              href={href}
              variant={"subtitle"}
              className="font-light font-lexend text-gray uppercase hover:underline"
            >
              {label}
            </Typography>
          ))}
        </div>
        <div className="flex items-center gap-x-6 justify-end">
          <Link href={SITE_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer">
            <Image src={"/instagram.svg"} alt=""  width={20} height={20} />
          </Link>
          <Link href={SITE_LINKS.TWITTER} target="_blank" rel="noopener noreferrer">
            <Image src={"/tiktok.svg"} alt="" width={20} height={20} />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default NotFoundPage;
