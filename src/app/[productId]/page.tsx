import ProductList from "@/components/Home/ProductList";
import ProductDetails from "@/components/Shop/ProductDetails";
import ProductOtherDetails from "@/components/Shop/ProductOtherDetails";
import Sponsors from "@/components/Shop/Sponsors";
import { Product } from "@/lib/types";
import { ArrowForwardIos } from "@mui/icons-material";
import { Breadcrumbs, Container } from "@mui/material";

type ProductProps = {
  productId: string;
};

export default async function ProductPage({
  params,
}: {
  params: ProductProps;
}) {
  const product: Product = await fetch(
    `https://dummyjson.com/products/${params.productId}`
  ).then((res) => res.json());

  return (
    <div className="bg-[#FAFAFA] py-12 max-lg:mt-12">
      <Container maxWidth="lg" className="mb-8">
        <Breadcrumbs
          separator={<ArrowForwardIos className="text-muted" />}
          aria-label="breadcrumb"
          className="[&_.MuiBreadcrumbs-ol]:max-md:justify-center"
        >
          <a href="/" className="font-bold">
            Home
          </a>
          <span className="font-bold text-muted">Shop</span>
        </Breadcrumbs>
      </Container>
      <ProductDetails product={product} />
      <ProductOtherDetails
        description={product.description}
        images={product.images}
        rating={product.rating}
      />
      <Container maxWidth="lg" className="mt-20">
        <h3 className="text-2xl font-bold w-full pb-4 border-b border-[#ECECEC]">
          BESTSELLER PRODUCTS
        </h3>
        <ProductList variant="product" />
      </Container>

      <Sponsors />
    </div>
  );
}
