import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

type InformationSubsectionProps = {
  title: string;
  children?: React.ReactNode;
  className?: string;
  /** Use larger top margin for first subsection under a section */
  first?: boolean;
};

const spacingClass = "mt-10";
const firstSpacingClass = "mt-16";

export const InformationSubsection = ({
  title,
  children,
  className,
  first,
}: InformationSubsectionProps & { first?: boolean }) => (
  <>
    <Typography
      as="h3"
      variant="h3"
      className={cn(
        "font-lora font-medium",
        first ? firstSpacingClass : spacingClass,
        className
      )}
    >
      {title}
    </Typography>
    {children}
  </>
);
