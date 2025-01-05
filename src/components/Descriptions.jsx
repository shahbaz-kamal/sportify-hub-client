import React from "react";
import { Fade } from "react-awesome-reveal";

const Descriptions = ({ description }) => {
  return (
    <div className="flex justify-center">
      <Fade duration={1000} direction="left">
        <p className="mb-4 md:mb-5text-center text-base md:text-lg text-light-color-text dark:text-dark-color-text opacity-80">
          {description}
        </p>
      </Fade>
    </div>
  );
};

export default Descriptions;
