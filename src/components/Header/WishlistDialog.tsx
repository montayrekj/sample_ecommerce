import {
  addItemToCart,
  minusItemQuantity,
  removeItemToCart,
  removeItemToWishlist,
} from "@/lib/features/store";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { Product } from "@/lib/types";
import { AddShoppingCart, Close, Delete } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import { useMemo, useState } from "react";

type WishlistDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function WishlistDialog({
  isOpen,
  onClose,
}: WishlistDialogProps) {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.store.wishlist);

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <div className="flex justify-between items-center pb-4 border-b border-secondary">
          My Wishlist
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <>
          <div className="flex flex-col gap-y-10 md:gap-y-4 pt-6">
            {wishlist &&
              wishlist.length > 0 &&
              wishlist.map((item: Product) => {
                return (
                  <div key={item.id} className="flex gap-4 max-md:flex-col">
                    <div className="w-full md:w-[200px] h-[150px] border">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-2xl">{item.title}</h5>
                      <div className="text-base flex items-center">
                        <Button
                          variant="contained"
                          className="!bg-price"
                          onClick={() => dispatch(addItemToCart(item))}
                        >
                          <AddShoppingCart fontSize="small" />+
                        </Button>
                      </div>
                      <Delete
                        className="text-red-500 cursor-pointer"
                        onClick={() => dispatch(removeItemToWishlist(item))}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      </DialogContent>
    </Dialog>
  );
}
