import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Pages/Loading";

const Root = () => {
  const { loading, setLoading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  } else {
    return (
      <div className=" flex flex-col ">
        <nav className="py-1  mb-5 md:mb-8 bg-[#d0e2b5] bg-opacity-60 dark:bg-neutral dark:bg-opacity-80 fixed z-10 w-full">
          <Navbar></Navbar>
        </nav>
        <section className="flex-1 pt-[120px] mx-auto w-full">
          <Outlet></Outlet>
        </section>
        <section className="bg-neutral mt-8 md:mt-10">
          <Footer></Footer>
        </section>
      </div>
    );
  }
};

export default Root;
