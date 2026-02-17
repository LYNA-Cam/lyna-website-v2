import Typography from "../ui/Typography";
import Link from "next/link";
import Image from "next/image";

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
      <div className="relative w-full flex justify-between">
        <div className="relative flex-1 flex gap-x-6">
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
        <div className="flex-1 flex justify-center items-center">
          <Image src={"/nav-logo.png"} alt="" width={142} height={24} />
        </div>
        <div className="flex-1 flex items-center gap-x-6 justify-end">
          <Link href={"/"}>
            <Image src={"/instagram.png"} alt="" width={20} height={20} />
          </Link>
          <Link href={"/"}>
            <Image src={"/tiktok.png"} alt="" width={20} height={20} />
          </Link>
        </div>
      </div>
      <Typography
        as="p"
        variant={"body-sm"}
        className="font-lexend font-light text-[#8C8198] ml-auto"
      >
        © {new Date().getFullYear()} LYNA. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
