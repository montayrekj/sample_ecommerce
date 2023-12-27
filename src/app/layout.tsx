import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import StoreProvider from "./StoreProvider";

const montserrat = Montserrat({
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "This is a sample Ecommerce site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
