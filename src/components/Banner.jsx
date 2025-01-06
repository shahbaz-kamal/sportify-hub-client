import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./banner.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className="h-[70vh]">
      <Swiper
        className="h-[70vh] rounded-md"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="w-full">
          <div className="w-full  rounded-xl relative">
            <img
              className="w-full h-full object-cover rounded-xl"
              src="https://i.ibb.co.com/8bz9gnP/banner-1.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Fade duration={1500} triggerOnce={false} direction="down">
                <h1 className="text-light-accent dark:text-dark-primary font-bold text-xl md:text-3xl lg:text-6xl text-center mb-2">
                  Gear Up for the Game
                </h1>
              </Fade>
              <Fade duration={1500} triggerOnce={false} direction="up">
                <p className="text-center text-dark-color-text text-lg md:text-xl lg:text-2xl ">
                  Step into the world of sports with the best jerseys and shoes
                  that blend performance with style. Sportify Hub – where
                  champions are made.
                </p>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div className="w-full h-[100vh] rounded-xl relative">
            <img
              className="w-full h-full object-cover rounded-xl"
              src="https://i.ibb.co.com/N2bw1v8/cricket-equipment.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Fade duration={1500} triggerOnce={false} direction="down">
                <h1 className="text-light-accent dark:text-dark-primary font-bold text-xl md:text-3xl lg:text-6xl text-center w-full mb-2">
                  Cricket Essentials
                </h1>
              </Fade>
              <Fade duration={1500} triggerOnce={false} direction="up">
                <p className="text-center text-dark-color-text text-lg md:text-xl lg:text-2xl ">
                  Elevate your game with premium cricket gear. From bats to
                  gloves, we provide everything you need to conquer the pitch.
                </p>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div className="w-full h-[100vh] rounded-xl relative">
            <img
              className="w-full h-full object-cover rounded-xl"
              src="https://i.ibb.co.com/f4Cjtn3/footballs.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Fade duration={1500} triggerOnce={false} direction="down">
                <h1 className="text-light-accent dark:text-dark-primary font-bold text-xl md:text-3xl lg:text-6xl text-center w-full mb-2">
                  Football Gear
                </h1>
              </Fade>
              <Fade duration={1500} triggerOnce={false} direction="up">
                <p className="text-center text-dark-color-text text-lg md:text-xl lg:text-2xl ">
                  Step onto the field with confidence. Explore our collection of
                  footballs, cleats, gloves, and all the essentials to up your
                  game.
                </p>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
