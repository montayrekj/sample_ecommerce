// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../types";

interface ProductsState {
  products: Product[];
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<
      ProductsState,
      { limit?: number; skip?: number }
    >({
      query: ({ limit, skip }) =>
        `/products?limit=${limit ? limit : 10}${skip ? `&skip=${skip}` : ""}`,
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
  useGetProductByIdQuery,
} = productsApi;
