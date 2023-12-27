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
    addItemQuantity: (state, { payload }) => {
      const idx = state.cart.findIndex((item) => item.id === payload);
      const tempCart = [...state.cart];
      tempCart[idx].quantity = tempCart[idx].quantity + 1;
      state.cart = tempCart;
    },
    minusItemQuantity: (state, { payload }) => {
      const idx = state.cart.findIndex((item) => item.id === payload);
      if (state.cart[idx].quantity > 1) {
        const tempCart = [...state.cart];
        tempCart[idx].quantity = tempCart[idx].quantity - 1;
        state.cart = tempCart;
      } else {
        state.cart = state.cart.filter((item) => item.id !== payload);
      }
    },
    removeItemToCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload.id);
    },
    addItemToWishlist: (state, { payload }) => {
      if (state.wishlist.findIndex((item) => item.id === payload.id) === -1) {
        state.wishlist = [...state.wishlist, payload];
      }
    },
    removeItemToWishlist: (state, { payload }) => {
      if (state.wishlist.findIndex((item) => item.id === payload.id) !== -1) {
        state.wishlist = state.wishlist.filter(
          (item) => item.id !== payload.id
        );
      }
    },
  },
});

export const {
  addItemToCart,
  addItemToWishlist,
  addItemQuantity,
  minusItemQuantity,
  removeItemToCart,
  removeItemToWishlist,
} = storeState.actions;

export const getStore = (state: RootState) => state.store;

export default storeState.reducer;
