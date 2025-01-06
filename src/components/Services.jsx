import React from "react";
import Title from "./Title";
import Descriptions from "./Descriptions";
import { GiAutoRepair } from "react-icons/gi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdOutlineCarRental, MdOutlineSubscriptions, MdSportsGymnastics } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaHandsHelping } from "react-icons/fa";
import { IoIosLeaf } from "react-icons/io";

const Services = () => {
  return (
    <div>
      <header className="">
        <Title title={"Services We Offer"}></Title>
        <Descriptions
          description={"Enhance Your Game with Our Premium Services"}
        ></Descriptions>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {/* services card */}
        <div className="flex flex-col justify-center items-center space-y-3 rounded-md p-6 border border-light-primary border-opacity-50 dark:bg-neutral  dark:border-dark-secondary dark:border-opacity-50 hover:bg-light-primary hover:bg-opacity-10 dark:hover:bg-dark-primary dark:hover:bg-opacity-10 transition duration-300 ease-in-out">
          <div className="text-light-accent dark:text-dark-primary">
            <GiAutoRepair size={35} />
          </div>
          <h3 className="font-bold text-lg md:text-xl text-light-color-text dark:text-dark-color-text text-center">
            Equipment Maintenance
          </h3>
          <p className="text-center text-sm md:text-base text-light-color-text dark:text-dark-color-text">
            Keep your gear in top condition with expert maintenance, including
            restringing, and fixing damages.
          </p>
        </div>
        {/* services card */}
        <div className="flex flex-col justify-center items-center space-y-3 rounded-md p-6 border border-light-primary border-opacity-50 dark:bg-neutral  dark:border-dark-secondary dark:border-opacity-50 hover:bg-light-primary hover:bg-opacity-10 dark:hover:bg-dark-primary dark:hover:bg-opacity-10 transition duration-300 ease-in-out">
          <div className="text-light-accent dark:text-dark-primary">
            <IoColorPaletteOutline size={35} />
          </div>
          <h3 className="font-bold text-lg md:text-xl text-light-color-text dark:text-dark-color-text text-center">
            Gear Customization Services
          </h3>
          <p className="text-center text-sm md:text-base text-light-color-text dark:text-dark-color-text">
            Personalize your sports gear with custom names, logos, or designs
            for jerseys, bats, and trophies.
          </p>
        </div>
        {/* services card */}
        <div className="flex flex-col justify-center items-center space-y-3 rounded-md p-6 border border-light-primary border-opacity-50 dark:bg-neutral  dark:border-dark-secondary dark:border-opacity-50 hover:bg-light-primary hover:bg-opacity-10 dark:hover:bg-dark-primary dark:hover:bg-opacity-10 transition duration-300 ease-in-out">
          <div className="text-light-accent dark:text-dark-primary">
            <MdOutlineCarRental size={35} />
          </div>
          <h3 className="font-bold text-lg md:text-xl text-light-color-text dark:text-dark-color-text text-center">
            Equipment Rental
          </h3>
          <p className="text-center text-sm md:text-base text-light-color-text dark:text-dark-color-text">
            Rent high-quality sports gear like rackets, footballs, and gym
            equipment for short-term needs.
          </p>
        </div>
        {/* services card */}
        <div className="flex flex-col justify-center items-center space-y-3 rounded-md p-6 border border-light-primary border-opacity-50 dark:bg-neutral  dark:border-dark-secondary dark:border-opacity-50 hover:bg-light-primary hover:bg-opacity-10 dark:hover:bg-dark-primary dark:hover:bg-opacity-10 transition duration-300 ease-in-out">
          <div className="text-light-accent dark:text-dark-primary">
            <CiDeliveryTruck size={35} />
          </div>
          <h3 className="font-bold text-lg md:text-xl text-light-color-text dark:text-dark-color-text text-center">
            Delivery & Setup Services
          </h3>
          <p className="text-center text-sm md:text-base text-light-color-text dark:text-dark-color-text">
            Convenient delivery and installation services for large sports
            equipment like treadmills and hoops.
          </p>
        </div>
        {/* services card */}
        <div className="flex flex-col justify-center items-center space-y-3 rounded-md p-6 border border-light-primary border-opacity-50 dark:bg-neutral  dark:border-dark-secondary dark:border-opacity-50 hover:bg-light-primary hover:bg-opacity-10 dark:hover:bg-dark-primary dark:hover:bg-opacity-10 transition duration-300 ease-in-out">
          <div className="text-light-accent dark:text-dark-primary">
            <FaHandsHelping size={35} />
          </div>
          <h3 className="font-bold text-lg md:text-xl text-light-color-text dark:text-dark-color-text text-center">
          Gear Fitting & Consultations
          </h3>
          <p className="text-center text-sm md:text-base text-light-color-text dark:text-dark-color-text">
          Receive expert advice on selecting the right equipment, from shoe fittings to cricket bat consultations.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-3 rounded-md p-6 border border-light-primary border-opacity-50 dark:bg-neutral  dark:border-dark-secondary dark:border-opacity-50 hover:bg-light-primary hover:bg-opacity-10 dark:hover:bg-dark-primary dark:hover:bg-opacity-10 transition duration-300 ease-in-out">
          <div className="text-light-accent dark:text-dark-primary">
            <MdSportsGymnastics size={35} />
          </div>
          <h3 className="font-bold text-lg md:text-xl text-light-color-text dark:text-dark-color-text text-center">
          Professional Training Sessions
          </h3>
          <p className="text-center text-sm md:text-base text-light-color-text dark:text-dark-color-text">
          Learn from top coaches with training sessions designed for athletes of all skill levels and disciplines.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-3 rounded-md p-6 border border-light-primary border-opacity-50 dark:bg-neutral  dark:border-dark-secondary dark:border-opacity-50 hover:bg-light-primary hover:bg-opacity-10 dark:hover:bg-dark-primary dark:hover:bg-opacity-10 transition duration-300 ease-in-out">
          <div className="text-light-accent dark:text-dark-primary">
            <MdOutlineSubscriptions size={35} />
          </div>
          <h3 className="font-bold text-lg md:text-xl text-light-color-text dark:text-dark-color-text text-center">
          Consumable Subscription Plans
          </h3>
          <p className="text-center text-sm md:text-base text-light-color-text dark:text-dark-color-text">
          Subscribe for regular deliveries of essentials like shuttlecocks, balls, or maintenance services.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-3 rounded-md p-6 border border-light-primary border-opacity-50 dark:bg-neutral  dark:border-dark-secondary dark:border-opacity-50 hover:bg-light-primary hover:bg-opacity-10 dark:hover:bg-dark-primary dark:hover:bg-opacity-10 transition duration-300 ease-in-out">
          <div className="text-light-accent dark:text-dark-primary">
            <IoIosLeaf size={35} />
          </div>
          <h3 className="font-bold text-lg md:text-xl text-light-color-text dark:text-dark-color-text text-center">
          Eco-Friendly Programs
          </h3>
          <p className="text-center text-sm md:text-base text-light-color-text dark:text-dark-color-text">
          Recycle old sports equipment responsibly and support our initiative for a sustainable future.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
