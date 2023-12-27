import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Product } from "../types";

interface StoreState {
  cart: Product[];
  wishlist: Product[];
}

const initialState: StoreState = {
  cart: [],
  wishlist: [],
};

export const storeState = createSlice({
  name: "store",
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      const idx = state.cart.findIndex((item) => item.id === payload.id);
      if (idx !== -1) {
        const tempCart = [...state.cart];
        tempCart[idx].quantity = tempCart[idx].quantity + 1;
        state.cart = tempCart;
      } else {
        state.cart = [...state.cart, { ...payload, quantity: 1 }];
      }
    },
    removeItemToCart: (state, { payload }) => {
      const idx = state.cart.findIndex((item) => item.id === payload.id);
      if (state.cart[idx].quantity > 0) {
        const tempCart = [...state.cart];
        if (tempCart[idx].quantity > 1) {
          tempCart[idx].quantity = tempCart[idx].quantity - 1;
          state.cart = tempCart;
        } else {
          state.cart = state.cart.filter((item) => item.id !== payload.id);
        }
      }
    },
    addItemToWishlist: (state, { payload }) => {
      const idx = state.wishlist.findIndex((item) => item.id === payload.id);
      if (idx !== -1) {
        const tempWishlist = [...state.wishlist];
        tempWishlist[idx].quantity = tempWishlist[idx].quantity + 1;
        state.wishlist = tempWishlist;
      } else {
        state.wishlist = [...state.wishlist, { ...payload, quantity: 1 }];
      }
    },
    removeItemToWishlist: (state, { payload }) => {
      const idx = state.wishlist.findIndex((item) => item.id === payload.id);
      if (state.wishlist[idx].quantity > 0) {
        const tempWishlist = [...state.wishlist];
        if (tempWishlist[idx].quantity > 1) {
          tempWishlist[idx].quantity = tempWishlist[idx].quantity - 1;
          state.wishlist = tempWishlist;
        } else {
          state.wishlist = state.wishlist.filter(
            (item) => item.id !== payload.id
          );
        }
      }
    },
  },
});

export const {
  addItemToCart,
  addItemToWishlist,
  removeItemToCart,
  removeItemToWishlist,
} = storeState.actions;

export const getStore = (state: RootState) => state.store;

export default storeState.reducer;
