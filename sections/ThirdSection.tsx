import Typography from "@/components/ui/Typography";
import Image from "next/image";
import React from "react";

const ThirdSection = () => {
  return (
    <section className="relative gradient-1 py-34 flex items-center justify-center">
      <Typography
        variant={"h1"}
        className="max-w-3xl text-center font-light font-lexend"
      >
        Own{" "}
        <span className="text-secondary">
          your
          <br />
          superpower
        </span>{" "}
        for every way{" "}
        <span className="flex items-center justify-center gap-x-4">
          you <Image src={"/logo.svg"} alt="" width={112} height={112} /> move
        </span>
      </Typography>
    </section>
  );
};

export default ThirdSection;
