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
        className="font-lora text-pretty text-center"
      >
        &quot;{quot}
      </Typography>
      <div className="relative flex items-center justify-center gap-x-3">
        <Avatar size="lg">
          <AvatarImage src={avatar} />
        </Avatar>
        <div className="flex flex-col">
          <Typography
            as="span"
            variant={"body-base"}
            className="font-lexend font-extralight text-primary"
          >
            {name}
          </Typography>
          <Typography
            as="span"
            variant={"body-sm"}
            className="font-lexend font-light text-black"
          >
            {job}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default UserQuot;
