import Image from "next/image";
import Star from "/public/images/star.svg";
import StarFilled from "/public/images/star-filled.svg";

type RatingsProps = {
  rating: number;
  maxRating?: number;
};

export default function Ratings({ rating, maxRating = 5 }: RatingsProps) {
  return (
    <div className="flex gap-1">
      {Array(maxRating)
        .fill(0)
        .map((rate, i) => (
          <Image
            key={i}
            src={i < rating ? StarFilled : Star}
            height={22}
            width={22}
            alt="star"
          />
        ))}
    </div>
  );
}
