"use client";

import Hooli from "/public/images/shop/hooli.svg";
import Lyft from "/public/images/shop/lyft.svg";
import Leaf from "/public/images/shop/leaf.svg";
import Stripe from "/public/images/shop/stripe.svg";
import Aws from "/public/images/shop/aws.svg";
import Reddit from "/public/images/shop/reddit.svg";
import Image from "next/image";
import { Container } from "@mui/material";

export default function Sponsors() {
  return (
    <Container maxWidth="lg" className="mt-20">
      <div className="flex flex-wrap justify-center items-center gap-10 max-sm:flex-col gap-y-16">
        <Image src={Hooli} alt="Hooli" unoptimized />
        <Image src={Lyft} alt="Lyft" unoptimized />
        <Image src={Leaf} alt="Leaf" unoptimized />
        <Image src={Stripe} alt="Stripe" unoptimized />
        <Image src={Aws} alt="AWS" unoptimized />
        <Image src={Reddit} alt="Reddit" unoptimized />
      </div>
    </Container>
  );
}
