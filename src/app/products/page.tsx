import React from "react";

import {
  IProductDataProp,
  prouductData,
} from "@/components/sections/ProductSection";
import Wrapper from "@/components/shared/Wrapper";
import ProductCard from "@/components/shared/ProductCard";

const ProductSection = () => {
  return (
    <Wrapper>
      <div className="pt-16">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-center">
          All Products
        </h1>
        <div className="flex  my-10  flex-wrap gap-8 mx-auto">
          {prouductData.map((data: IProductDataProp, index: number) => (
            <ProductCard key={index} data={data} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductSection;
