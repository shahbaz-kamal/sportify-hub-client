import React from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegEye, FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const EquipmentTable = ({ product, index ,loggedInUsersProduct,
  setLoggedInUsersProduct}) => {
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
        </td>
      </tr>
    </>
  );
};

export default EquipmentTable;
