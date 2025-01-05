import React from "react";
import Title from "./Title";

const SportsCategory = ({ allProductData }) => {
  //   console.log(allProductData);

  //   const dummyData = [];
  //   const categoryData = allProductData.map;
  const dummyData = []; // To store unique category names
  const filteredData = allProductData.filter((data) => {
    if (!dummyData.includes(data.category)) {
      dummyData.push(data.category);
      return true;
    }
    return false;
  });

  console.log(dummyData);
  return (
    <div>
      <div>
        <Title title={"Sports Category"}></Title>
      </div>
      <p className="my-4 text-center text-light-color-text dark:text-dark-color-text">
        Currently we do have product in thiese kinds of category.
      </p>
      <div className="flex items-center justify-center">
        <ul className="list-inside list-decimal text-light-color-text dark:text-dark-color-text">
          {dummyData.map((singleCategory, index) => (
            <li key={index}>{singleCategory}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SportsCategory;
