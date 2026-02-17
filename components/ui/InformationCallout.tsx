import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

type InformationCalloutProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

export const InformationCallout = ({
  label,
  children,
  className,
}: InformationCalloutProps) => (
  <div className={cn("mt-8", className)}>
    <Typography as="h6" variant="h6" className="font-lora font-semibold">
      {label}{" "}
      <Typography
        as="span"
        variant="body-base"
        className="font-lexend font-extralight"
      >
        {children}
      </Typography>
    </Typography>
  </div>
);
