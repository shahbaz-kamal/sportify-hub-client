import React from "react";
import logoDark from "../../src/assets/sportify_hub_logo_for_dark2.png";
import { CiLocationOn } from "react-icons/ci";
import { GiMailbox } from "react-icons/gi";
import { MdEmail, MdFacebook } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import {
  FaInstagram,
  FaInstagramSquare,
  FaReddit,
  FaTwitter,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="  text-neutral-content p-10 container mx-auto mt-20">
      <div className="flex justify-center items-center md:justify-around flex-col md:flex-row gap-6  md:gap-0">
        <div className="flex flex-col md:block justify-center items-center space-y-2">
          <Fade duration={1200} direction="down">
            <img className="w-20 rounded-full " src={logoDark} alt="" />
          </Fade>
          <Fade duration={1200} triggerOncefalse>
            <p className="font-bold text-lg md:text-xl text-dark-color-text">
              Sportify Hub
            </p>
          </Fade>
          <Fade duration={1200} direction="up">
            <p className="text-sm md:text-base opacity-80">
              Providing reliable service since 2014
            </p>
          </Fade>
        </div>
        <nav className="flex flex-col items-center justify-center md:items-start">
          <Fade duration={1200} direction="down">
            <h6 className="footer-title">Contact Us</h6>
          </Fade>
          <div className="flex flex-col items-start">
            <Fade duration={1200} direction="down">
              {" "}
              <div className="flex gap-2 items-start mb-2">
                <CiLocationOn className="mt-1" />
                <div>
                  <p className="p-0">
                    1234 Victory Boulevard,
                    <br /> GameTown, PlayState 56789,
                    <br /> Sportsland.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade duration={1200} direction="up">
              {" "}
              <div className="flex gap-2 items-center mb-2">
                <MdEmail className="" />
                <div>
                  <p className="p-0">sportifyHub@gmail.com</p>
                </div>
              </div>
            </Fade>
            <Fade duration={1200} direction="up">
              <div className="flex gap-2 items-center">
                <BsTelephone className="" />
                <div>
                  <p className="p-0">+880 1799839985</p>
                </div>
              </div>
            </Fade>
          </div>
        </nav>
        <nav className="flex flex-col items-center md:items-start gap-2">
          <Fade duration={1200} direction="down">
            {" "}
            <h6 className="footer-title">Social Media</h6>
          </Fade>
          <Fade duration={1200} direction="up">
           
            <div className="flex flex-col items-center md:items-start">
              <div className="flex gap-2 items-start mb-2">
                <div>
                  <MdFacebook size={30}></MdFacebook>
                </div>
                <div>
                  <FaInstagram size={30} color="red"></FaInstagram>
                </div>
                <div>
                  <FaTwitter size={30}></FaTwitter>
                </div>
                <div>
                  <FaReddit size={30}></FaReddit>
                </div>
              </div>
            </div>
          </Fade>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
