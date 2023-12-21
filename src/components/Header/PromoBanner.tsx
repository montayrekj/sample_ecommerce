import { Container } from "@mui/material";
import Image from "next/image";
import PhoneIcon from "/public/images/phone.svg";
import EmailIcon from "/public/images/email.svg";
import {
  FacebookRounded,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import Link from "next/link";

export default function PromoBanner() {
  return (
    <div className="bg-[#23856D] max-md:hidden text-white">
      <Container
        maxWidth="xl"
        className="px-6 py-5 font-bold flex justify-between gap-4 text-sm items-center"
      >
        <div className="flex flex-[3] flex-wrap items-center gap-x-6">
          <Link href="tel:2255550118">
            <div className="flex gap-x-2">
              <Image
                src={PhoneIcon}
                alt="phone"
                height={16}
                width={16}
                unoptimized
              />
              <h6 className="whitespace-nowrap">(225) 555-0118</h6>
            </div>
          </Link>
          <Link href="mailto:michelle.rivera@example.com">
            <div className="flex gap-x-2">
              <Image
                src={EmailIcon}
                alt="phone"
                height={16}
                width={16}
                unoptimized
              />
              <h6>michelle.rivera@example.com</h6>
            </div>
          </Link>
        </div>
        <div className="flex-[3] text-center">
          <h6>Follow Us and get a chance to win 80% off</h6>
        </div>
        <div className="flex-[2] flex gap-x-4 justify-end flex-wrap items-center">
          <h6>Follow Us :</h6>
          <div className="space-x-2">
            <Link href="http://www.instagram.com">
              <Instagram />
            </Link>
            <Link href="http://www.youtube.com">
              <YouTube />
            </Link>
            <Link href="http://www.facebook.com">
              <FacebookRounded />
            </Link>
            <Link href="http://www.twitter.com">
              <Twitter />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
