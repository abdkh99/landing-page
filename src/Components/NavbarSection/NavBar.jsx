import React, { useState } from "react";
import {navLinks} from "../../utils/data";
const NavBar = () => {
  // حالة التحكم في إظهار وإخفاء الـ Sidebar
  const [isHidden, setIsHidden] = useState(true);

  // دالة تبديل الحالة مع منع انتشار الحدث
  const toggleVisibility = (e) => {
    e.stopPropagation();
    setIsHidden((prev) => !prev);
  };

  return (
    <div className="text-black w-full h-24 bg-purple-50 relative">
      <div className="head pt-10  w-full flex items-center justify-between h-14 px-4 xl:ml-24">
        <div className="1st flex  items-center xl:ml-18 card">
          <a
            href="#Payzo"
            className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-MainBlue to-blue-500 via-indigo-400"
          >
            Payzo
          </a>
        </div>
        <div className="Content translate-x-[-30%] flex items-center max-800:hidden">
          <ul className="flex">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="ml-4 text-indigo-500 font-semibold cursor-pointer card"
              >
                <a
                  className="relative 
                  hover:text-SecBlue transition-all pb-1
                  before:content-[''] before:absolute 
                   before:w-full before:h-[4px] before:border before:rounded-md before:bg-MainBlue before:bottom-0 before:left-0 before:origin-right before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out
                  before:hover:origin-left before:hover:scale-x-100"
                  href={`#${link.id}`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative Login xl:mr-40 card max-800:hidden">
          <button
            className=" relative border ml-2 px-4 py-2 rounded-lg text-black  transition-colors 
          before:content-[''] before:absolute before:h-full before:w-0 
          before:bg-[#807c7c78] before:left-0 before:top-0 before:opacity-[0.3]
          before:transition-all hover:before:w-full before:duration-300
          
          "
          >
            Login
          </button>
          <button
            className=" relative border ml-2 px-4 py-2 rounded-lg text-white bg-MainBlue  transition-colors
          before:content-[''] before:absolute before:h-full before:w-0 
          before:bg-[#ffffffc0] before:left-0 before:top-0 before:opacity-[0.3]
          before:transition-all hover:before:w-full before:duration-300
          "
          >
            Sign Up
          </button>
        </div>
        {/* زر البرغر */}
        <div className="burger flex min-800:hidden">
          <div
            onClick={toggleVisibility}
            className="cursor-pointer transition-transform duration-300"
          >
            <span className="block w-6 h-1 mt-0.5 bg-gradient-to-r from-teal-500 to-[#2a8e9e]"></span>
            <span className="block w-6 h-1 mt-0.5 bg-gradient-to-l from-teal-500 to-[#2a8e9e]"></span>
            <span className="block w-6 h-1 mt-0.5 bg-gradient-to-b from-teal-500 to-[#2a8e9e]"></span>
          </div>
        </div>
      </div>

      {/* 
        الـ Sidebar يبقى موجود في الـ DOM بشكل دائم لكن يتم تحريكه خارج الشاشة عند إخفائه 
        وإرجاعه بانسيابية عند عرضه باستخدام خاصية transform مع Transition من Tailwind CSS 
      */}
      <div
        className={`sidbar-content fixed top-0 right-0 w-[50%] h-screen bg-white/50 text-[#000021] z-[999] transition-transform duration-300 ease-in-out  backdrop-blur-md ${
          isHidden ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <button
          onClick={toggleVisibility}
          className="close  font-semibold absolute top-6 right-6 cursor-pointer text-3xl transition-opacity duration-300 bg-gradient-to-t from-blue-400 to-cyan-500 bg-clip-text text-transparent"
        >
          x{" "}
        </button>
        <p className="hover:bg-[#eee] py-2 rounded-[1px] mt-[5rem]  pl-2 bg-white w-full text-cyan-800 font-semibold cursor-pointer transition-colors duration-300">
          Products
        </p>
        <p className="hover:bg-[#eee] py-2 rounded-[1px]  pl-2 bg-white w-full text-cyan-800 font-semibold cursor-pointer transition-colors duration-300 ">
          Customers
        </p>
        <p className="hover:bg-[#eee] py-2 rounded-[1px]  pl-2 bg-white w-full text-cyan-800 font-semibold cursor-pointer transition-colors duration-300">
          Pricing
        </p>
        <p className="hover:bg-[#eee] py-2 rounded-[1px]  pl-2 bg-white w-full text-cyan-800 font-semibold cursor-pointer transition-colors duration-300">
          Learn
        </p>
      </div>
    </div>
  );
};

export default NavBar;
