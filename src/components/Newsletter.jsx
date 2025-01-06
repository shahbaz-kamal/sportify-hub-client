import React from "react";
import Title from "./Title";
import newsLetterLight from "../assets/Newsletter-bro-light.png";
import newsLetterDark from "../assets/Newsletter-bro-dark.png";
import "./Newsletter.css";
import { Fade } from "react-awesome-reveal";

const Newsletter = () => {
  return (
    <div className="news flex flex-col md:flex-row gap-6 items-center justify-between px-3 md:px-4 lg:px-8 xl:px-10 py-5 rounded-xl bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-40 mx-2 md:mx-0">
      <Fade duration={1200} direction="left">
        {" "}
        <div className="md:w-[60%] lg:flex-grow">
          <h1 className="text-center md:text-left font-bold text-3xl md:text-4xl mb-2 text-light-color-text dark:text-dark-color-text ">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-xl md:text-2xl text-light-color-text dark:text-dark-color-text max-w-[800px] xl:max-w-[1000px] text-center md:text-start">
            Get insider access to deals, product launches, and sports news when
            you join our newsletter.
          </p>
          <div className="flex gap-2 mt-4 max-w-[800px] xl:max-w-[1000px]">
            <input
              className="h-12 px-3 rounded-md bg-base-200 text-light-color-text placeholder-light-color-text-60 placeholder:text-base placeholder:font-semibold flex-grow"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
            <button className="h-12 px-3 rounded-lg font-semibold bg-light-primary text-light-color-text hover:bg-light-secondary dark:bg-dark-primary dark:hover:text-dark-color-text dark:hover:bg-dark-secondary transition ease-in-out duration-300">
              Log In
            </button>
          </div>
        </div>
      </Fade>
      <Fade duration={1200} direction="right">
        {" "}
        <div className="md:h-[40vh]">
          <img
            className="dark:hidden w-full h-full object-cover"
            src={newsLetterLight}
            alt=""
          />
          <img
            className="hidden dark:block w-full h-full object-cover"
            src={newsLetterDark}
            alt=""
          />
        </div>
      </Fade>
    </div>
  );
};

export default Newsletter;
