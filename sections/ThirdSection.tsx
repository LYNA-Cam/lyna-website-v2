import Typography from "@/components/ui/Typography";
import OptimizedImage from "@/components/ui/OptimizedImage";
import React from "react";

const ThirdSection = () => {
  return (
    <section className="relative gradient-1 py-12 md:py-34 flex items-center justify-center px-6 md:px-10">
      <Typography
        variant={"h1"}
        className="max-w-3xl text-center font-light font-lexend max-md:text-2xl"
      >
        Own{" "}
        <span className="text-secondary">
          your
          <br />
          superpower
        </span>{" "}
        for every way{" "}
        <span className="flex items-center justify-center gap-x-2">
          you <OptimizedImage src={"/logo.svg"} alt="" width={112} height={112} className="max-md:size-[44px]"/> move
        </span>
      </Typography>
    </section>
  );
};

export default ThirdSection;
