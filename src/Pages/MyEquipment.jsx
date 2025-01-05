import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Title from "../components/Title";
import MyEquipmentCard from "../components/MyEquipmentCard";

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 md:mb-10">
        {loggedInUsersProduct.map((product, index) => (
          <MyEquipmentCard
            key={product._id}
            product={product}
            index={index}
            allProductData={allProductData}
            setLoggedInUsersProduct={setLoggedInUsersProduct}
            loggedInUsersProduct={loggedInUsersProduct}
          ></MyEquipmentCard>
        ))}
      </div>
    </div>
  );
};

export default MyEquipment;
