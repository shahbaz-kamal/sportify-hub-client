import React from "react";
import { FaRegEye, FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const EquipmentTable = ({ product, index }) => {
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
    <>
      <tr className="dark:text-dark-color-text">
        <th>{index + 1}</th>
        <td>
          <div className="inline-flex items-center gap-3">
            <div className="">
              <div className="rounded-xl h-12 w-12">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={photo}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{product_name}</div>
              <div className="text-sm opacity-50">{category}</div>
            </div>
          </div>
        </td>

        <td>{description}</td>
        <td>${price}</td>
        <td>{customization}</td>
        <td>{stock_status == "true" ? "Available" : "Not Available"}</td>
        <td className="text-center">{available_quantity}</td>
        <td className="text-center">{rating}</td>
        <td>
          <div className="flex  mr-6 gap-4 f-row">
            <Link>
              <div className="relative group">
                <div className="absolute top-[-25px] left-0 right-0 text-center text-light-color-text   rounded opacity-0 group-hover:opacity-100  transition-opacity duration-300 ease-in-out">
                  Details
                </div>
                <Link to={`/details/${_id}`}>
                  <div className=" rounded-md p-[10px] hover:cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
                    <FaRegEye color="#03A9F4" size={25}></FaRegEye>
                  </div>
                </Link>
              </div>
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};

export default EquipmentTable;
