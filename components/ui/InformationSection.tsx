import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

type InformationSectionProps = {
  title: string;
  children?: React.ReactNode;
  className?: string;
};

export const InformationSection = ({
  title,
  children,
  className,
}: InformationSectionProps) => (
  <>
    <Typography
      as="h2"
      variant="h2"
      className={cn("font-lora font-medium mt-8", className)}
    >
      {title}
    </Typography>
    {children}
  </>
);
