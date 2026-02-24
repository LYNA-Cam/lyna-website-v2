"use client";

import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect, startTransition } from "react";

type LINK = { label: string; href: string };

const links: LINK[] = [
  { label: "How it works", href: "" },
  { label: "Features", href: "" },
  { label: "Why LYNA", href: "" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => setMounted(true));
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const menuPortal = mounted && createPortal(
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          key="fullscreen-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 w-full h-full min-h-screen flex flex-col gradient-1 overflow-hidden"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ type: "spring", damping: 28, stiffness: 200 }}
        >
          {/* Decorative circles - bottom right */}
          <div className="absolute bottom-0 right-0 w-[70%] max-w-md aspect-square pointer-events-none" aria-hidden>
            <Image src={"/Logo_icon_white 2.png"} alt="" width={350} height={350}/>
          </div>

          {/* Header: logo + close */}
          <div className="relative z-10 flex items-center justify-between px-6 py-5">
            <Link href="/" className="relative h-10 w-[142px]" onClick={() => setMenuOpen(false)}>
              <Image src="/Logo_primary-big.png" alt="LYNA" fill className="object-contain object-left" />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              className="p-2 -m-2 rounded-md text-font hover:bg-font/10 text-2xl font-light leading-none"
              onClick={() => setMenuOpen(false)}
            >
              <Image src={"/x.svg"} alt="" width={32} height={32}/>
            </button>
          </div>

          {/* Centered nav + CTA */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-10 px-6 pb-12">
            <nav className="flex flex-col items-center gap-8">
              {links.map(({ label, href }, index) => (
                <Typography
                  as={Link}
                  href={href}
                  key={`mobile-link-${index}`}
                  variant={"h3"}
                  className="font-semibold font-lora hover:underline text-center text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Typography>
              ))}
            </nav>
            <Button as={Link} href="" className="rounded-full px-8">
              <Typography
                variant={"button"}
                className="text-white font-lexend group-active:text-font"
              >
                Early Access
              </Typography>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );

  return (
    <header className="fixed w-full inset-0 py-5 h-min z-10 bg-white">
      <div className="relative container max-w-[1720px] h-[64px] flex justify-between mx-auto px-4">
        <div className="relative h-full w-[200px]">
          <Image
            src={"/Logo_primary-big.png"}
            alt=""
            fill
            className="size-full object-contain"
          />
        </div>
        <nav className="items-center justify-center gap-x-8 hidden md:flex">
          {links.map(({ label, href }, index) => (
            <Typography
              as={Link}
              href={href}
              key={`nav-link-${index}`}
              variant={"h5"}
              className="font-semibold font-lora hover:underline"
            >
              {label}
            </Typography>
          ))}
        </nav>
        <Button as={Link} href={""} className="hidden md:flex">
          <Typography
            variant={"button"}
            className="text-white font-lexend group-active:text-font"
          >
            Early Access
          </Typography>
        </Button>
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className="md:hidden p-2 -m-2 rounded-md hover:bg-black/5"
          onClick={() => setMenuOpen(true)}
        >
          <Image src={"/menu.svg"} alt="" width={24} height={24} />
        </button>
      </div>
      {menuPortal}
    </header>
  );
};

export default Header;
