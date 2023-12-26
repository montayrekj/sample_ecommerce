import { ExpandMore } from "@mui/icons-material";
import { ReactNode } from "react";

export const desktopHeaderLinks: ReactNode[] = [
  <li key="home">Home</li>,
  <li className="!font-normal !text-black" key="shop">
    Shop
    <ExpandMore />
  </li>,
  <li key="about">About</li>,
  <li key="blog">Blog</li>,
  <li key="contact">Contact</li>,
  <li key="pages">Pages</li>,
];

export const mobileHeaderLinks: ReactNode[] = [
  <li key="home">Home</li>,
  <li key="product">Product</li>,
  <li key="pricing">Pricing</li>,
  <li key="contact">Contact</li>,
];
