"use client";

import { useCarousel } from "@/components/ui/Carousel";
import Typography from "@/components/ui/Typography";
import React, { useEffect, useState } from "react";

const MobileSteps = () => {
  const { api } = useCarousel();
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    onSelect();

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="flex items-center justify-center md:hidden">
      <Typography
        as="span"
        variant={"h4"}
        className="font-lora font-semibold text-black"
      >
        Step {current + 1}
      </Typography>
    </div>
  );
};

export default MobileSteps;
