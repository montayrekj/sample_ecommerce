"use client";

import { TestimonialImages } from "@/lib/constants/testimonial.constants";
import { Container } from "@mui/material";
import Image from "next/image";
import UserImg from "/public/images/user.png";
import Ratings from "../Ratings";

export default function Testimonial() {
  return (
    <Container
      maxWidth="lg"
      className="my-20 flex justify-evenly max-lg:flex-col max-lg:gap-y-20 items-center gap-4"
    >
      <div className="flex flex-col items-center justify-center text-center max-w-md gap-6">
        <h3 className="text-2xl font-bold mb-10">What they say about us</h3>
        <Image src={UserImg} alt="Regina Miles" width={90} height={90} />
        <Ratings rating={4} />
        <h6 className="text-secondary font-bold text-sm">
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </h6>
        <div>
          <a href="/" className="text-primary font-bold">
            Regina Miles
          </a>
          <h6 className="font-bold">Designer</h6>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {TestimonialImages.map((testimonialImg, idx) => (
          <Image
            src={testimonialImg}
            alt={`testimonial-${idx}`}
            width="143"
            height="143"
            key={idx}
          />
        ))}
      </div>
    </Container>
  );
}
