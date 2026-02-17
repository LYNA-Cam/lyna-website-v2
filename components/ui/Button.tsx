import { cn } from "@/lib/utils";
import React from "react";

type ButtonOwnProps<E extends React.ElementType> = {
  as?: E;
  className?: string;
  children?: React.ReactNode;
};

type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof ButtonOwnProps<E>>;

const Button = <E extends React.ElementType = "button">({
  as,
  className,
  children,
  ...props
}: ButtonProps<E>) => {
  const Component = as || "button";

  return (
    <Component
      className={cn(
        "h-[64px] py-3 px-8 rounded-[100px]",
        "inline-flex items-center justify-center",
        "bg-primary shadow-[0_4px_6px_-10px_rgba(0,0,0,0.1)]",
        "hover:bg-secondary active:bg-accent group transition-colors duration-300",
        className
      )}
      style={{
        boxShadow:
          "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
