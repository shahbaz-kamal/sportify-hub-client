import React from "react";
import Title from "./Title";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div>
      <Title title={"Our Happy Clients"}></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 md:mt-5">
        <div>
          <TestimonialCard
            image={"https://i.ibb.co.com/NysRHdp/litton-das.jpg"}
            name={"Liton Das"}
            profession={"Cricketer"}
            country={"Bangladesh"}
            mouth={
              "❛Sportify Hub has been my go-to place for top-notch cricket gear. Their premium-grade bats and gloves gave me the perfect edge in my game. Using their gear, I felt more confident and comfortable at the crease, and it showed when I scored a career-defining 176 against Zimbabwe. Sportify Hub isn't just about selling equipment; they equip athletes with the tools to succeed!❜"
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
              "❛Sportify Hub’s cricket gear is second to none! Their high-performance bat and protective equipment gave me the confidence to take on the world's best bowlers. With their gear in hand, I played some of my best cricket and helped Australia lift the World Cup in 2024. Sportify Hub doesn’t just sell equipment—they empower champions!❜"
            }
          ></TestimonialCard>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
