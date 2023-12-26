import Image from "next/image";

type BestsellerProductItemProps = {
  thumbnail: string;
  title: string;
  brand: string;
  price: number;
  discountPercentage: number;
};

export default function BestsellerProductItem({
  thumbnail,
  title,
  brand,
  price,
  discountPercentage,
}: BestsellerProductItemProps) {
  const discountedPrice = price - (price * discountPercentage) / 100;
  return (
    <div className="text-sm grid place-items-center text-center gap-y-2">
      <div className="h-[140px] flex justify-center items-center w-full">
        <Image
          src={thumbnail}
          alt={title}
          width={100}
          height={183}
          className="h-full max-h-[128px] w-full object-cover md:w-auto md:object-fill"
        />
      </div>
      <h5>{title}</h5>
      <p className="text-[#737373]">{brand}</p>
      <h5 className="text-[#BDBDBD] font-bold space-x-2">
        <span>${price.toFixed(2)}</span>
        <span className="text-[#23856D]">${discountedPrice.toFixed(2)}</span>
      </h5>
    </div>
  );
}
