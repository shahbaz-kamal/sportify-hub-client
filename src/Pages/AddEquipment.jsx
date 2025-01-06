import React, { useContext } from "react";

import Title from "../components/Title";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation } from "react-router-dom";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);

  const location = useLocation();
  console.log(location.pathname);
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const category = form.category.value;
    const productName = form.product.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processingTime = form.processingTime.value;
    const customization = form.customization.value;
    const stockStatus = form.stockStatus.value;
    const availableQuantity = form.availableQuantity.value;
    const photo = form.photo.value;
    const newProduct = {
      category,
      product_name: productName,
      description,
      price,
      rating,
      processing_time: processingTime,
      customization,
      stock_status: stockStatus,
      available_quantity: availableQuantity,
      photo,
      user_email: user?.email,
      last_signin_time: user?.metadata.lastSignInTime,
    };
    console.log(newProduct);
    fetch("https://sportify-hub-server-navy.vercel.app/all-products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Prduct is added successfully",
          text: "",
          icon: "success",
        });
      });
  };

  return (
    <div className="text-light-color-text w-full md:max-w-[72%] lg:max-w-[68.75%] px-2 md:px-0 mx-auto pt-6 bg-base-100 rounded-lg shadow-xl py-4 md:py-5 mb-6 md:mb-10 dark:bg-neutral dark:text-dark-color-text ">
      <div>
        {/* <div className="mb-8 md:mb-12">
          <Link to={"/"}>
            <BackToHome></BackToHome>
          </Link>
        </div> */}
        <div className="  px-10 md:px-16 lg:px-28 rounded-md">
          <div>
            <div className="mb-5 md:mb-7">
              <Title title={" Add New Product"}></Title>
            </div>
            <form
              onSubmit={handleAddProduct}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 md:mb-10"
            >
              {user && user?.email ? (
                <div>
                  <label className="">
                    <span className="font-semibold  text-base md:text-lg">
                      Name
                    </span>
                  </label>
                  <input
                    className="bg-base-200 text-light-color-text  w-full px-3 py-4 rounded-md  mt-2 md:mt-4 placeholplaceholder-light-color-text-60  placeholder:text-base md:placeholder:text-lg "
                    type="text"
                    name="name"
                    value={user.displayName}
                  />
                </div>
              ) : (
                ""
              )}
              {user && user?.email ? (
                <div>
                  <label className="">
                    <span className="font-semibold  text-base md:text-lg ">
                      Email
                    </span>
                  </label>
                  <input
                    className="w-full px-3 py-4 rounded-md bg-base-200 text-light-color-text  mt-2 md:mt-4 placeholder-light-color-text-60  placeholder:text-base md:placeholder:text-lg "
                    type="email"
                    name="email"
                    value={user.email}
                  />
                </div>
              ) : (
                ""
              )}
              <div>
                <label className="">
                  <span className="font-semibold  text-base md:text-lg ">
                    Category Name
                  </span>
                </label>
                <input
                  className="w-full px-3 py-4 rounded-md bg-base-200 text-light-color-text  mt-2 md:mt-4 placeholder-light-color-text-60  placeholder:text-base  md:placeholder:text-lg"
                  type="text"
                  name="category"
                  placeholder="Enter category Name"
                />
              </div>
              <div>
                <label className="">
                  <span className="font-semibold  text-base md:text-lg ">
                    Product Name
                  </span>
                </label>
                <input
                  className="w-full px-3 py-4 rounded-md bg-base-200 text-light-color-text  mt-2 md:mt-4 placeholder-light-color-text-60  placeholder:text-base md:placeholder:text-lg"
                  type="text"
                  name="product"
                  placeholder="Enter product Name"
                />
              </div>
              <div>
                <label className="">
                  <span className="font-semibold  text-base md:text-lg ">
                    Description
                  </span>
                </label>
                <input
                  className="w-full px-3 py-4 rounded-md bg-base-200 text-light-color-text  mt-2 md:mt-4 placeholder-light-color-text-60  placeholder:text-base md:placeholder:text-lg"
                  type="text"
                  name="description"
                  placeholder="Enter Description"
                />
              </div>
              <div>
                <label className="">
                  <span className="font-semibold  text-base md:text-lg ">
                    Price
                  </span>
                </label>
                <input
                  className="w-full px-3 py-4 rounded-md bg-base-200 text-light-color-text  mt-2 md:mt-4 placeholder-light-color-text-60  placeholder:text-base md:placeholder:text-lg"
                  type="number"
                  name="price"
                  placeholder="Enter product price"
                  step={0.01}
                />
              </div>
              <div>
                <label className="">
                  <span className="font-semibold  text-base md:text-lg ">
                    Rating
                  </span>
                </label>
                <input
                  className="w-full px-3 py-4 rounded-md bg-base-200 text-light-color-text  mt-2 md:mt-4 placeholder-light-color-text-60  placeholder:text-base md:placeholder:text-lg"
                  type="number"
                  name="rating"
                  step={0.1}
                  min={0}
                  max={5}
                  placeholder="Enter Product Rating (Out of 5)"
                />
              </div>
              <div>
                <label className="">
                  <span className="font-semibold  text-base md:text-lg ">
                    Processing Time
                  </span>
                </label>
                <select
                  className="w-full px-3 py-4 rounded-md bg-base-200 text-light-color-text  mt-2 md:mt-4 placeholder-light-color-text-60  placeholder:text-base md:placeholder:text-lg"
                  type="number"
                  name="processingTime"
                  placeholder="Enter Processing Time"
                >
                  <option
                    disabled
                    selected
                    className=""
                    value="Instant (just delivery time for online orders)"
                  >
                    Instant (just delivery time for online orders)
                  </option>
                  <option value="Within 1 day">Within 1 day</option>
                  <option value="1-2 days">1-2 days</option>
                  <option value="3-5 days">3-5 days</option>
                  <option value="Within 1 week">Within 1 week</option>
                  <option value="Within 1 month">Within 1 month </option>
                </select>
              </div>
              <div>
                <label className="">
                  <span className="font-semibold  text-base md:text-lg ">
                    Customization
                  </span>
                </label>
                <input
                  className="w-full px-3 py-4 rounded-md bg-base-200 text-light-color-text  mt-2 md:mt-4 placeholder-light-color-text-60  placeholder:text-base md:placeholder:text-lg"
                  type="text"
                  name="customization"
                  placeholder="Enter customization information"
                />
              </div>
              <div className="">
                <label className="">
                  <span className="font-semibold  text-base md:text-lg ">
                    Stock Status
                  </span>
                </label>
                <select
                  className="selct select-bordered w-full px-3 py-4 rounded-md bg-base-200 text-light-color-text  mt-2 md:mt-4 placeholder-light-color-text-60  placeholder:text-base md:placeholder:text-lg"
                  name="stockStatus"
                  placeholder="Select Stock status"
                >
                  <option disabled selected className="" value="">
                    Select Stock Status
                  </option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
              <div className="">
                <label className="">
                  <span className="font-semibold  text-base md:text-lg ">
                    Available Quantity
                  </span>
                </label>
                <input
                  className="w-full px-3 py-4 rounded-md bg-base-200 text-light-color-text  mt-2 md:mt-4 placeholder-light-color-text-60  placeholder:text-base md:placeholder:text-lg"
                  type="number"
                  name="availableQuantity"
                  placeholder="Enter Available Quantity"
                />
              </div>
              <div className="">
                <label className="">
                  <span className="font-semibold  text-base md:text-lg ">
                    Enter Photo URL
                  </span>
                </label>
                <input
                  className=" w-full px-3 py-4 rounded-md bg-base-200 text-light-color-text  mt-2 md:mt-4 placeholder-light-color-text-60  placeholder:text-base md:placeholder:text-lg"
                  type="text"
                  name="photo"
                  placeholder="Enter Photo URL"
                />
              </div>
              <div className="md:col-span-2">
                <input
                  className="w-full  py-3 border-2 bg-light-primary  border-light-primary rounded-md hover:bg-light-accent hover:border-light-accent text-xl md:text-2xl
            transition duration-300 ease-in-out dark:bg-dark-primary text-light-color-text dark:border-dark-primary dark:hover:bg-dark-secondary dark:hover:border-dark-secondary dark:hover:text-dark-color-text"
                  type="submit"
                  value="Add Product"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEquipment;
