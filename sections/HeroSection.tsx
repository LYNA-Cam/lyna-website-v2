import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import Link from "next/link";
import { SITE_LINKS } from "@/lib/constants";
import OptimizedImage from "@/components/ui/OptimizedImage";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col gap-y-6">
      <OptimizedImage
        src="/hero-bg.jpg"
        alt=""
        fill
        className="object-cover -rotate-y-180 -z-1 brightness-95"
        priority
        shimmerWidth={1920}
        shimmerHeight={1080}
      />
      <div className="relative container mx-auto px-6 md:px-10 mt-24 md:mt-32 gap-y-6 flex flex-col h-max max-w-[1720px]">
        <Typography
          as="h1"
          variant={"h1"}
          className="text-white font-lora hidden md:block"
        >
          Turn Your Body Into a
          <br />
          Superpower
        </Typography>
        <Typography
          as="p"
          variant={"body-lg"}
          className="text-white font-light font-lexend hidden md:block"
        >
          LYNA forecasts your energy cycles,
          <br />
          automates fueling to unlock
          <br />
          peak performance
        </Typography>
        <Typography
          as="h1"
          variant={"h2"}
          className="text-white font-lora block md:hidden font-semibold"
        >
          Turn Your Body
          <br />
          Into a Superpower
        </Typography>
      </div>
      <div className="gap-y-4 flex-col items-center justify-center mt-auto mb-4 hidden md:flex">
        <Button as={Link} href={SITE_LINKS.TALLY_FORM} target="_blank" rel="noopener noreferrer">
          <Typography className="font-lexend text-white group-active:text-font">
            Join the Founding Athletes
          </Typography>
        </Button>
        <Typography
          as="p"
          variant={"body-base"}
          className="font-lexend font-extralight text-white text-center"
        >
          Secure early access • Limited spots • Help shape the product
        </Typography>
      </div>
      <div className="flex md:hidden mt-auto mb-[60px] flex-col gap-y-4 items-center justify-center">
        <Button as={Link} href={SITE_LINKS.TALLY_FORM} target="_blank" rel="noopener noreferrer" className="w-max">
          <Typography className="font-lexend text-white group-active:text-font">
            Early Access
          </Typography>
        </Button>
        <Typography
          as="p"
          variant={"body-base"}
          className="font-lexend font-light text-white"
        >
          Secure early access • Limited spots
        </Typography>
      </div>
    </section>
  );
};

export default HeroSection;
