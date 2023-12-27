import {
  addItemQuantity,
  minusItemQuantity,
  removeItemToCart,
} from "@/lib/features/store";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { Product } from "@/lib/types";
import { Add, Close, Delete, Remove } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import classNames from "classnames";
import Image from "next/image";
import { useMemo, useState } from "react";

type CartDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartDialog({ isOpen, onClose }: CartDialogProps) {
  const dispatch = useAppDispatch();
  const [checkoutIds, setCheckoutIds] = useState<number[]>([]);
  const cart = useAppSelector((state) => state.store.cart);

  const toggleCheckbox = (id: number) => {
    if (checkoutIds.includes(id)) {
      setCheckoutIds([...checkoutIds].filter((ids) => ids !== id));
    } else {
      setCheckoutIds([...checkoutIds, id]);
    }
  };

  const totalAmount = useMemo(() => {
    return cart.reduce((acc, item) => {
      let price = item.price;
      if (item.discountPercentage > 0) {
        price = item.price - item.price * (item.discountPercentage / 100);
      }
      if (checkoutIds.includes(item.id)) {
        return acc + price * item.quantity;
      } else {
        return acc;
      }
    }, 0);
  }, [checkoutIds, cart]);

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <div className="flex justify-between items-center pb-4 border-b border-secondary">
          My Cart
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <>
          <div className="flex flex-col gap-y-10 md:gap-y-4 pt-6">
            {cart && cart.length > 0
              ? cart.map((item: Product) => {
                  const discountedPrice =
                    item.price - item.price * (item.discountPercentage / 100);
                  return (
                    <div key={item.id} className="flex gap-4 max-md:flex-col">
                      <div className="flex gap-4">
                        <div className="my-auto">
                          <input
                            type="checkbox"
                            checked={
                              checkoutIds.findIndex((id) => id === item.id) !==
                              -1
                            }
                            className="w-5 h-5"
                            onClick={() => {
                              toggleCheckbox(item.id);
                            }}
                          />
                        </div>
                        <div className="w-full md:w-[200px] h-[150px] border">
                          <Image
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            width={200}
                            height={200}
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h5 className="text-2xl">{item.title}</h5>
                        <h3 className="text-price font-bold space-x-2">
                          {item.discountPercentage > 0 ? (
                            <span>${discountedPrice.toFixed(2)}</span>
                          ) : (
                            <span>${item.price.toFixed(2)}</span>
                          )}
                        </h3>
                        <div className="text-base flex items-center">
                          <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={() => dispatch(minusItemQuantity(item.id))}
                          >
                            <Remove fontSize="small" />
                          </IconButton>
                          <span className="text-price font-bold">
                            {item.quantity}
                          </span>
                          <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={() => dispatch(addItemQuantity(item.id))}
                          >
                            <Add fontSize="small" />
                          </IconButton>
                        </div>
                        <Delete
                          className="text-red-500 cursor-pointer"
                          onClick={() => dispatch(removeItemToCart(item))}
                        />
                      </div>
                    </div>
                  );
                })
              : "Your cart is empty!"}
          </div>
          <div className="w-full flex justify-between mt-10 border-t border-secondary pt-4 items-center gap-2">
            <input
              type="checkbox"
              checked={checkoutIds.length === cart.length && cart.length !== 0}
              className="w-5 h-5"
              onClick={() => {
                if (checkoutIds.length === cart.length) {
                  setCheckoutIds([]);
                } else {
                  setCheckoutIds(cart.map((item) => item.id));
                }
              }}
              disabled={cart.length === 0}
            />
            <div className="flex items-center gap-4">
              <h6>
                Total:&nbsp;
                <span className="text-price font-bold">
                  ${totalAmount.toFixed(2)}
                </span>
              </h6>
              <Button
                disabled={checkoutIds.length === 0 || cart.length === 0}
                variant="contained"
                className={classNames("!bg-price !text-white ml-4", {
                  "!cursor-not-allowed !pointer-events-auto":
                    checkoutIds.length === 0 || cart.length === 0,
                })}
                onClick={() =>
                  alert(`You will checkout ${checkoutIds.length} items!`)
                }
              >
                Check Out ({checkoutIds.length})
              </Button>
            </div>
          </div>
        </>
      </DialogContent>
    </Dialog>
  );
}
