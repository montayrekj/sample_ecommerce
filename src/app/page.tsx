"use client";

import { Container } from "@mui/material";
import Cover1 from "/public/images/home/bg-cover-1.png";
import Cover2 from "/public/images/home/bg-cover-2.png";
import Cover3 from "/public/images/home/bg-cover-3.png";
import Cover4 from "/public/images/home/bg-cover-4.png";
import Image from "next/image";

export default function Home() {
  return (
    <Container className="">
      <div className="grid grid-cols-[452px_332px_332px] grid-rows-[repeat(2,300px)] gap-4 my-20">
        <div className="[grid-row:1_/_span_2] relative">
          <Image
            src={Cover1}
            alt="cover"
            className="object-cover absolute -z-10"
          />
          <div className="p-6">
            <h6 className="text-sm font-bold text-[#2DC071]">5 items</h6>
            <h2 className="text-[2.5rem] font-bold">FURNITURE</h2>
            <h6 className="text-sm font-bold">Read More</h6>
          </div>
        </div>
        <div className="[grid-column:2_/span_2] relative">
          <Image
            src={Cover2}
            alt="cover"
            className="object-cover absolute -z-10"
          />
          <div className="p-6">
            <h6 className="text-sm font-bold text-[#2DC071]">5 items</h6>
            <h3 className="text-2xl font-bold">FURNITURE</h3>
            <h6 className="text-sm font-bold">Read More</h6>
          </div>
        </div>
        <div className="relative">
          <Image
            src={Cover3}
            alt="cover"
            className="object-cover absolute -z-10"
          />
          <div className="p-6">
            <h6 className="text-sm font-bold text-[#2DC071]">5 items</h6>
            <h3 className="text-2xl font-bold">FURNITURE</h3>
            <h6 className="text-sm font-bold">Read More</h6>
          </div>
        </div>
        <div className="relative">
          <Image
            src={Cover4}
            alt="cover"
            className="object-cover absolute -z-10"
          />
          <div className="p-6">
            <h6 className="text-sm font-bold text-[#2DC071]">5 items</h6>
            <h3 className="text-2xl font-bold">FURNITURE</h3>
            <h6 className="text-sm font-bold">Read More</h6>
          </div>
        </div>
      </div>
    </Container>
  );
}
