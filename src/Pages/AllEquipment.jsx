import React, { useState } from "react";
import Title from "../components/Title";
import Descriptions from "../components/Descriptions";
import { FaSortAmountDown } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProducTCard";
import EquipmentTable from "../components/EquipmentTable";

const AllEquipment = () => {
  const allProductData = useLoaderData();
  const [productData, setProductData] = useState(allProductData);

  const handleSort = () => {
    const sortedData = [...productData].sort((a, b) => b.price - a.price);

    setProductData(sortedData);
  };
  return (
    <div className="mx-2 md:mx-0">
      {" "}
      <div className="container mx-auto">
        <div>
          <Title title={"All Products"}></Title>
        </div>
        <div className="mb-4">
          <Descriptions
            description={"Here is a list of our All Available products"}
          ></Descriptions>
        </div>
        <div onClick={handleSort} className="flex justify-end mb-4 md:mb-6">
          <button className="flex gap-2 items-center justify-center bg-light-primary hover:bg-light-secondary py-2 px-3 rounded-lg dark:bg-dark-primary dark:border-dark-primary dark:hover:bg-dark-secondary dark:hover:text-dark-color-text dark:hover:border-dark-secondary duration-300 transition ease-in-out text-base md:text-xl">
            <span>
              <FaSortAmountDown />
            </span>
            <span> Sort by Price </span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* <div className="overflow-x-auto mb-6 md:mb-10">
       <table className="table">
         head
         <thead className="dark:text-dark-color-text">
           <tr>
             <th>
               <p>SL. No.</p>
             </th>
             <th>Product name & category</th>
             <th>Description</th>
             <th>Price</th>
             <th>Customization</th>
             <th>Status</th>
             <th>Available Quantity</th>
             <th>Rating</th>
             <th>Action</th>
           </tr>
         </thead>
         <tbody>
           {productData.map((product, index) => (
             <EquipmentTable
               key={product._id}
               product={product}
               index={index}
             ></EquipmentTable>
           ))}
         </tbody>
       </table>
     </div> */}
          {productData.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEquipment;
