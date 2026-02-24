import Typography from "@/components/ui/Typography";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const UserQuot = ({
  quot,
  avatar,
  name,
  job,
}: {
  quot: string;
  avatar: string;
  name: string;
  job: string;
}) => {
  return (
    <div className="relative flex flex-col gap-y-8">
      <Typography
        as={"blockquote"}
        variant={"h3-italic"}
        className="font-lora text-pretty text-center max-md:text-[14px]"
      >
        &quot;{quot}
      </Typography>
      <div className="relative flex items-center justify-center gap-x-3">
        <Avatar size="lg">
          <AvatarImage src={avatar} className="object-cover object-top" />
        </Avatar>
        <div className="flex flex-col">
          <Typography
            as="span"
            variant={"button"}
            className="font-lexend text-primary"
          >
            {name}
          </Typography>
          <Typography
            as="span"
            variant={"body-sm"}
            className="font-lexend"
          >
            {job}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default UserQuot;
