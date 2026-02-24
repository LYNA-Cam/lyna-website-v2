import UserQuot from "@/components/layouts/user-feedback/UserQuot";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import Typography from "@/components/ui/Typography";
import Image from "next/image";

const UserFeedbackSection = () => {
  return (
    <section className="relative gradient-1 py-25 flex flex-col gap-y-4 items-center justify-center">
      <div className="flex flex-col items-center gap-y-4">
        <Typography
          as="span"
          variant={"subtitle"}
          className="font-lexend font-light uppercase text-primary"
        >
          Early User Feedback
        </Typography>
        <Image src={"/quotes.png"} alt="" width={40} height={40} className="max-md:size-[20px]"/>
      </div>
      <Carousel className="relative w-full max-w-7xl md:flex items-center hidden">
        <CarouselPrevious className="static shrink-0"/>
        <CarouselContent>
          <CarouselItem>
            <UserQuot
              quot="I want to optimize my performance and long-term health
                  by understanding how my menstrual cycle impacts my training,
                  energy and recovery, so I can stop guessing and start reaching
                  my full potential"
              avatar="/avatar-1.png"
              name="Anna • Athlete"
              job="Founding Member"
            />
          </CarouselItem>
          <CarouselItem>
            <UserQuot
              quot="I always find it harder to train the week before my period, but I’ve never had a way to actually track patterns properly - especially as someone who takes sport seriously."
              avatar="/avatar-2.jpg"
              name="Chloe • Basketball"
              job="Founding Member"
            />
          </CarouselItem>
          <CarouselItem>
            <UserQuot
              quot="I’ve struggled with my hormones for most of my life because of an eating disorder. I want to be part of something that helps women understand their bodies better - and gives us the right tools to improve performance without damaging our health long-term."
              avatar="/avatar-3.jpg"
              name="Hannah • Runner"
              job="Founding Member"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="static shrink-0"/>
      </Carousel>
      <Carousel className="relative w-full max-w-7xl flex gap-x-2 justify-between px-4 items-center md:hidden">
        <CarouselPrevious className="static shrink-0"/>
        <CarouselContent>
          <CarouselItem>
            <UserQuot
              quot="I want to optimize my performance and long-term health
                  by understanding how my menstrual cycle impacts my training,
                  energy and recovery"
              avatar="/avatar-1.png"
              name="Anna • Athlete"
              job="Founding Member"
            />
          </CarouselItem>
          <CarouselItem>
            <UserQuot
              quot="I always find it harder to train the week before my period, but I’ve never had a way to actually track patterns properly."
              avatar="/avatar-2.jpg"
              name="Chloe • Basketball"
              job="Founding Member"
            />
          </CarouselItem>
          <CarouselItem>
            <UserQuot
              quot="I’ve struggled with my hormones for most of my life because of an eating disorder. I want to be part of something that helps women understand their bodies better."
              avatar="/avatar-3.jpg"
              name="Hannah • Runner"
              job="Founding Member"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="static shrink-0"/>
      </Carousel>
    </section>
  );
};

export default UserFeedbackSection;
