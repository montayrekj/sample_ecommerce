"use client";
import {
  ExpandMore,
  FavoriteBorder,
  MenuTwoTone,
  PersonOutline,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge, Container, Dialog, Menu, useMediaQuery } from "@mui/material";
import Link from "next/link";
import PromoBanner from "./PromoBanner";
import BREAKPOINTS from "@/lib/constants/breakpoints.constants";
import {
  desktopHeaderLinks,
  mobileHeaderLinks,
} from "@/lib/constants/header.constants";
import { useState } from "react";
import classNames from "classnames";
import { useAppSelector } from "@/lib/hooks/redux";
import { Product } from "@/lib/types";
import CartDialog from "./CartDialog";
import WishlistDialog from "./WishlistDialog";

type HeaderProps = {
  variant?: "home" | "product";
};

export default function Header({ variant = "home" }: HeaderProps) {
  const [cartDialogOpen, setCartDialogOpen] = useState(false);
  const [wishlistDialogOpen, setWishlistDialogOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(true);
  const isDesktop = useMediaQuery(`(min-width:${BREAKPOINTS.tablet_lg}px)`);
  const links = isDesktop ? desktopHeaderLinks : mobileHeaderLinks;

  const cartLength = useAppSelector((state) =>
    state.store.cart.reduce(
      (acc: number, item: Product) => acc + item.quantity,
      0
    )
  );

  const wishlistLength = useAppSelector((state) => state.store.wishlist.length);
  return (
    <>
      <PromoBanner />
      <Container
        maxWidth={variant === "home" ? "xl" : "lg"}
        className="p-6 !flex items-center flex-col md:flex-row"
      >
        <div className="flex justify-between flex-1 lg:items-center max-lg:flex-col max-lg:w-full">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">
              <Link href="/">Bandage</Link>
            </h3>
            {!isDesktop && (
              <ul className="flex gap-4">
                {!isMenuOpen && (
                  <>
                    <li>
                      <Search />
                    </li>
                    <li onClick={() => setCartDialogOpen(true)}>
                      {cartLength > 0 ? (
                        <Badge badgeContent={cartLength} color="primary">
                          <ShoppingCartOutlined />
                        </Badge>
                      ) : (
                        <ShoppingCartOutlined />
                      )}
                    </li>
                  </>
                )}

                <li onClick={() => setMenuOpen(!isMenuOpen)}>
                  <MenuTwoTone />
                </li>
              </ul>
            )}
          </div>

          <ul
            className={classNames(
              "flex gap-4 [&_li]:text-[#737373] [&_li]:max-lg:text-3xl [&_li]:lg:font-bold max w-full justify-center items-center max-lg:mt-20 max-lg:flex-col",
              { hidden: !isMenuOpen }
            )}
          >
            {links.map((link) => link)}
          </ul>
        </div>
        {isDesktop && (
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
            <li onClick={() => setCartDialogOpen(true)}>
              {cartLength > 0 ? (
                <Badge badgeContent={cartLength} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              ) : (
                <ShoppingCartOutlined />
              )}
            </li>
            <li onClick={() => setWishlistDialogOpen(true)}>
              {wishlistLength > 0 ? (
                <Badge badgeContent={wishlistLength} color="primary">
                  <FavoriteBorder />
                </Badge>
              ) : (
                <FavoriteBorder />
              )}
            </li>
          </ul>
        )}
        {!isDesktop && isMenuOpen && (
          <ul className="flex gap-4 text-primary flex-col mt-4 items-center text-2xl">
            <li>
              <Link href="/" className="flex items-center gap-2">
                <PersonOutline />
                <span>Login / Register</span>
              </Link>
            </li>
            <li>
              <Search />
            </li>
            <li onClick={() => setCartDialogOpen(true)}>
              {cartLength > 0 ? (
                <Badge badgeContent={cartLength} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              ) : (
                <ShoppingCartOutlined />
              )}
            </li>
            <li onClick={() => setWishlistDialogOpen(true)}>
              {wishlistLength > 0 ? (
                <Badge badgeContent={wishlistLength} color="primary">
                  <FavoriteBorder />
                </Badge>
              ) : (
                <FavoriteBorder />
              )}
            </li>
          </ul>
        )}
      </Container>
      <CartDialog
        isOpen={cartDialogOpen}
        onClose={() => setCartDialogOpen(false)}
      />
      <WishlistDialog
        isOpen={wishlistDialogOpen}
        onClose={() => setWishlistDialogOpen(false)}
      />
    </>
  );
}
