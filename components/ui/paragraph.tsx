import Typography from "@/components/ui/Typography";
import { VariantProps, cva } from "class-variance-authority";

const paragraph = cva("font-extralight font-lexend", {
  variants: {
    indent: {
      none: null,
      sm: "pl-3",
      md: "pl-9 pr-8",
    },
    spacing: {
      default: "mt-8",
      tight: "mt-6",
      minimal: "mt-1",
      none: null,
    },
  },
  defaultVariants: {
    indent: "none",
    spacing: "default",
  },
});

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof paragraph>;

export const Paragraph = ({
  children,
  indent = "none",
  className,
  spacing = "default",
}: ParagraphProps) => {
  return (
    <Typography
      as="p"
      variant="body-base"
      className={paragraph({ indent, spacing, className })}
    >
      {children}
    </Typography>
  );
};
