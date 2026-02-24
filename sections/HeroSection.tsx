import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import Link from "next/link";
import { SITE_LINKS } from "@/lib/constants";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col gap-y-6">
      <div
        style={{
          backgroundImage: "url(/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 w-full h-full -rotate-y-180 -z-1 bg-position-[12.5%] md:bg-center"
      />
      <div className="ml-4 mt-8 md:mt-20 md:ml-20 pr-8 gap-y-6 flex flex-col h-max max-w-2xl">
        <Typography
          as="h1"
          variant={"h1"}
          className="text-white font-lora hidden md:block"
        >
          Turn Your Body Into a Superpower
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
