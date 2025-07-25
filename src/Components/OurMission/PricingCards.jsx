// PricingCards.jsx
import React from "react";
// تأكد من أن الصورة موجودة في المسار الصحيح

const PricingCards = () => {
  return (
    <div className="flex flex-col max-sm:text-center max-sm:items-center  md:flex-row gap-6  w-full max-w-4xl mx-auto p-4">
      {/* Plus Card */}
      <label data-aos="fade-up" className="flex-1 cursor-pointer w-[25rem]">
        <input type="radio" name="plan" className="peer hidden" />
        <div className="relative bg-SecBlue h-40 rounded-xl p-6 text-white/60 shadow-2xl peer-checked:ring-2   duration-30 peer-checked:text-white max-sm:w-full  transition-all peer-checked:bg-MainBlue ">
          {/* Overlay لتعتيم الخلفية وتوضيح النص */}
          <div className="absolute inset-0 rounded-xl"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold mb-2">Plus</h2>
            <p className="text-sm">£2.99/month</p>
            <span className="absolute bottom-4 right-4 text-xl">↗</span>
          </div>
        </div>
      </label>

      {/* Premium Card */}
      <label
        data-aos="fade-up"
        className="flex-1 relative cursor-pointer w-[25rem]"
      >
        <input type="radio" name="plan" className="peer hidden" />
        <div
          className="relative text-white/60 z-10 h-40 rounded-xl bg-cover bg-center p-6  peer-checked:ring-2  transition duration-300 bg-SecBlue peer-checked:bg-MainBlue peer-checked:text-white
          shadow-2xl "
          style={{
            backgroundImage: "",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-xl font-semibold mb-2 ">Premium</h2>
          <p className="text-sm">£6.99/month</p>
          <span className="absolute bottom-4 text-white right-10 top-[2rem] text-xl">
            ↗
          </span>
        </div>
      </label>
    </div>
  );
};

export default PricingCards;
