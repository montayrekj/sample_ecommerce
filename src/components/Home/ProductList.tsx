import { Button } from "@mui/material";
import BestsellerProductItem from "./BestsellerProductItem";

export default async function ProductList() {
  const products = await fetch("https://dummyjson.com/products?limit=10").then(
    (res) => res.json()
  );

  const productList = products.products;

  return (
    <div className="my-20 grid grid-cols-5 gap-7">
      {productList &&
        productList.map((product: any) => (
          <BestsellerProductItem key={product.id} {...product} />
        ))}
    </div>
  );
}
