import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const ProductShowcaseSection = (): JSX.Element => {
  const products = [
    { id: 1, image: "..//product-cover-5.png" },
    { id: 2, image: "..//product-cover-5-1.png" },
    { id: 3, image: "..//product-cover-5-2.png" },
    { id: 4, image: "..//product-cover-5-3.png" },
    { id: 5, image: "..//product-cover-5-4.png" },
    { id: 6, image: "..//product-cover-5-5.png" },
    { id: 7, image: "..//product-cover-5-6.png" },
    { id: 8, image: "..//product-cover-5-7.png" },
    { id: 9, image: "..//product-cover-5-8.png" },
    { id: 10, image: "..//product-cover-5-9.png" },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-col items-center max-w-[692px] text-center">
          <div className="flex flex-col items-center gap-2.5">
            <p className="font-['Montserrat',Helvetica] font-normal text-[#727272] text-xl tracking-[0.20px] leading-[30px]">
              Featured Products
            </p>
            <h2 className="font-['Montserrat',Helvetica] font-bold text-[#252b42] text-2xl tracking-[0.10px] leading-8">
              BESTSELLER PRODUCTS
            </h2>
            <p className="font-['Montserrat',Helvetica] font-normal text-[#727272] text-sm tracking-[0.20px] leading-5">
              Problems trying to resolve the conflict between
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[30px] p-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="w-full bg-white border-none shadow-none"
              >
                <div
                  className="w-full h-[238px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <CardContent className="flex flex-col items-center gap-2.5 pt-[25px] pb-[35px] px-[25px]">
                  <h3 className="font-['Montserrat',Helvetica] font-bold text-[#252b42] text-base text-center tracking-[0.10px] leading-6">
                    Graphic Design
                  </h3>
                  <p className="font-['Montserrat',Helvetica] font-bold text-[#727272] text-sm text-center tracking-[0.20px] leading-6">
                    English Department
                  </p>
                  <div className="flex items-start gap-[5px] py-[5px] px-[3px]">
                    <span className="font-['Montserrat',Helvetica] font-bold text-muted-color text-base text-center tracking-[0.10px] leading-6">
                      $16.48
                    </span>
                    <span className="font-['Montserrat',Helvetica] font-bold text-[#23856d] text-base text-center tracking-[0.10px] leading-6">
                      $6.48
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          className="font-['Montserrat',Helvetica] font-bold text-primary-color text-sm tracking-[0.20px] leading-[22px] border-[#23a6f0] rounded-[5px] px-10 py-[15px]"
        >
          LOAD MORE PRODUCTS
        </Button>
      </div>
    </section>
  );
};