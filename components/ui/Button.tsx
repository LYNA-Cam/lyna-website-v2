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
        "bg-primary shadow-lg",
        "hover:bg-secondary hover:scale-[1.02] hover:shadow-xl",
        "active:scale-[0.98] active:shadow-inner",
        "group transition-all duration-300 ease-out",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
