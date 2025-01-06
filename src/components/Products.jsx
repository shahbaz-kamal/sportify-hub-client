import React from "react";
import { Fade } from "react-awesome-reveal";
import Title from "./Title";
import Descriptions from "./Descriptions";
import ProductCard from "./ProducTCard";
import { Link } from "react-router-dom";

const Products = ({ allProductData }) => {
  return (
    <div className="mb-6 md:mb-10 ">
      <Title title={"  Our Products"}></Title>

      <Descriptions
        description={"Have some glimpse of our available equipment"}
      ></Descriptions>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mb-6">
        {allProductData.slice(0, 6).map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      <div className="text-center">
        {" "}
        <Link to={"/all-equipment"}>
          <button className="btn btn-primary bg-light-primary text-light-color-text border-light-primary hover:bg-light-secondary hover:border-light-secondary transition duration-300 ease-in-out dark:bg-dark-primary dark:border-dark-primary dark:hover:bg-dark-secondary dark:hover:text-dark-color-text dark:hover:border-dark-secondary">
            Browse All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
