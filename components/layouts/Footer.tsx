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
      <div className="relative w-full flex justify-between max-md:flex-col max-md:items-center">
        <div className="relative flex-1 flex max-md:flex-col gap-x-6 gap-y-4 text-center  max-md:order-2 max-md:mt-8">
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
        <div className="flex-1 flex justify-center items-center max-md:order-first">
          <Image src={"/Logo_primary-big.png"} alt="" width={142} height={24} />
        </div>
        <div className="flex-1 flex items-center gap-x-6 justify-end max-md:order-1 max-md:mt-6">
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
        className="font-lexend font-light text-[#8C8198] ml-auto max-md:mx-auto"
      >
        © {new Date().getFullYear()} LYNA. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
