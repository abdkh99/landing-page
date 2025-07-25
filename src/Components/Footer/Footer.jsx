import React from "react";
import logo from "/public/assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="w-full h-full bg-gray-50">
      <div className="flex  mx-auto pt-16 justify-between max-md:flex-col items-center  relative container  p-10 h-full w-full">
        <div className="flex items-center gap-2  text-xl relative -translate-y-16">
          <img className="w-10" src={logo} alt="no img" />
          <p>Payzo</p>
        </div>
        <div className="flex gap-10 max-md:gap-16">
          <div className="col gap-4">
            <h2 className="font-bold mb-5">Solutions</h2>
            <p className="mb-2 text-gray-400 text-xs">Small Businesses</p>
            <p className="mb-2 text-gray-400 text-xs">Freelancers</p>
            <p className="mb-2 text-gray-400 text-xs">Customers</p>
            <p className="mb-2 text-gray-400 text-xs">Taxes</p>
          </div>
          <div className="col gap-4">
            <h2 className="font-bold mb-5">Company</h2>
            <p className="mb-2 text-gray-400 text-xs">About Us</p>
            <p className="mb-2 text-gray-400 text-xs">Career</p>
            <p className="mb-2 text-gray-400 text-xs">Customers</p>
          </div>
          <div className="col gap-4">
            <h2 className="font-bold mb-5">Learn</h2>
            <p className="mb-2 text-gray-400 text-xs">Blog</p>
            <p className="mb-2 text-gray-400 text-xs">Books</p>
            <p className="mb-2 text-gray-400 text-xs">Guides</p>
            <p className="mb-2 text-gray-400 text-xs">Templates</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 -translate-y-10 max-md:mt-20">
          <div className="flex flex-col text-MainBlue text-sm">
            <p>Follow Us on</p>
          </div>
          <div className="flex gap-4 ">
            <p>
              <FontAwesomeIcon className="text-blue-600" icon={faFacebook} />
            </p>
            <p>
              <FontAwesomeIcon className="text-red-600" icon={faYoutube} />
            </p>
            <p>
              <FontAwesomeIcon className="text-blue-500" icon={faLinkedin} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
