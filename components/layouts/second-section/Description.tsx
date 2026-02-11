"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useCarousel } from "@/components/ui/Carousel";
import Typography from "@/components/ui/Typography";

type Steps = {
  title: string;
  caption: string;
};

interface DescriptionProps {
  steps: Steps[];
}

const Description: React.FC<DescriptionProps> = ({ steps }) => {
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
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        key={`step-${current}`}
        className="relative flex flex-col px-4 gap-y-4 justify-center max-w-md mx-auto"
      >
        <Typography as="h3" variant={"h3"} className="font-medium font-lora">
          {steps[current]?.title || null}
        </Typography>
        <Typography
          as="p"
          variant={"body-lg"}
          className="font-light font-lexend"
        >
          {steps[current]?.caption || null}
        </Typography>
      </motion.div>
    </AnimatePresence>
  );
};

export default Description;
