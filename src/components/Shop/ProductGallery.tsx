import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ images }: { images: string[] }) {
  const galleryImages = images.slice(0, 4);
  const [heroImgIdx, setHeroImgIdx] = useState(0);
  const heroImage = galleryImages[heroImgIdx];

  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="relative h-[300px]">
        {heroImgIdx !== 0 && (
          <ArrowBackIos
            className="text-white z-10 absolute left-3 top-1/2 -translate-y-1/2 text-4xl cursor-pointer"
            onClick={() => setHeroImgIdx(heroImgIdx - 1)}
          />
        )}
        <Image
          src={heroImage}
          alt="hero"
          className="w-full h-full object-cover filter-[brightness(0.8)]"
          width={506}
          height={450}
        />
        {heroImgIdx >= 0 && heroImgIdx < 3 && (
          <ArrowForwardIos
            className="text-white z-10 absolute right-3 top-1/2 -translate-y-1/2 text-4xl cursor-pointer"
            onClick={() => setHeroImgIdx(heroImgIdx + 1)}
          />
        )}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <Image
            key={image}
            src={image}
            alt="gallery"
            className="w-full h-full object-cover"
            width={219}
            height={75}
          />
        ))}
      </div>
    </div>
  );
}
