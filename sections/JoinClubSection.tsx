import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import React from "react";

const JoinClubSection = () => {
  return (
    <section className="relative py-20">
      <div className="flex flex-col items-center justify-center px-4 gap-4 max-w-2xl mx-auto">
        <Typography as="h2" variant={"h2"} className="font-medium font-lora">
          Join the club
        </Typography>
        <Typography
          as="p"
          variant={"body-lg"}
          className="font-lexend font-light text-center"
        >
          We are building the future of female performance Help us shape the
          future of LYNA.
        </Typography>
        <Button><Typography as="span" variant={"button"} className="text-white font-lexend">Apply now</Typography></Button>
      </div>
    </section>
  );
};

export default JoinClubSection;
