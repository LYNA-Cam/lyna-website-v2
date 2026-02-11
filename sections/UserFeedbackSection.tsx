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
    <section className="relative gradient-1 py-25 flex items-center justify-center">
      <Carousel className="relative flex justify-between gap-x-5 sm:gap-x-10 md:gap-x-20 items-center max-w-7xl">
        <CarouselPrevious className="static bottom-0 top-0 translate-0 shrink-0" />
        <div className="flex flex-col items-center justify-center gap-y-8">
          <Typography
            as="span"
            variant={"subtitle"}
            className="font-lexend font-light uppercase text-primary"
          >
            Early User Feedback
          </Typography>
          <Image src={"/quotes.png"} alt="" width={40} height={40} />
          <CarouselContent>
            <CarouselItem>
              <UserQuot
                quot="I want to optimize my performance and long-term health
                  by understanding how my menstrual cycle impacts my training,
                  energy and recovery, so I can stop guessing and start reaching
                  my full potential"
                avatar="/avatar-1.png"
                name="Anna"
                job="Founding Member"
              />
            </CarouselItem>
          </CarouselContent>
        </div>
        <CarouselNext className="static bottom-0 top-0 translate-0 shrink-0" />
      </Carousel>
    </section>
  );
};

export default UserFeedbackSection;
