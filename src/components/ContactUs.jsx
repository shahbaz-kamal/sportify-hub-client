import React, { useContext } from "react";
import Title from "./Title";
import Descriptions from "./Descriptions";
import { AuthContext } from "../Provider/AuthProvider";
import contactLight from "../assets/contact-light.png";
import contactDark from "../assets/contact-dark.png";
import { FaLocationArrow } from "react-icons/fa";
import { CiLocationOn, CiPhone, CiVoicemail } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

const ContactUs = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mx-auto">
      <header className="mb-4">
        <Title title={"Contact Us"}> </Title>
        <Descriptions description={"We want to hear from You"}></Descriptions>
      </header>
      <section className="flex flex-col md:flex-row gap-8 justify-between items-center">
        <Fade className="flex-grow" duration={1200} direction="left">
          {" "}
          <div className="flex-grow">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 md:mb-10">
              {user && user?.email ? (
                <div>
                  <label className="text-light-color-text dark:text-dark-color-text">
                    <span className="font-semibold  text-base md:text-lg">
                      Name
                    </span>
                  </label>
                  <input
                    className="bg-base-200 text-light-color-text  w-full px-3 py-4 rounded-md  mt-2 md:mt-4 placeholplaceholder-light-color-text-60  placeholder:text-base md:placeholder:text-lg "
                    type="text"
                    name="name"
                    value={user.displayName}
                  />
                </div>
              ) : (
                <div>
                  <label className="text-light-color-text dark:text-dark-color-text">
                    <span className="font-semibold  text-base md:text-lg">
                      Name
                    </span>
                  </label>
                  <input
                    className="bg-base-200 text-light-color-text  w-full px-3 py-4 rounded-md  mt-2 md:mt-4 placeholplaceholder-light-color-text-60  placeholder:text-base md:placeholder:text-lg "
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                  />
                </div>
              )}
              {user && user?.email ? (
                <div>
                  <label className="text-light-color-text dark:text-dark-color-text">
                    <span className="font-semibold  text-base md:text-lg ">
                      Email
                    </span>
                  </label>
                  <input
                    className="w-full px-3 py-4 rounded-md bg-base-200 text-light-color-text  mt-2 md:mt-4 placeholder-light-color-text-60  placeholder:text-base md:placeholder:text-lg "
                    type="email"
                    name="email"
                    value={user.email}
                  />
                </div>
              ) : (
                <div>
                  <label className="text-light-color-text dark:text-dark-color-text">
                    <span className="font-semibold  text-base md:text-lg ">
                      Email
                    </span>
                  </label>
                  <input
                    className="w-full px-3 py-4 rounded-md bg-base-200 text-light-color-text  mt-2 md:mt-4 placeholder-light-color-text-60  placeholder:text-base md:placeholder:text-lg "
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                </div>
              )}
              <div>
                <label className="text-light-color-text dark:text-dark-color-text">
                  <span className="font-semibold  text-base md:text-lg ">
                    Phone Number
                  </span>
                </label>
                <input
                  className="w-full px-3 py-4 rounded-md bg-base-200 text-light-color-text  mt-2 md:mt-4 placeholder-light-color-text-60  placeholder:text-base  md:placeholder:text-lg"
                  type="number"
                  name="number"
                  placeholder="Enter Your Phone "
                />
              </div>

              <div>
                <label className="text-light-color-text dark:text-dark-color-text">
                  <span className="font-semibold  text-base md:text-lg ">
                    Subject
                  </span>
                </label>
                <input
                  className="w-full px-3 py-4 rounded-md bg-base-200 text-light-color-text  mt-2 md:mt-4 placeholder-light-color-text-60  placeholder:text-base  md:placeholder:text-lg"
                  type="text"
                  name="subject"
                  placeholder="Enter Subject "
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-light-color-text dark:text-dark-color-text">
                  <span className="font-semibold text-base md:text-lg">
                    Message
                  </span>
                </label>
                <textarea
                  className="w-full px-3 py-4 rounded-md bg-base-200 text-light-color-text mt-2 md:mt-4 placeholder-light-color-text-60 placeholder:text-base md:placeholder:text-lg"
                  name="smessage"
                  placeholder="Enter your message"
                  rows="4"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <input
                  className="w-full  py-3 border-2 bg-light-primary  border-light-primary rounded-md hover:bg-light-accent hover:border-light-accent text-xl md:text-2xl
            transition duration-300 ease-in-out dark:bg-dark-primary text-light-color-text dark:border-dark-primary dark:hover:bg-dark-secondary dark:hover:border-dark-secondary dark:hover:text-dark-color-text"
                  type="submit"
                  value="Message Us"
                />
              </div>
            </form>
          </div>
        </Fade>
     <Fade duration={1200} direction="right">   <div className="flex flex-col justify-center items-center gap-3">
          <div className="dark:hidden w-[300px]">
            <img
              className="w-full h-full object-cover"
              src={contactLight}
              alt=""
            />
          </div>
          <div className="hidden dark:block w-[300px]">
            <img
              className="w-full h-full object-cover"
              src={contactDark}
              alt=""
            />
          </div>
          <div className="space-y-2">
            {/* address */}
            <div className="flex gap-3 items-center ">
              <div className="p-2 bg-[#d0e2b5] inline-block rounded-full bg-opacity-50  text-light-accent dark:bg-dark-primary dark:bg-opacity-30 dark:text-dark-primary">
                <CiLocationOn size={30}></CiLocationOn>
              </div>
              <div>
                <p className="font-semibold text-light-color-text dark:text-dark-color-text text-base md:text-lg">
                  Address
                </p>
                <p className="text-light-color-text dark:text-dark-color-text">
                  Nikunja-2, Dhaka, Bangladesh
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="p-2 bg-[#d0e2b5] inline-block rounded-full bg-opacity-50  text-light-accent dark:bg-dark-primary dark:bg-opacity-30 dark:text-dark-primary">
                <CiPhone size={30}></CiPhone>
              </div>
              <div>
                <p className="font-semibold text-light-color-text dark:text-dark-color-text text-base md:text-lg">
                  Phone
                </p>
                <p className="text-light-color-text dark:text-dark-color-text">
                  +88 01799839985
                </p>
              </div>
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&to=shahbazkamal384@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center cursor-pointer"
            >
              <div className="p-2 bg-[#d0e2b5] inline-block rounded-full bg-opacity-50 text-light-accent dark:bg-dark-primary dark:bg-opacity-30 dark:text-dark-primary">
                <MdEmail size={30}></MdEmail>
              </div>
              <div>
                <p className="font-semibold text-light-color-text dark:text-dark-color-text text-base md:text-lg">
                  Email
                </p>
                <p className="text-light-color-text dark:text-dark-color-text">
                  shahbazkamal384@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div></Fade>
      </section>
    </div>
  );
};

export default ContactUs;
