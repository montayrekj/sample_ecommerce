"use client";

import { Product } from "@/lib/types";
import { Button, Container, IconButton, Snackbar } from "@mui/material";
import ProductGallery from "./ProductGallery";
import Ratings from "../Ratings";
import {
  Close,
  FavoriteBorder,
  ShoppingCartOutlined,
  Visibility,
} from "@mui/icons-material";
import { useState } from "react";
import { addItemToCart, addItemToWishlist } from "@/lib/features/store";
import { useAppDispatch } from "@/lib/hooks/redux";

export default function ProductDetails({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const [snackbarOpen, toggleSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const colors = ["#23A6F0", "#2DC071", "#E77C40", "#252B42"];

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => toggleSnackbar(false)}
      >
        <Close fontSize="small" />
      </IconButton>
    </>
  );

  const addToCart = () => {
    setTimeout(() => {
      setMessage("Added to cart!");
      dispatch(addItemToCart(product));
      toggleSnackbar(true);
    }, 0);
  };

  const addToWishlist = () => {
    setTimeout(() => {
      setMessage("Added to wishlist!");
      dispatch(addItemToWishlist(product));
      toggleSnackbar(true);
    }, 0);
  };

  return (
    <>
      <Container maxWidth="lg" className="!flex my-20 gap-10 max-md:flex-col">
        <ProductGallery images={product.images} />
        <div className="flex-1 flex flex-col px-4">
          <div className="flex gap-4 flex-col font-bold border-b border-muted pt-4 pb-8">
            <h4 className="text-xl">{product.title}</h4>
            <h6 className="flex items-center gap-2 text-secondary">
              <Ratings rating={product.rating} /> 10 reviews
            </h6>
            <h3 className="text-2xl">${product.price.toFixed(2)}</h3>
            <h6 className="text-secondary text-sm">
              Availability:{" "}
              {product.stock > 0 ? (
                <span className="text-[#23A6F0]">In Stock</span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </h6>
            <p className="font-normal text-sm">{product.description}</p>
          </div>
          <div className="flex flex-col justify-between h-full gap-10">
            <div className="flex gap-4 pt-8">
              {colors.map((color) => (
                <div
                  className={`h-8 w-8 rounded-full cursor-pointer`}
                  style={{ background: color }}
                  key={color}
                ></div>
              ))}
            </div>
            <div className="space-x-2 max-md:flex max-md:justify-between">
              <Button
                variant="contained"
                className="!bg-[#23A6F0] h-11 w-[9.5rem] !text-sm"
              >
                Select Options
              </Button>
              <IconButton className="!bg-white [border:1px_solid_#E8E8E8]">
                <FavoriteBorder
                  className="text-black"
                  onClick={() => addToWishlist()}
                />
              </IconButton>
              <IconButton className="!bg-white [border:1px_solid_#E8E8E8]">
                <ShoppingCartOutlined
                  className="text-black"
                  onClick={() => addToCart()}
                />
              </IconButton>
              <IconButton className="!bg-white [border:1px_solid_#E8E8E8]">
                <Visibility className="text-black" />
              </IconButton>
            </div>
          </div>
        </div>
      </Container>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => toggleSnackbar(false)}
        message={message}
        action={action}
      />
    </>
  );
}
