import React from "react";
import Title from "./Title";
import TestimonialCard from "./TestimonialCard";
import Descriptions from "./Descriptions";

const Testimonial = () => {
  return (
    <div>
      <Title title={"What Our Customers Are Saying"}></Title>
      <Descriptions
        description={
          "Real stories from satisfied customers who trust us for their sports needs"
        }
      ></Descriptions>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        <div>
          <TestimonialCard
            image={"https://i.ibb.co.com/NysRHdp/litton-das.jpg"}
            name={"Liton Das"}
            profession={"Cricketer"}
            country={"Bangladesh"}
            mouth={
              "❛Sportify Hub is my go-to for top cricket gear. Their premium bats and gloves gave me the edge to score a career-defining 176 against Zimbabwe. They equip athletes with the tools to succeed, not just sell equipment!❜"
            }
          ></TestimonialCard>
        </div>
        <div>
          <TestimonialCard
            image={"https://i.ibb.co.com/9bQXyW3/david-warner.jpg"}
            name={"David Warner"}
            profession={"Cricketer"}
            country={"Australia"}
            mouth={
              "❛Sportify Hub’s cricket gear is great! Their high-performance bat and protective equipment gave me confidence against the best bowlers, helping Australia lift the 2024 World Cup. They don’t just sell gear—they empower champions!❜"
            }
          ></TestimonialCard>
        </div>
        <div>
          <TestimonialCard
            image={"https://i.ibb.co.com/gz5ZqDs/butler.webp"}
            name={"Jos Butler"}
            profession={"Cricketer"}
            country={"England"}
            mouth={
              "❛Sportify Hub’s equipment is top-tier! Their innovative designs and quality gave me the edge to excel under pressure. Whether smashing sixes in the IPL or leading England to another trophy, their gear fuels champions to make history.❜"
            }
          ></TestimonialCard>
        </div>
        <div>
          <TestimonialCard
            image={"https://i.ibb.co.com/FJ3pTsd/messi.jpg"}
            name={"Lionel Messi"}
            profession={"Footballer"}
            country={"Argentina"}
            mouth={
              "❛Sportify Hub’s gear is exceptional! Their boots and apparel gave me the agility and precision to excel, helping me lead Argentina to World Cup glory. They don’t just sell sportswear—they empower athletes to create unforgettable moments!❜"
            }
          ></TestimonialCard>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
