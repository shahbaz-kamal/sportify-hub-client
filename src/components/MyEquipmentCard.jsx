import React, { useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipmentCard = ({
  product,
  index,
  loggedInUsersProduct,
  setLoggedInUsersProduct,
}) => {
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

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const toBedeleted = fetch(
          `https://sportify-hub-server-navy.vercel.app/my-equipment/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const newProduct = loggedInUsersProduct.filter(
                (product) => product._id !== _id
              );
              setLoggedInUsersProduct(newProduct);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
    // const handleDelete = () => {
    //   const data = fetch(`https://sportify-hub-server-navy.vercel.app/my-equipment/${_id}`, {
    //     method: "DELETE",
    //   })
    //     .then((res) => res.json())
    //     .then((info) => {
    //       console.log(info);
    //       Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!",
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //           if (info.deletedCount > 0) {
    //             const newProduct = loggedInUsersProduct.filter(
    //               (product) => product._id !== _id
    //             );
    //             setLoggedInUsersProduct(newProduct);
    //             Swal.fire({
    //               title: "Deleted!",
    //               text: "Your product has been deleted.",
    //               icon: "success",
    //             });
    //           }
    //         }
    //       });
    //     });
    // };

  return (
    <div className="card bg-base-100  shadow-xl border border-light-primary border-opacity-50 dark:bg-neutral  dark:border-dark-secondary dark:border-opacity-50 ">
      <figure className="px-10 pt-10 h-56 w-full">
        <img
          src={photo}
          alt="Shoes"
          className="w-full h-full object-cover rounded-xl"
        />
      </figure>
      <div className="px-10 pb-10 pt-4  text-center flex flex-col items-center md:items-start text-light-color-text dark:text-dark-color-text">
        <h2 className="font-semibold text-lg md:text-xl dark:text-dark-color-text">
          {product_name}
        </h2>
        <hr className="border-t border-light-primary w-full border-opacity-40 my-2 dark:border-dark-secondary dark:border-opacity-40" />
        <div className="flex items-center justify-between gap-2 w-full">
          <p>
            <span className="">Category : </span>
            <span className="opacity-75">{category}</span>
          </p>
          <p>
            <span className="">price : </span>
            <span className="opacity-75">${price}</span>
          </p>
        </div>
        <hr className="border-t border-light-primary w-full border-opacity-40 my-2 dark:border-dark-secondary dark:border-opacity-40" />

        <div className="text-start">
          <span className="">Description : </span>
          <span className="opacity-75">{description}</span>
        </div>
        <p className="mt-2">
          <span className="">Customization : </span>
          <span className="opacity-75">{customization}</span>
        </p>
        <p className="mt-2">
          <span className="">Status : </span>
          <span className="opacity-75">
            {stock_status == "true" ? "Available" : "Not Available"}
          </span>
        </p>
        <hr className="border-t border-light-primary w-full border-opacity-40 my-2 dark:border-dark-secondary dark:border-opacity-40" />
        <div className=" inline-flex justify-between items-center w-full">
          <div className="">
            <Link to={`/details/${_id}`}>
              <button className="btn btn-primary bg-light-primary text-light-color-text border-light-primary hover:bg-light-secondary hover:border-light-secondary transition duration-300 ease-in-out dark:bg-dark-primary dark:border-dark-primary dark:hover:bg-dark-secondary dark:hover:text-dark-color-text dark:hover:border-dark-secondary">
                View Details
              </button>
            </Link>
          </div>
          <div className="flex gap-3">
            <Link to={`/update/${_id}`}>
              <div
                className="bg-[#E6F7FF] dark:bg-[#001F3F]  p-2 rounded-full"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Edit this Product"
                data-tooltip-place="top"
              >
                <CiEdit color="#1E90FF" size={25}></CiEdit>
              </div>
            </Link>
            <div
              onClick={handleDelete}
              className="bg-[#F5F5F5] dark:bg-[#2C2C2C] p-2 rounded-full"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Delete this Product"
              data-tooltip-place="top"
            >
              <FaTrash color="red" size={25}></FaTrash>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEquipmentCard;
