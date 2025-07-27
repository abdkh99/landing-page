import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="w-full h-full bg-gray-50">
      <div
        className="container
      mx-auto
      flex
      items-center
      justify-between
      relative
      p-10
      pt-16
      h-full
      w-full
      max-md:flex-col"
      >
        <div
          className="flex
        items-center
        gap-2
        relative
        text-xl
        -translate-y-16"
        >
          <p>Payzo</p>
        </div>
        <div className="flex gap-10 max-md:gap-16">
          <div className="col gap-4">
            <h2 className="mb-5 font-bold">Solutions</h2>
            <p className="mb-2 text-xs text-gray-400">Small Businesses</p>
            <p className="mb-2 text-xs text-gray-400">Freelancers</p>
            <p className="mb-2 text-xs text-gray-400">Customers</p>
            <p className="mb-2 text-xs text-gray-400">Taxes</p>
          </div>
          <div className="col gap-4">
            <h2 className="mb-5 font-bold">Company</h2>
            <p className="mb-2 text-xs text-gray-400">About Us</p>
            <p className="mb-2 text-xs text-gray-400">Career</p>
            <p className="mb-2 text-xs text-gray-400">Customers</p>
          </div>
          <div className="col gap-4">
            <h2 className="mb-5 font-bold">Learn</h2>
            <p className="mb-2 text-xs text-gray-400">Blog</p>
            <p className="mb-2 text-xs text-gray-400">Books</p>
            <p className="mb-2 text-xs text-gray-400">Guides</p>
            <p className="mb-2 text-xs text-gray-400">Templates</p>
          </div>
        </div>
        <div
          className="flex
        flex-col
        gap-4
        -translate-y-10
        max-md:mt-20"
        >
          <div className="flex flex-col text-sm text-MainBlue">
            <p>Follow Us on</p>
          </div>
          <div className="flex gap-4">
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
