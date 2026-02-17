import React from "react";
import Typography from "./Typography";
import { cn } from "@/lib/utils";

interface TextBoldProps {
  children: React.ReactNode;
  className?: string;
}

const TextBold: React.FC<TextBoldProps> = ({ children, className }) => {
  return (
    <Typography
      as={"span"}
      variant={"h6"}
      className={cn("font-lora font-semibold", className)}
    >
      {children}
    </Typography>
  );
};

export default TextBold;
