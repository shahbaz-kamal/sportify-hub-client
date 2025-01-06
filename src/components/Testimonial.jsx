import React from "react";
import Title from "./Title";
import TestimonialCard from "./TestimonialCard";
import Descriptions from "./Descriptions";
import { Fade } from "react-awesome-reveal";

const Testimonial = () => {
  return (
    <div className="mx-2 md:mx-0">
      <Title title={"What Our Customers Are Saying"}></Title>
      <Descriptions
        description={
          "Real stories from satisfied customers who trust us for their sports needs"
        }
      ></Descriptions>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        <Fade duration={1200} direction="left">
          {" "}
          <div>
            <TestimonialCard
              image={
                "https://i.ibb.co.com/8dCJB1d/albert-dera-ILip77-Sbm-OE-unsplash.jpg"
              }
              name={"Amir Hussain"}
              profession={"Cricketer"}
              country={"Bangladesh"}
              mouth={
                "❛Sportify Hub is my go-to for top cricket gear. Their premium bats and gloves gave me the edge to score a career-defining 176 against Zimbabwe. They equip athletes with the tools to succeed, not just sell equipment!❜"
              }
            ></TestimonialCard>
          </div>
          <div>
            <TestimonialCard
              image={
                "https://i.ibb.co.com/KjZJSPq/alexander-hipp-i-EEBWg-Y-6l-A-unsplash-1.jpg"
              }
              name={"Ryan Cooper"}
              profession={"Cricketer"}
              country={"Australia"}
              mouth={
                "❛Sportify Hub’s cricket gear is great! Their high-performance bat and protective equipment gave me confidence against the best bowlers, helping Australia lift the 2024 World Cup. They don’t just sell gear—they empower champions!❜"
              }
            ></TestimonialCard>
          </div>
        </Fade>
        <Fade duration={1200} direction="right">
          {" "}
          <div>
            <TestimonialCard
              image={
                "https://i.ibb.co.com/PT82WFm/joseph-gonzalez-i-Fg-Rcq-Hznqg-unsplash-1.jpg"
              }
              name={"Ethan Carte"}
              profession={"Cricketer"}
              country={"England"}
              mouth={
                "❛Sportify Hub’s equipment is top-tier! Their innovative designs and quality gave me the edge to excel under pressure. Whether smashing sixes in the IPL or leading England to another trophy, their gear fuels champions to make history.❜"
              }
            ></TestimonialCard>
          </div>
          <div>
            <TestimonialCard
              image={
                "https://i.ibb.co.com/Ld2wxH0/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg"
              }
              name={"Diego Alvarez"}
              profession={"Footballer"}
              country={"Argentina"}
              mouth={
                "❛Sportify Hub’s gear is exceptional! Their boots and apparel gave me the agility and precision to excel, helping me lead Argentina to World Cup glory. They don’t just sell sportswear—they empower athletes to create unforgettable moments!❜"
              }
            ></TestimonialCard>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Testimonial;
