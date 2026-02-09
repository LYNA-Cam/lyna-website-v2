import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import Image from "next/image";
import Link from "next/link";

type LINK = { label: string; href: string };

const links: LINK[] = [
  { label: "Features", href: "" },
  { label: "How it works", href: "" },
  { label: "Why LYNA", href: "" },
];

const Header = () => {
  return (
    <header className="fixed w-full inset-0 py-5 h-min z-10 bg-white">
      <div className="relative container max-w-[1720px] h-[64px] flex justify-between mx-auto">
        <div className="relative h-full w-[200px]">
          <Image
            src={"/nav-logo.png"}
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
      </div>
    </header>
  );
};

export default Header;
