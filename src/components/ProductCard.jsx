import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const ProductCard = ({ product }) => {
  const {
    category,
    stock_status,
    rating,
    product_name,
    processing_time,
    price,
    photo,
    description,
    customization,
    available_quantity,
    _id,
  } = product;
  return (
  <Fade duration={1000} direction="bottom-right">  <div className="card bg-base-100  shadow-xl border border-light-primary border-opacity-50 dark:bg-neutral  dark:border-dark-secondary dark:border-opacity-50 ">
  <figure className="px-6 pt-6 h-56 w-full">
    <img
      src={photo}
      alt="Shoes"
      className="w-full h-full object-cover rounded-xl"
    />
  </figure>
  <div className="px-6 pb-6 pt-4  text-center flex flex-col items-center md:items-start text-light-color-text dark:text-dark-color-text">
    <h2 className="font-semibold text-lg md:text-xl dark:text-dark-color-text">
      {product_name}
    </h2>
    <hr className="border-t border-light-primary w-full border-opacity-40 my-2 dark:border-dark-secondary dark:border-opacity-40" />
    <div className="flex items-center justify-between gap-2 w-full">
      <p>
        {/* <span className="">Category : </span> */}
        <span className="opacity-75">{category}</span>
      </p>
      <p className="p-2 rounded-md bg-light-primary bg-opacity-30 dark:bg-dark-primary dark:bg-opacity-20">
        <span className="opacity-75 text-light-accent font-bold dark:text-accent">
          $ {price}
        </span>
      </p>
    </div>
    {/* <hr className="border-t border-light-primary w-full border-opacity-40 my-2 dark:border-dark-secondary dark:border-opacity-40" /> */}

    {/* <div className="text-start">
      <span className="">Description : </span>
      <span className="opacity-75">{description}</span>
    </div> */}
    {/* <p className="mt-2">
      <span className="">Customization : </span>
      <span className="opacity-75">{customization}</span>
    </p> */}
    {/* <p className="mt-2">
      <span className="">Status : </span>
      <span className="opacity-75">
        {stock_status == "true" ? "Available" : "Not Available"}
      </span>
    </p> */}
    <hr className="border-t border-light-primary w-full border-opacity-40 my-2 dark:border-dark-secondary dark:border-opacity-40" />
    <div className="flex justify-center  w-full text-light-primary dark:text-dark-primary">
      <ReactStars
        half={true}
        value={rating}
        count={5}
        size={30}
        color="#d3d3d3" // Color for unselected stars
        activeColor="#ffc107"
      ></ReactStars>
    </div>
    <hr className="border-t border-light-primary w-full border-opacity-40 my-2 dark:border-dark-secondary dark:border-opacity-40" />
    <div className=" flex items-center justify-center">
      <Link to={`/details/${_id}`}>
        <button className="btn btn-primary bg-light-primary text-light-color-text border-light-primary hover:bg-light-secondary hover:border-light-secondary transition duration-300 ease-in-out dark:bg-dark-primary dark:border-dark-primary dark:hover:bg-dark-secondary dark:hover:text-dark-color-text dark:hover:border-dark-secondary">
          View Details
        </button>
      </Link>
    </div>
  </div>
</div></Fade>
  );
};

export default ProductCard;
