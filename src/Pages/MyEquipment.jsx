import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Title from "../components/Title";
import MyEquipmentCard from "../components/MyEquipmentCard";
import EquipmentTable from "../components/EquipmentTable";

const MyEquipment = () => {
  const { user } = useContext(AuthContext);
  const allProductData = useLoaderData();
  console.log(allProductData);

  const loggedInUsersProducts = allProductData.filter((singleProductData) =>
    singleProductData?.user_email
      ? singleProductData.user_email === user.email
      : null
  );
  const [loggedInUsersProduct, setLoggedInUsersProduct] = useState(
    loggedInUsersProducts
  );

  console.log(loggedInUsersProduct);
  return (
    <div className="container mx-auto">
      <div className="mb-6 md:mb-10">
        {" "}
        {loggedInUsersProduct.length === 0 ? (
          <Title title={`No Product added by ${user?.displayName}`}></Title>
        ) : (
          <Title title={`Products added by ${user?.displayName}`}></Title>
        )}
      </div>
      <div className="overflow-x-auto mb-6 md:mb-10">
        <table className="table">
          {/* head */}
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
            {loggedInUsersProduct.map((product, index) => (
              <EquipmentTable
                key={product._id}
                product={product}
                index={index}
                setLoggedInUsersProduct={setLoggedInUsersProduct}
                loggedInUsersProduct={loggedInUsersProduct}
              ></EquipmentTable>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className=" mb-6 md:mb-10 w-full">
        {loggedInUsersProduct.map((product, index) => (
          <EquipmentTable
            key={product._id}
            product={product}
            index={index}
            allProductData={allProductData}
            setLoggedInUsersProduct={setLoggedInUsersProduct}
            loggedInUsersProduct={loggedInUsersProduct}
          ></EquipmentTable>
        ))}
      </div> */}
    </div>
  );
};

export default MyEquipment;
