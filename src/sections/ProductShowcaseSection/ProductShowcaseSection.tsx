import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Skeleton } from "../../../../components/ui/skeleton";
import { useGetProductsQuery } from "../../../../store/services/products";

const ProductSkeleton = () => (
  <Card className="w-full bg-white border-none shadow-none">
    <Skeleton className="w-full h-[238px]" />
    <CardContent className="flex flex-col items-center gap-2.5 pt-[25px] pb-[35px] px-[25px]">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-6 w-1/2" />
      <div className="flex items-start gap-[5px] py-[5px] px-[3px]">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-16" />
      </div>
    </CardContent>
  </Card>
);

export const ProductShowcaseSection = (): JSX.Element => {
  const [page, setPage] = useState(0);
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const { data, isLoading, isFetching } = useGetProductsQuery({
    limit: 10,
    skip: page * 10,
  });

  // Update allProducts when new data arrives
  React.useEffect(() => {
    if (data?.products) {
      setAllProducts(prev => [...prev, ...data.products]);
    }
  }, [data?.products]);

  const hasMore = data ? (page + 1) * 10 < data.total : false;

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto flex flex-col items-center gap-6">
        {/* Header section */}
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

        {/* Product grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[30px] p-6">
            {isLoading && !allProducts.length ? (
              // Show skeletons when initially loading
              Array.from({ length: 10 }).map((_, index) => (
                <ProductSkeleton key={index} />
              ))
            ) : (
              // Show actual products
              allProducts.map((product) => (
                <Card
                  key={product.id}
                  className="w-full bg-white border-none shadow-none"
                >
                  <div
                    className="w-full h-[238px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${product.thumbnail})` }}
                  />
                  <CardContent className="flex flex-col items-center gap-2.5 pt-[25px] pb-[35px] px-[25px]">
                    <h3 className="font-['Montserrat',Helvetica] font-bold text-[#252b42] text-base text-center tracking-[0.10px] leading-6">
                      {product.title}
                    </h3>
                    <p className="font-['Montserrat',Helvetica] font-bold text-[#727272] text-sm text-center tracking-[0.20px] leading-6">
                      {product.brand}
                    </p>
                    <div className="flex items-start gap-[5px] py-[5px] px-[3px]">
                      <span className="font-['Montserrat',Helvetica] font-bold text-muted-color text-base text-center tracking-[0.10px] leading-6">
                        ${product.price}
                      </span>
                      <span className="font-['Montserrat',Helvetica] font-bold text-[#23856d] text-base text-center tracking-[0.10px] leading-6">
                        ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}

            {/* Show skeleton cards when loading more */}
            {isFetching && !isLoading && (
              Array.from({ length: 10 }).map((_, index) => (
                <ProductSkeleton key={`loading-${index}`} />
              ))
            )}
          </div>
        </div>

        {/* Load more button */}
        {hasMore && (
          <Button
            variant="outline"
            className="font-['Montserrat',Helvetica] font-bold text-primary-color text-sm tracking-[0.20px] leading-[22px] border-[#23a6f0] rounded-[5px] px-10 py-[15px]"
            onClick={loadMore}
            disabled={isLoading || isFetching}
          >
            {isLoading || isFetching ? 'Loading...' : 'LOAD MORE PRODUCTS'}
          </Button>
        )}
      </div>
    </section>
  );
};