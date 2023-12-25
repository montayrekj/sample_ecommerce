"use client";
import {
  ExpandMore,
  FavoriteBorder,
  PersonOutline,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Container } from "@mui/material";
import Link from "next/link";
import PromoBanner from "./PromoBanner";

export default function Header() {
  return (
    <>
      <PromoBanner />
      <Container maxWidth="xl" className="p-6 flex items-center">
        <div className="flex justify-between flex-1 items-center">
          <h3 className="text-2xl font-bold">
            <Link href="/">Bandage</Link>
          </h3>
          <ul className="flex gap-4 [&_li]:text-[#737373] [&_li]:font-bold max w-full justify-center">
            <li>Home</li>
            <li className="!font-normal !text-black">
              Shop
              <ExpandMore />
            </li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Pages</li>
          </ul>
        </div>
        <ul className="flex-1 flex gap-6 justify-end items-center text-primary font-thin">
          <li>
            <Link href="/" className="flex items-center gap-2">
              <PersonOutline />
              <span className="text-sm font-bold">Login / Register</span>
            </Link>
          </li>
          <li>
            <Search />
          </li>
          <li>
            <ShoppingCartOutlined />
          </li>
          <li>
            <FavoriteBorder />
          </li>
        </ul>
      </Container>
    </>
  );
}
