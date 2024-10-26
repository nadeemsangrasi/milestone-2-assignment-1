import React from "react";

import Image from "next/image";

import { IProductDataProp } from "../sections/ProductSection";
import Button from "./Button";

const ProductCard = ({ data }: { data: IProductDataProp }) => {
  return (
    <div className="w-[340px]   rounded-lg  mx-auto lg:mx-0">
      <div className="overflow-hidden relative group">
        <Image
          src={data.img}
          alt="product image"
          className="w-full  rounded-l  "
        />
      </div>

      <div>
        <div className="flex justify-between items-center">
          <h1 className="mt-2 text-2xl tracking-tight font-semibold">
            {data.title}
          </h1>
        </div>
        <div className="flex justify-between items-center mb-1">
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            {data.category}
          </p>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            {data.brand}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-medium text-green-600">$120</p>
        </div>
      </div>

      <div className="flex justify-between mt-2 gap-4">
        <Button label="Add to cart" className="w-1/2 mx-auto" />
      </div>
    </div>
  );
};

export default ProductCard;
