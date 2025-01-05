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
      <div className="pt-2 md:pt-3">
        <nav className="mb-5 md:mb-8">
          <Navbar></Navbar>
        </nav>
        <section>
          <Outlet></Outlet>
        </section>
        <section className="bg-neutral">
          <Footer></Footer>
        </section>
      </div>
    );
  }
};

export default Root;
