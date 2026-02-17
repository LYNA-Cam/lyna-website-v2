import Typography from "@/components/ui/Typography";

type LastUpdatedProps = {
  date: string;
};

export const LastUpdated = ({ date }: LastUpdatedProps) => (
  <Typography as="p" variant="body-sm" className="font-light font-lexend">
    Last Updated: {date}
  </Typography>
);
