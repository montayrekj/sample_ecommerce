"use client";

import { Button, Container } from "@mui/material";
import BestsellerProductItem from "./BestsellerProductItem";
import classNames from "classnames";
import { useLazyGetAllProductsQuery } from "@/lib/services/products";
import { useEffect, useState } from "react";

export type ProductListProps = {
  variant?: "home" | "product";
};

export default function ProductList({ variant = "home" }: ProductListProps) {
  const [pagination, setPagination] = useState(0);
  const [trigger, { data }] = useLazyGetAllProductsQuery();

  useEffect(() => {
    const getLimit = () => {
      if (variant !== "home") {
        return 8;
      } else {
        if (pagination === 0) {
          return 10;
        } else {
          return (pagination + 1) * 10;
        }
      }
    };
    const limit = getLimit();

    trigger({
      limit: limit,
      skip: pagination,
    });
  }, [trigger, variant, pagination]);

  return (
    <Container maxWidth="lg" className="my-20 !flex items-center flex-col">
      <div className="text-center space-y-2 max-w-[300px]">
        <h4 className="text-[#737373] text-xl max-md:hidden">
          Featured Products
        </h4>
        <h3 className="text-2xl font-bold">BESTSELLER PRODUCTS</h3>
        <p className="text-[#737373] text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div
        className={classNames(
          "grid grid-cols-1 gap-7",
          variant === "home" ? "md:grid-cols-5 my-20" : "md:grid-cols-4 my-6"
        )}
      >
        {data &&
          data?.products &&
          data?.products.map((product: any) => (
            <BestsellerProductItem
              key={product.id}
              variant={variant}
              {...product}
            />
          ))}
      </div>
      {variant === "home" && (
        <Button
          variant="outlined"
          className="w-60 py-3 text-sm text-primary border-primary"
          onClick={() => setPagination((p) => p + 1)}
        >
          LOAD MORE PRODUCTS
        </Button>
      )}
    </Container>
  );
}
