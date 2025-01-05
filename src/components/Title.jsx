import React from "react";
import { Fade } from "react-awesome-reveal";

const Title = ({ title }) => {
  return (
    <div>
      <Fade duration={1000} direction="right">
        <h3 className="text-center text-2xl md:text-5xl font-bold mb-1 md:mb-2 text-light-color-text dark:text-dark-color-text">
          {title}
        </h3>
      </Fade>
    </div>
  );
};

export default Title;
