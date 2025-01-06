import React from "react";
import logoDark from "../../src/assets/sportify_hub_logo_for_dark2.png";
import { CiLocationOn } from "react-icons/ci";
import { GiMailbox } from "react-icons/gi";
import { MdEmail, MdFacebook } from "react-icons/md";
import { BsTelephone, BsTwitterX } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import {
  FaInstagram,
  FaInstagramSquare,
  FaReddit,
  FaTwitter,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="  text-neutral-content p-10 container mx-auto mt-20">
      <div className="flex justify-center items-center md:justify-around flex-col md:flex-row gap-6  md:gap-0">
        <Fade duration={1200} direction="left">
          {" "}
          <div className="flex flex-col md:block justify-center items-center space-y-2">
            <img className="w-20 rounded-full " src={logoDark} alt="" />
            <p className="font-bold text-lg md:text-xl text-dark-color-text">
              Sportify Hub
            </p>
            <p className="text-sm md:text-base opacity-80">
              Providing reliable service since 2014
            </p>
          </div>
        </Fade>
        <Fade duration={1200} direction="down">
          <nav className="flex flex-col items-center justify-center md:items-start">
            <h6 className="footer-title">Contact Us</h6>
            <div className="flex flex-col items-start">
              <div className="flex gap-2 items-start mb-2">
                <CiLocationOn className="mt-1" />
                <div>
                  <p className="p-0">
                    Nikunja 2,
                    <br /> Dhaka,
                    <br /> Bangladesh.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <MdEmail className="" />
                <div>
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=shahbazkamal384@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <p className="p-0">shahbazkamal384@gmail.com</p>
                  </a>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <BsTelephone className="" />
                <div>
                  <p className="p-0">+880 1799839985</p>
                </div>
              </div>
            </div>
          </nav>
        </Fade>
        <Fade duration={1200} direction="right">
    
          <nav className="flex flex-col items-center md:items-start gap-2">
            <h6 className="footer-title">Social Media</h6>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex gap-2 items-start mb-2">
                <a
                  href="https://www.facebook.com/tamim.chowdhury.543/"
                  target="_blank"
                >
                  {" "}
                  <div>
                    <MdFacebook size={30} color="blue"></MdFacebook>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/tamimchowdhury10/"
                  target="_blank"
                >
                  <div>
                    <FaInstagram size={30} color="red"></FaInstagram>
                  </div>
                </a>
                <a href="https://x.com/tamim120096" target="_blank">
                  <div>
                    <BsTwitterX size={30} color="#000000" />
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/md-shahbaz-kamal-chowdhury/">
                  <div>
                    <SiLinkedin size={30} color="#0077B5" />
                  </div>
                </a>
              </div>
            </div>
          </nav>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;
