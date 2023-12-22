import FurnitureGallery from "@/components/Home/FurnitureGallery";
import ProductList from "@/components/Home/ProductList";
import ServiceList from "@/components/Home/ServiceList";
import { Button, Container } from "@mui/material";

export default async function Home() {
  return (
    <Container maxWidth="xl">
      <FurnitureGallery />
      <Container maxWidth="lg" className="my-20 flex items-center flex-col">
        <div className="text-center space-y-2">
          <h4 className="text-[#737373] text-xl">Featured Products</h4>
          <h3 className="text-2xl font-bold">BESTSELLER PRODUCTS</h3>
          <p className="text-[#737373] text-sm">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <ProductList />
        <Button
          variant="outlined"
          className="w-60 py-3 text-sm text-[#23A6F0] border-[#23A6F0]"
          // onClick={() => alert("Load more products")}
        >
          LOAD MORE PRODUCTS
        </Button>
      </Container>
      <Container maxWidth="lg" className="my-20 flex items-center flex-col">
        <div className="text-center space-y-2">
          <h4 className="text-[#737373] text-xl">Featured Products</h4>
          <h3 className="text-2xl font-bold">THE BEST SERVICES</h3>
          <p className="text-[#737373] text-sm">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <ServiceList />
      </Container>
    </Container>
  );
}
