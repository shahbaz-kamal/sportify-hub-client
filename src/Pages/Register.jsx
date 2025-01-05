import React, { useContext } from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { CgLogIn } from "react-icons/cg";

const Register = () => {
  // *getting data from auth provider
  const {
    googleSignInUsers,
    setLoading,
    user,
    registerUser,
    updateUser,
    setUser,
  } = useContext(AuthContext);

  // *google sign in

  const handleGoogleSignIn = () => {
    googleSignInUsers()
      .then((result) => {
        setLoading(false);
        Swal.fire({
          title: "Good job!",
          text: `Google sign in Successfull `,
          icon: "success",
        });
      })
      .catch((error) => {
        console.log("ERROR:", error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  // *Registering using email & password

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;
    const regexPass = /^.{6,}$/;
    const regexUpperCase = /[A-Z]/;
    const regexLowerCase = /[a-z]/;

    if (!regexPass.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should be at least 6 characters",
      });
      return;
    }
    if (!regexUpperCase.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should contain at least 1 uppercase letter",
      });
      return;
    }
    if (!regexLowerCase.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should contain at least 1 lowercase letter",
      });
      return;
    }

    console.log(name, email, password, photoURL);
    registerUser(email, password)
      .then((result) => {
        const newUser = result.user;
        updateUser(name, photoURL)
          .then(() => {
            const updateUser = { ...newUser, displaName: name, photoURL };
            setUser(updateUser);
          })
          .then((data) => {
            setLoading(false);
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${err.message}`,
            });
          });

        Swal.fire({
          title: "Good job!",
          text: "Registration Successfull",
          icon: "success",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log("ERROR", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  return (
    <div className="text-light-color-text w-full md:max-w-[72%] lg:max-w-[68.75%] px-2 md:px-0 mx-auto pt-6 bg-base-100 rounded-lg shadow-xl py-4 md:py-5 mb-6 md:mb-10 dark:bg-neutral dark:text-dark-color-text ">
      <div>
        <div className="  px-10 md:px-16 lg:px-28 rounded-md">
          <div>
            <div className="mb-5 md:mb-7">
              <Title title={" Register"}></Title>
            </div>

            <form
              onSubmit={handleRegister}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 md:mb-10"
            >
              <div
                onClick={handleGoogleSignIn}
                className="text-light-color-text col-span-2 "
              >
                <button className=" bg-base-200 text-light-color-text rounded-full py-2 w-full flex items-center justify-center gap-2 hover:bg-light-primary hover:border hover:border-light-primary transition duration-300 ease-in-out dark:hover:bg-dark-primary dark:hover:border-dark-PRIMARY">
                  <FcGoogle size={30} /> Register using Google
                </button>
              </div>
              <div className="col-span-2">
                <label className="">
                  <span className="font-semibold  text-base md:text-lg">
                    Name
                  </span>
                </label>
                <input
                  className="bg-base-200 text-light-color-text  w-full px-3 py-4 rounded-md  mt-2 md:mt-4 placeholplaceholder-light-color-text-60  placeholder:text-base md:placeholder:text-lg "
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="">
                  <span className="font-semibold  text-base md:text-lg ">
                    Email
                  </span>
                </label>
                <input
                  className="w-full px-3 py-4 rounded-md bg-base-200 text-light-color-text  mt-2 md:mt-4 placeholder-light-color-text-60  placeholder:text-base md:placeholder:text-lg "
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  isRequired
                />
              </div>
              <div className="col-span-2">
                <label className="">
                  <span className="font-semibold  text-base md:text-lg ">
                    Password
                  </span>
                </label>
                <input
                  className="w-full px-3 py-4 rounded-md bg-base-200 text-light-color-text  mt-2 md:mt-4 placeholder-light-color-text-60  placeholder:text-base  md:placeholder:text-lg"
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  required
                />
              </div>

              <div className="col-span-2">
                <label className="">
                  <span className="font-semibold  text-base md:text-lg ">
                    Enter Photo URL
                  </span>
                </label>
                <input
                  className=" w-full px-3 py-4 rounded-md bg-base-200 text-light-color-text  mt-2 md:mt-4 placeholder-light-color-text-60  placeholder:text-base md:placeholder:text-lg"
                  type="text"
                  name="photoURL"
                  placeholder="Enter Photo URL"
                />
              </div>
              <div className="md:col-span-2">
                <input
                  className="w-full  py-3 border-2 bg-light-primary  border-light-primary rounded-md hover:bg-light-accent hover:border-light-accent text-xl md:text-2xl
    transition duration-300 ease-in-out dark:bg-dark-primary text-light-color-text dark:border-dark-primary dark:hover:bg-dark-secondary dark:hover:border-dark-secondary dark:hover:text-dark-color-text"
                  type="submit"
                  value="Register"
                />
              </div>
              <div>
                <Link to={"/log-in"}>
                  <p>
                    Already have an account?{" "}
                    <span className="text-red-500">Login Now</span>
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
