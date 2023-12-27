import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Image, { StaticImageData } from "next/image";
import Typography from "@mui/material/Typography";
import classNames from "classnames";
import Clock from "/public/images/home/clock.svg";
import Gallery from "/public/images/home/gallery.svg";
import { ChevronRight } from "@mui/icons-material";

type PostCardProps = {
  title: string;
  description: string;
  date: string;
  reactions: number;
  tags: string[];
  image: StaticImageData;
};

export default function PostCard({
  title,
  description,
  date,
  reactions,
  tags,
  image,
}: PostCardProps) {
  return (
    <Card>
      <CardHeader
        className="h-[300px] min-w-[348px] p-0 relative overflow-hidden"
        classes={{ root: "!block !p-0" }}
        title={
          <div className="relative">
            <Typography
              variant="h6"
              className="absolute z-10 text-white !text-sm px-4 py-1 bg-[#E74040] rounded top-3 left-3"
            >
              NEW
            </Typography>
            <Image
              src={image}
              alt={title}
              width={348}
              height={300}
              className="absolute w-full"
            />
          </div>
        }
      />
      <CardContent className="!flex flex-col gap-4">
        <ul className="flex gap-4">
          {tags.map((tag, i) => (
            <li key={tag}>
              <small
                className={classNames(
                  i !== 0 ? "text-secondary" : "text-[#8EC2F2]"
                )}
              >
                {tag}
              </small>
            </li>
          ))}
        </ul>
        <h4 className="text-xl">{title}</h4>
        <p className="text-secondary text-sm">{description}</p>
        <div className="flex justify-between flex-wrap">
          <div className="flex items-center gap-1 text-secondary">
            <Image src={Clock} height={16} width={16} alt="date" />
            <small>{date}</small>
          </div>
          <div className="flex items-center gap-1 text-secondary">
            <Image src={Gallery} height={16} width={16} alt="reactions" />
            <small>{reactions} comments</small>
          </div>
        </div>
        <a href="/" className="flex items-center">
          <h6 className="text-secondary font-bold text-sm">Learn More</h6>
          <ChevronRight className="text-primary" />
        </a>
      </CardContent>
    </Card>
  );
}
