import Description from "@/components/layouts/second-section/Description";
import MobileSteps from "@/components/layouts/second-section/MobileSteps";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Dots,
} from "@/components/ui/Carousel";
import Typography from "@/components/ui/Typography";
import Image from "next/image";

const images = [
  "/hero-iphone-1.svg",
  "/hero-iphone-2.svg",
  "/hero-iphone-3.svg",
  "/hero-iphone-4.svg",
];

const steps = [
  {
    title: "Log Your Activity:",
    caption:
      "tell LYNA your output - from high-intensity training to active sports",
  },
  {
    title: "Track Nutrition:",
    caption:
      "scan your meals to instantly calculate energy and essential nutrients.",
  },
  {
    title: "Forecast Your Peak:",
    caption:
      "know your body’s limits by aligning your training with your natural cycle.",
  },
  {
    title: "Adapt in Real-Time:",
    caption:
      "energy budget updates instantly so you always know if you're fueled for your next move.",
  },
];


const SecondSection = () => {
  return (
    <section className="relative py-12 md:py-20 w-full">
      <div className="relative w-full max-w-[1400px] mx-auto flex flex-col gap-y-2 md:gap-y-20 items-center justify-center">
        <div className="relative flex flex-col gap-y-2 md:gap-y-4 text-center">
          <Typography
            variant={"subtitle"}
            className="font-light text-primary font-lexend uppercase"
          >
            How LYNA Works
          </Typography>
          <Typography
            as="h2"
            variant={"h2"}
            className="text-font font-semibold md:font-medium font-lora"
          >
            Your body, optimized
          </Typography>
        </div>
        <Carousel className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
          <MobileSteps />
          <div className="relative">
            <CarouselPrevious />
            <CarouselContent>
              {images.map((url, index) => (
                <CarouselItem
                  key={`image-${index}`}
                  className="basis-full justify-center flex"
                >
                  <Image src={url} alt="" width={500} height={500} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </div>
          <div className="md:hidden"><Dots /></div>
          <Description steps={steps} />
          <div className="hidden md:block"><Dots /></div>
        </Carousel>
      </div>
    </section>
  );
};

export default SecondSection;
