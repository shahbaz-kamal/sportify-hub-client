import React from "react";
import Title from "../components/Title";
import missionLight from "../assets/Business mission-light.png";
import missionDark from "../assets/Business mission-dark.png";
import storyLight from "../assets/Storyboard-light.png";
import storyDark from "../assets/Storyboard-dark.png";
import { Fade } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <div className="mx-2 md:mx-0">
      {" "}
      <div className="container mx-auto ">
        <header className="mb-6 md:mb-10">
          <Title title={"About Us"}></Title>
        </header>
        {/* mission */}
        <div id="about" className="">
          <Fade duration={1200} direction="left">
            {" "}
            <section className="flex flex-col gap-4 md:flex-row md:justify-around md:items-center mb-6 md:mb-10   rounded-md bg-light-primary bg-opacity-15 dark:bg-dark-primary dark:bg-opacity-5 p-5 md:p-10">
              <div className="w-full md:w-[45%]">
                <h3 className="font-bold text-2xl md:text-3xl mb-2 text-light-color-text dark:text-dark-color-text text-center md:text-start ">
                  Our Mission
                </h3>
                <p className="text-lg md:text-xl text-light-color-text dark:text-dark-color-text text-center md:text-start">
                  At Sportify Hub, we strive to empower athletes at every level
                  by providing premium-quality sports gear that enhances
                  performance and inspires greatness. Our mission is to help
                  individuals achieve their athletic dreams with equipment
                  designed for precision, durability, and style. Whether you're
                  training for your first match or competing on the global
                  stage, Sportify Hub is here to fuel your journey to success.
                </p>
              </div>
              <div className="h-[400px] md:h-96">
                <img
                  className="w-full h-full object-cover dark:hidden"
                  src={missionLight}
                  alt=""
                />
                <img
                  className="w-full h-full object-cover hidden dark:block"
                  src={missionDark}
                  alt=""
                />
              </div>
            </section>
          </Fade>
          <Fade duration={1200} direction="right">
            {" "}
            <section className="flex flex-col md:flex-row md:justify-around md:items-center mb-6 md:mb-10   rounded-md bg-light-primary bg-opacity-15 dark:bg-dark-primary dark:bg-opacity-5 p-4 md:p-5 lg:p-10">
              <div className="md:h-[400px] lg:h-96">
                <img
                  className="w-full h-full object-cover dark:hidden"
                  src={storyLight}
                  alt=""
                />
                <img
                  className="w-full h-full object-cover hidden dark:block"
                  src={storyDark}
                  alt=""
                />
              </div>
              <div className="w-full md:w-[45%]">
                <h3 className="font-bold text-2xl md:text-3xl mb-2 text-light-color-text dark:text-dark-color-text text-center md:text-start ">
                  Our Founding Story
                </h3>
                <p className="text-lg md:text-xl text-light-color-text dark:text-dark-color-text text-center md:text-start">
                  Sportify Hub was born from a love for sports and a vision to
                  redefine how athletes connect with their gear. Frustrated by
                  the lack of quality, affordable options, our founder turned a
                  personal project into a global mission. With a passionate
                  team, we’ve created premium gear that balances innovation,
                  accessibility, and performance. Today, Sportify Hub is a
                  thriving community where athletes find tools to excel and
                  stories of triumph are written.
                </p>
              </div>
            </section>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
