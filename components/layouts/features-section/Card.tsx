import Typography from "@/components/ui/Typography";
import Image from "next/image";

const Card = ({
  image,
  subImage,
  title,
  caption,
}: {
  image: string;
  subImage: string;
  title: string;
  caption: string;
}) => {
  return (
    <div className="relative gradient-1 rounded-[32px] p-px drop-shadow-md h-full">
      <div className="relative bg-white w-full flex flex-col gap-y-5 pb-8 rounded-[32px] overflow-hidden h-full">
        <Image src={image} alt="" width={396} height={320} className="w-full" />
        <div className="px-6 flex flex-col gap-y-6 flex-1">
          <Typography as="h4" variant={"h4"} className="font-medium font-lora">
            {title}
          </Typography>
          <Image
            src={subImage}
            alt=""
            width={332}
            height={259}
            className="w-full flex-1 object-cover"
          />
        </div>
        <Typography
          as="span"
          variant={"body-base"}
          className="font-extralight font-lexend px-6"
        >
          {caption}
        </Typography>
      </div>
    </div>
  );
};

export default Card;
