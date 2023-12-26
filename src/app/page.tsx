import FurnitureGallery from "@/components/Home/FurnitureGallery";
import PostList from "@/components/Home/PostList";
import ProductList from "@/components/Home/ProductList";
import ServiceList from "@/components/Home/ServiceList";
import Testimonial from "@/components/Home/Testimonial";
import { Button, Container } from "@mui/material";
import Image from "next/image";
import BannerImage from "/public/images/home/cta-banner-bg.png";

export default async function Home() {
  return (
    <>
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
            className="w-60 py-3 text-sm text-primary border-primary"
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
        <Container
          maxWidth="lg"
          className="my-20 flex items-center flex-col gap-20"
        >
          <div className="text-center space-y-2">
            <h6 className="text-primary text-sm font-bold">Practice Advice</h6>
            <h2 className="text-[2.5rem] font-bold text-[#252B42]">
              FEATURED POSTS
            </h2>
          </div>
          <PostList />
        </Container>
        <Testimonial />
      </Container>
      <div className="h-[640px] w-full relative flex items-center justify-center overflow-hidden">
        <Image
          src={BannerImage}
          alt="cover"
          layout="cover"
          className="absolute -z-10"
        />
        <div className="flex flex-col items-center max-w-xl text-center gap-6">
          <h6 className="text-primary font-bold">
            Designing Better Experience
          </h6>
          <h2 className="font-bold text-[2.5rem]">
            Problems trying to resolve the conflict between{" "}
          </h2>
          <p className="text-secondary text-sm w-[448px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </p>
          <h3 className="text-price font-bold text-2xl">$16.48</h3>
          <Button
            variant="contained"
            className="py-3 text-sm bg-primary w-72"
            // onClick={() => alert("Load more products")}
          >
            ADD YOUR CALL TO ACTION
          </Button>
        </div>
      </div>
    </>
  );
}
