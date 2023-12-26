import { Button } from "@mui/material";
import BestsellerProductItem from "./BestsellerProductItem";
import classNames from "classnames";

export type ProductListProps = {
  variant?: "home" | "product";
};

export default async function ProductList({
  variant = "home",
}: ProductListProps) {
  const length = variant === "home" ? 10 : 8;
  const products = await fetch(
    `https://dummyjson.com/products?limit=${length}`
  ).then((res) => res.json());

  const productList = products.products;

  return (
    <div
      className={classNames(
        "grid grid-cols-1 gap-7",
        variant === "home" ? "md:grid-cols-5 my-20" : "md:grid-cols-4 my-6"
      )}
    >
      {productList &&
        productList.map((product: any) => (
          <BestsellerProductItem
            key={product.id}
            variant={variant}
            {...product}
          />
        ))}
    </div>
  );
}
