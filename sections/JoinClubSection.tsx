import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import Link from "next/link";
import React from "react";
import { SITE_LINKS } from "@/lib/constants";

const JoinClubSection = () => {
  return (
    <section className="relative py-20">
      <div className="flex flex-col items-center justify-center px-6 md:px-10 gap-4 max-w-[1720px] mx-auto">
        <Typography
          as="h2"
          variant={"h2"}
          className="md:font-medium font-semibold font-lora"
        >
          Join the club
        </Typography>
        <Typography
          as="p"
          variant={"body-lg"}
          className="font-lexend font-light text-center"
        >
          We are building the future of female performance{" "}
          {/* <span className="hidden md:block">
            Help us shape the future of LYNA.
          </span> */}
        </Typography>
        <Button as={Link} href={SITE_LINKS.TALLY_FORM} target="_blank" rel="noopener noreferrer">
          <Typography
            as="span"
            variant={"button"}
            className="text-white font-lexend"
          >
            Apply now
          </Typography>
        </Button>
      </div>
    </section>
  );
};

export default JoinClubSection;
