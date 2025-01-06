import React from "react";
import Title from "./Title";
import { Fade } from "react-awesome-reveal";

const Faq = () => {
  return (
    <div className="mb-6 md:mb-10 container mx-auto">
      <div className="mb-5 md:mb-8">
        {" "}
        <Title title={"FAQ"}></Title>
      </div>
      <Fade duration={1200} direction="left">
        {" "}
        <div className="collapse collapse-arrow bg-base-100 shadow-md mb-4 dark:bg-neutral">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium text-light-color-text dark:text-dark-color-text ">
            1. What is Sportify Hub?
          </div>
          <div className="collapse-content text-light-color-text dark:text-dark-color-text">
            <p>
              Sportify Hub is your one-stop shop for high-quality sports
              equipment. Whether you're a professional athlete or a fitness
              enthusiast, we provide the best gear to help you excel in your
              favorite sports.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 shadow-md mb-4 dark:bg-neutral">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium text-light-color-text dark:text-dark-color-text">
            2. Do you offer international shipping?
          </div>
          <div className="collapse-content text-light-color-text dark:text-dark-color-text">
            <p>
              Yes, we ship worldwide! Shipping costs and delivery times vary
              depending on your location. You can check the details at checkout.
            </p>
          </div>
        </div>
      </Fade>
      <Fade duration={1200} direction="right">
        <div className="collapse collapse-arrow bg-base-100 shadow-md mb-4 dark:bg-neutral">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium text-light-color-text dark:text-dark-color-text">
            3. Can I return or exchange a product?
          </div>
          <div className="collapse-content text-light-color-text dark:text-dark-color-text">
            <p>
              Absolutely! We offer a hassle-free 30-day return and exchange
              policy for unused items in their original packaging. For detailed
              guidelines, visit our Returns and Exchanges page.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 shadow-md mb-4 dark:bg-neutral">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium text-light-color-text dark:text-dark-color-text">
            4. How can I track my order?
          </div>
          <div className="collapse-content text-light-color-text dark:text-dark-color-text">
            <p>
              Once your order is shipped, you’ll receive an email with a
              tracking number. You can use it to track your shipment on our
              website or the courier’s portal.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Faq;
