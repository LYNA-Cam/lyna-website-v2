import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative aspect-video w-full flex flex-col gap-y-6">
      <div
        style={{
          backgroundImage: "url(/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 w-full h-full -rotate-y-180 -z-1"
      />
      <div className="mt-20 ml-20 pr-8 gap-y-6 flex flex-col h-max max-w-2xl">
        <Typography as="h1" variant={"h1"} className="text-white font-lora">
          Turn Your Body Into a Superpower
        </Typography>
        <Typography
          as="p"
          variant={"body-lg"}
          className="text-white font-light font-lexend"
        >
          LYNA forecasts your energy cycles and automates your fueling to unlock
          peak performance
        </Typography>
      </div>
      <div className="gap-y-4 flex flex-col items-center justify-center mt-auto mb-4">
        <Button as={Link} href={"/"}>
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
    </section>
  );
};

export default HeroSection;
