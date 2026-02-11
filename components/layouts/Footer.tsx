import Typography from "../ui/Typography";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full max-w-[1720px] mx-auto border-t border-[#E9E2E7] py-12 gap-y-6 flex flex-col">
      <div className="relative w-full flex justify-between">
        <div className="relative flex-1 flex gap-x-6">
          <Typography
            as={Link}
            href={"/"}
            variant={"subtitle"}
            className="font-light font-lexend text-gray uppercase hover:underline"
          >
            Privacy Policy
          </Typography>
          <Typography
            as={Link}
            href={"/"}
            variant={"subtitle"}
            className="font-light font-lexend text-gray uppercase hover:underline"
          >
            Cookies
          </Typography>
          <Typography
            as={Link}
            href={"/"}
            variant={"subtitle"}
            className="font-light font-lexend text-gray uppercase hover:underline"
          >
            Terms of Use
          </Typography>
          <Typography
            as={Link}
            href={"/"}
            variant={"subtitle"}
            className="font-light font-lexend text-gray uppercase hover:underline"
          >
            Data Safety
          </Typography>
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
