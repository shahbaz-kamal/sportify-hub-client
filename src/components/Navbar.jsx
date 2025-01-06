import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/sportify_hub_logo.webp";
import logoDark from "../../src/assets/sportify_hub_logo_for_dark.png";
import { Fade } from "react-awesome-reveal";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { IoMdLogOut } from "react-icons/io";
import { TbLogin } from "react-icons/tb";

const Navbar = () => {
  const { user, setUser, logOut } = useContext(AuthContext);
  console.log(user?.photoURL);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        Swal.fire({
          // title: "Good job!",
          text: "Log Out Successfull",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `rounded-md transition-all duration-300 ${
            isActive
              ? " bg-light-secondary font-semibold underline dark:bg-dark-secondary dark:text-dark-color-text text-sm"
              : "hover:underline text-sm"
          }`
        }
      >
        <li className="px-2 py-2 hover:underline">Home</li>
      </NavLink>
      <NavLink
        to={"/all-equipment"}
        className={({ isActive }) =>
          `rounded-md transition-all duration-300 ${
            isActive
              ? "bg-light-secondary font-semibold underline dark:bg-dark-secondary dark:text-dark-color-text text-sm"
              : "hover:underline text-sm"
          }`
        }
      >
        <li className="px-2 py-2 hover:underline">All Products</li>
      </NavLink>
      {user && user?.email ? (
        <NavLink
          to={"/add-equipment"}
          className={({ isActive }) =>
            `rounded-md transition-all duration-300 ${
              isActive
                ? "bg-light-secondary font-semibold underline dark:bg-dark-secondary dark:text-dark-color-text text-sm"
                : "hover:underline text-sm"
            }`
          }
        >
          <li className="px-2 py-2 hover:underline">Add Product</li>
        </NavLink>
      ) : (
        ""
      )}
      {user && user?.email ? (
        <NavLink
          to={"/my-equipment"}
          className={({ isActive }) =>
            `rounded-md transition-all duration-300 ${
              isActive
                ? "bg-light-secondary font-semibold underline dark:bg-dark-secondary dark:text-dark-color-text text-sm"
                : "hover:underline text-sm"
            }`
          }
        >
          <li className="px-2 py-2 hover:underline">My Product</li>
        </NavLink>
      ) : (
        ""
      )}
      {/* FAQ */}
      <NavLink
        to={"/faq"}
        className={({ isActive }) =>
          `rounded-md transition-all duration-300 ${
            isActive
              ? "bg-light-secondary font-semibold underline dark:bg-dark-secondary dark:text-dark-color-text text-sm"
              : "hover:underline text-sm"
          }`
        }
      >
        <li className="px-2 py-2 hover:underline">FAQ</li>
      </NavLink>
      {/* contact */}
      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          `rounded-md transition-all duration-300 ${
            isActive
              ? "bg-light-secondary font-semibold underline dark:bg-dark-secondary dark:text-dark-color-text text-sm"
              : "hover:underline text-sm"
          }`
        }
      >
        <li className="px-2 py-2 hover:underline">Contact Us</li>
      </NavLink>
    </>
  );
  const [isDarkMode, setIsDarkMode] = useState(false);
  //   const themeToggle = () => {};

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);
  console.log(isDarkMode);
  return (
    <div className="navbar container mx-auto text-[#333333] ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2 text-light-color-text dark:text-dark-color-text"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Fade duration={1200} triggerOnce={false} direction="down">
            {" "}
            <div className="h-12 ">
              {/* dark:border dark:border-dark-color-text dark:rounded-full dark:p-1 */}
              {isDarkMode ? (
                <img
                  className="h-full object-cover rounded-full"
                  src={logoDark}
                  alt=""
                />
              ) : (
                <img
                  className="h-full object-cover rounded-full"
                  src={logo}
                  alt=""
                />
              )}
            </div>
          </Fade>

          <Fade duration={1200} triggerOnce={true} direction="down">
            <p className="text-2xl font-bold text-light-color-text dark:text-dark-color-text hidden md:inline-flex">
              Sportify Hub
            </p>
          </Fade>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex text-light-color-text dark:text-dark-color-text">
        <ul className="menu menu-horizontal px-1 gap-2 text-light-color-text dark:text-dark-color-text">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {user && user?.email ? (
          <div
            data-tooltip-id="my-tooltip"
            data-tooltip-content={user && user.email ? user.displayName : ""}
            data-tooltip-place="top"
            className="w-10 h-10 z-10 "
          >
            <img
              className="w-full h-full object-cover rounded-full"
              src={user.photoURL || ""}
              alt="User photo"
            />
          </div>
        ) : (
          ""
        )}

        {user && user?.email ? (
          <Fade duration={1200} triggerOnce={false} direction="down">
            <button
              onClick={handleLogOut}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Login to see private content"
              data-tooltip-place="top"
              className="text-base md:text-lg px-3 py-2 rounded-lg font-semibold bg-light-primary text-light-color-text hover:bg-light-secondary dark:bg-dark-primary dark:hover:text-dark-color-text dark:hover:bg-dark-secondary transition ease-in-out duration-300"
            >
              <span className="hidden md:block"> Log Out </span>{" "}
              <span className="md:hidden text-black">
                <IoMdLogOut />
              </span>
            </button>
          </Fade>
        ) : (
          <Link to={"/log-in"}>
            <Fade duration={1200} triggerOnce={false} direction="down">
              <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Login to see private content"
                data-tooltip-place="top"
                className="text-base md:text-lg px-3 py-2 rounded-lg font-semibold bg-light-primary text-light-color-text hover:bg-light-secondary dark:bg-dark-primary dark:hover:text-dark-color-text dark:hover:bg-dark-secondary transition ease-in-out duration-300"
              >
                <span className="hidden md:block"> Log In</span>{" "}
                <span className="md:hidden text-black">
                <TbLogin />
                </span>
              </button>
            </Fade>
          </Link>
        )}

        {user && user?.email ? (
          ""
        ) : (
          <Link to={"/register"}>
            <Fade duration={1200} triggerOnce={false} direction="down">
              <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Register to see private content"
                data-tooltip-place="top"
                className="text-base md:text-lg px-3 py-2 rounded-lg font-semibold bg-light-primary text-light-color-text hover:bg-light-secondary dark:bg-dark-primary dark:hover:text-dark-color-text dark:hover:bg-dark-secondary transition ease-in-out duration-300"
              >
                Register
              </button>
            </Fade>
          </Link>
        )}
        <Fade duration={1200} triggerOnce={false} direction="down">
          <label className="flex cursor-pointer gap-2 items-center justify-center">
            <svg
              className="dark:text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              onChange={(e) => setIsDarkMode(!isDarkMode)}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              className="dark:text-dark-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </Fade>
      </div>
    </div>
  );
};

export default Navbar;
