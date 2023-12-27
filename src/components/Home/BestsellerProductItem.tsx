import classNames from "classnames";
import Image from "next/image";
import { ProductListProps } from "./ProductList";
import Link from "next/link";

type BestsellerProductItemProps = {
  id: number;
  thumbnail: string;
  title: string;
  brand: string;
  price: number;
  discountPercentage: number;
};

export default function BestsellerProductItem({
  id,
  thumbnail,
  title,
  brand,
  price,
  discountPercentage,
  variant = "home",
}: BestsellerProductItemProps & ProductListProps) {
  const discountedPrice = price - (price * discountPercentage) / 100;
  return (
    <Link href={`/${id}`}>
      <div
        className={classNames("text-sm grid gap-y-2", {
          "place-items-center text-center": variant === "home",
          "bg-white": variant !== "home",
        })}
      >
        <div className="h-[140px] flex justify-center items-center w-full">
          <Image
            src={thumbnail}
            alt={title}
            width={100}
            height={183}
            className="h-full max-h-[128px] w-full object-cover"
          />
        </div>
        <div className="px-6 pb-6 space-y-2">
          <h5>{title}</h5>
          <p className="text-[#737373]">{brand}</p>
          <h5 className="text-[#BDBDBD] font-bold space-x-2">
            <span>${price.toFixed(2)}</span>
            <span className="text-[#23856D]">
              ${discountedPrice.toFixed(2)}
            </span>
          </h5>
        </div>
      </div>
    </Link>
  );
}
