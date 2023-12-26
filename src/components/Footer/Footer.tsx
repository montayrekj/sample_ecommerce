"use client";

import { FacebookRounded, Instagram, Twitter } from "@mui/icons-material";
import {
  Button,
  Container,
  FormGroup,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Link from "next/link";
import { footerLinks } from "@/lib/constants/footer.constants";

export default function Footer() {
  return (
    <div className="bg-lightgray">
      <Container
        maxWidth="lg"
        className="py-12 flex md:items-center justify-between max-md:px-10 flex-col md:flex-row gap-4"
      >
        <h3 className="font-bold text-2xl">Bandage</h3>
        <div className="space-x-4 text-primary">
          <Link href="http://www.facebook.com">
            <FacebookRounded />
          </Link>
          <Link href="http://www.instagram.com">
            <Instagram />
          </Link>
          <Link href="http://www.twitter.com">
            <Twitter />
          </Link>
        </div>
      </Container>
      <div className="w-full bg-white py-12">
        <Container
          maxWidth="lg"
          className="flex gap-10 md:gap-20 text-sm font-bold flex-col md:flex-row max-md:px-10 flex-wrap"
        >
          {footerLinks.map((footerLink) => (
            <div className="flex flex-col gap-4" key={footerLink.header}>
              <h5 className="text-base mb-1 md:mb-2">{footerLink.header}</h5>
              {footerLink.links.map((link) => (
                <a
                  className="text-secondary"
                  href={`${footerLink.header}-${link.url}`}
                  key={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
          <div className="flex flex-col gap-4">
            <h5 className="text-base mb-2">Get In Touch</h5>
            <div>
              <FormGroup row>
                <TextField
                  variant="outlined"
                  placeholder="Your Email"
                  className="bg-[#F9F9F9] border-[#E6E6E6] [&_div]:rounded-r-none [&_input::placeholder]:text-secondary"
                />
                <Button
                  variant="contained"
                  disableElevation
                  className="bg-primary text-white rounded-l-none"
                >
                  Subscribe
                </Button>
              </FormGroup>
            </div>
            <p className="text-secondary text-sm font-normal">
              Lore imp sum dolor Amit
            </p>
          </div>
        </Container>
      </div>
      <Container maxWidth="lg" className="max-md:text-center">
        <h6 className="text-secondary font-bold text-sm py-6">
          Made With Love By Finland All Right Reserved
        </h6>
      </Container>
    </div>
  );
}
