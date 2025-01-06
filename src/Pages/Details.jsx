import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-stars";

const Details = () => {
  const data = useLoaderData();

  console.log(data);
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
  } = data;

  return (
    <div className="container mx-auto mb-6 md:mb-10 px-2 md:px-0 bg-base-200 dark:bg-neutral rounded-md">
      <div className="flex items-center md:items-center flex-col md:flex-row gap-6 p-6 rounded-lg">
        <div className="w-[35%] rounded-lg">
          <img className="w-full object-cover rounded-lg" src={photo} alt="" />
        </div>
        <div className="flex-grow dark:text-dark-color-text">
          <h2 className="font-semibold text-lg md:text-xl dark:text-dark-color-text">
            {product_name}
          </h2>
          <hr className="border-t border-light-primary w-full border-opacity-40 my-2 dark:border-dark-secondary dark:border-opacity-40" />
          <div className="flex items-center justify-between gap-2 w-full">
            <p>
              <span className="">Category : </span>
              <span className="opacity-75">{category}</span>
            </p>
            <p className="p-2 rounded-md bg-light-primary bg-opacity-20 dark:bg-dark-primary dark:bg-opacity-20">
              <span className="opacity-75 text-light-accent font-bold dark:text-accent">
                $ {price}
              </span>
            </p>
          </div>
          <hr className="border-t border-light-primary w-full border-opacity-40 my-2 dark:border-dark-secondary dark:border-opacity-40" />

          <div className="text-start">
            <span className="">Description : </span>
            <span className="opacity-75">{description}</span>
          </div>
          <hr className="border-t border-light-primary w-full border-opacity-40 my-2 dark:border-dark-secondary dark:border-opacity-40" />
          <div className="flex items-center justify-between gap-2 w-full">
            <p className="mt-2">
              <span className="">Customization : </span>
              <span className="opacity-75">{customization}</span>
            </p>
            <p>
              <span className="">Processing Time : </span>
              <span className="opacity-75">{processing_time}</span>
            </p>
          </div>

          <hr className="border-t border-light-primary w-full border-opacity-40 my-2 dark:border-dark-secondary dark:border-opacity-40" />
          <div className="flex items-center justify-between gap-2 w-full">
            <p className="">
              <span className="">Status : </span>
              <span className="opacity-75">
                {stock_status == "true" ? "Available" : "Not Available"}
              </span>
            </p>
            <p>
              <span className="">Available quantity : </span>
              <span className="opacity-75">${available_quantity}</span>
            </p>
          </div>
          <hr className="border-t border-light-primary w-full border-opacity-40 my-2 dark:border-dark-secondary dark:border-opacity-40" />
          <div className="flex items-center justify-between gap-2 w-full">
            <p className="">
              <span className="">Rating : </span>
              <span className="opacity-75">{rating} (5)</span>
            </p>
            <div>
              <ReactStars
                count={5}
                size={24}
                color2={"#ffd700"}
                value={rating}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
