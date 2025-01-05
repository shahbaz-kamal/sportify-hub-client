import React from "react";
import { Fade } from "react-awesome-reveal";
import Title from "./Title";
import Descriptions from "./Descriptions";
import ProductCard from "./ProducTCard";

const Products = ({ allProductData }) => {
  return (
    <div className="mb-6 md:mb-10 ">
      <Title title={"  Our Products"}></Title>

      <Descriptions description={"  Description"}></Descriptions>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {allProductData.slice(0, 6).map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
