import Typography from "@/components/ui/Typography";

type InformationTitleProps = {
  children: React.ReactNode;
};

export const InformationTitle = ({ children }: InformationTitleProps) => (
  <Typography as="h1" variant="h1" className="font-lora font-semibold mt-8">
    {children}
  </Typography>
);
