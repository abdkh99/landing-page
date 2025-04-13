import React, { useState } from "react";
import logo from "/public/assets/logo.svg";
const NavBar = () => {
  // حالة التحكم في إظهار وإخفاء الـ Sidebar
  const [isHidden, setIsHidden] = useState(true);

  // دالة تبديل الحالة مع منع انتشار الحدث
  const toggleVisibility = (e) => {
    e.stopPropagation();
    setIsHidden((prev) => !prev);
  };

  return (
    <div className="text-black relative">
      <div className="head pt-10 w-full flex items-center justify-between h-14 px-4 xl:ml-24">
        <div className="1st flex items-center xl:ml-18 card">
          <img
            src={logo}
            className="h-10 mr-2"
            alt="Logo"
          />
          <p className="font-bold text-2xl text-[#000021]">Finpay</p>
        </div>
        <div className="Content translate-x-[-30%] flex items-center max-800:hidden">
          <span className="ml-4 text-[#000021] font-semibold cursor-pointer card">
            Products
          </span>
          <span className="ml-4 text-[#000021] font-semibold cursor-pointer card">
            Customers
          </span>
          <span className="ml-4 text-[#000021] font-semibold cursor-pointer card">
            Pricing
          </span>
          <span className="ml-4 text-[#000021] font-semibold cursor-pointer card">
            Learn
          </span>
        </div>
        <div className="Login xl:mr-40 card max-800:hidden">
          <button className="border ml-2 px-4 py-2 rounded-lg text-black hover:bg-[#eee] transition-colors">
            Login
          </button>
          <button className="border ml-2 px-4 py-2 rounded-lg text-white bg-MainBlue bg-blue-hover transition-colors">
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
x        </button>
        <p className="hover:bg-[#eee] py-2 rounded-[1px] mt-[5rem]  pl-2 bg-white w-full text-cyan-800 font-semibold cursor-pointer transition-colors duration-300">
          Products
        </p>
        <p className="hover:bg-[#eee] py-2 rounded-[1px]  pl-2 bg-white w-full text-cyan-800 font-semibold cursor-pointer transition-colors duration-300">
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
