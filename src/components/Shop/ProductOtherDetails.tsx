"use client";

import { Container, Tab, Tabs } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

type ProductOtherDetailProps = {
  description: string;
  images: string[];
  rating: number;
};

export default function ProductOtherDetails({
  description,
  images,
  rating,
}: ProductOtherDetailProps) {
  const [tabValue, setTabValue] = useState("description");

  const tabValues = ["description", "add-information", "reviews"];

  return (
    <div className="w-full bg-white">
      <Container maxWidth="lg">
        <Tabs
          centered
          value={tabValue}
          onChange={(e, val) => setTabValue(val)}
          className="[&_button]:!text-secondary [&_button]:font-bold  [&_.Mui-selected]:font-medium py-6 border-b border-[#ECECEC]"
          TabIndicatorProps={{
            style: {
              background: "white",
            },
          }}
        >
          <Tab value="description" label="Description" />
          <Tab value="add-information" label="Additional Information" />
          <Tab
            value="reviews"
            label={
              <span>
                Reviews{" "}
                <span className="text-price">({Math.floor(rating)})</span>
              </span>
            }
          />
        </Tabs>
        {tabValues.map((tab, idx) => {
          return (
            tabValue === tab && (
              <div
                className="flex flex-wrap items-center gap-8"
                key={`tab-${idx}`}
              >
                <div className="text-secondary text-sm flex flex-col gap-7 py-10 flex-1">
                  <h3 className="text-[#252B42] font-bold text-2xl"></h3>
                  <p>
                    <span className="block">{description}</span>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                  <p className="border-l-2 border-price pl-6">
                    <span className="block">{description}</span>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                  <p>
                    <span className="block">{description}</span>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
                <div className="flex-1">
                  <Image
                    src={images[idx]}
                    className="w-full h-full rounded-md"
                    alt={description}
                    width={427}
                    height={392}
                  />
                </div>
              </div>
            )
          );
        })}
      </Container>
    </div>
  );
}
