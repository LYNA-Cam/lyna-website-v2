import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const typography = cva(null, {
  variants: {
    variant: {
      h1: "text-[40px] leading-[120%] sm:text-[48px] lg:text-[60px]",
      h2: "text-[32px] leading-[120%] sm:text-[36px] lg:text-[44px]",
      h3: "text-[24px] leading-[130%] sm:text-[28px] lg:text-[32px]",
      h4: "text-[20px] leading-[130%] sm:text-[22px] lg:text-[24px]",
      h5: "text-[18px] leading-[130%] lg:text-[20px]",
      h6: "text-[16px] leading-[130%] lg:text-[18px]",
      "body-lg": "text-[24px] leading-[160%]",
      "body-base": "text-[16px] leading-[160%] lg:text-[18px]",
      "body-sm": "text-[14px] leading-[150%]",
      button: "text-[16px] leading-[120%] lg:text-[18px]",
      subtitle: "text-[14px] leading-[120%]",
      "h3-italic": "text-[32px] leading-[120%] italic",
    },
  },
  defaultVariants: {
    variant: "body-base",
  },
});

type TypographyOwnProps<E extends React.ElementType> = {
  as?: E;
  className?: string;
  children?: React.ReactNode;
} & VariantProps<typeof typography>;

type TypographyProps<E extends React.ElementType> = TypographyOwnProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof TypographyOwnProps<E>>;

const Typography = <E extends React.ElementType = "span">({
  as,
  className,
  variant,
  children,
  ...props
}: TypographyProps<E>) => {
  const Component = as || "span";

  return (
    <Component className={typography({ variant, className })} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
