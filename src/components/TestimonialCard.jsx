import React from "react";

const TestimonialCard = ({ name, profession, country, mouth, image }) => {
  return (
    <div className="card bg-base-100  shadow-xl border border-light-primary border-opacity-50 dark:bg-neutral  dark:border-dark-secondary dark:border-opacity-50 ">
      <figure className="px-6 pt-6 h-80 w-full">
        <img
          src={image}
          alt="Shoes"
          className="w-full h-full object-cover rounded-xl"
        />
      </figure>
      <div className="px-10 pb-10 pt-4  text-center flex flex-col items-center md:items-start text-light-color-text dark:text-dark-color-text">
        <h2 className="font-semibold text-lg md:text-xl dark:text-dark-color-text">
          {name}
        </h2>
        <hr className="border-t border-light-primary w-full border-opacity-40 my-2 dark:border-dark-secondary dark:border-opacity-40" />
        <div className="flex items-center justify-between gap-2 w-full">
          <p>
      
            <span className="opacity-75">{profession}</span>
          </p>
          <p>
         
            <span className="opacity-75">{country}</span>
          </p>
        </div>
        <hr className="border-t border-light-primary w-full border-opacity-40 my-2 dark:border-dark-secondary dark:border-opacity-40" />

        <div className="text-start">
       
          <span className="opacity-75 italic">{mouth}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
