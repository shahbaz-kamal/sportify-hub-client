import React from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { useLoaderData } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import SportsCategory from "../components/SportsCategory";
import Services from "../components/Services";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const allProductData = useLoaderData();

  return (
    <div className="space-y-8 md:space-y-14">
      <section className="container mx-auto px-2 md:px-0">
        <Banner></Banner>
      </section>
      <section className="container mx-auto">
        <Products allProductData={allProductData}></Products>
      </section>
      {/* <section className="container mx-auto">
        <SportsCategory allProductData={allProductData}></SportsCategory>
      </section> */}
    
      <section className="container mx-auto">
        <Services></Services>
      </section>
      <section className="container mx-auto">
        <Newsletter></Newsletter>
      </section>
      <section className="container mx-auto">
        <Testimonial></Testimonial>
      </section>
    </div>
  );
};

export default Home;
