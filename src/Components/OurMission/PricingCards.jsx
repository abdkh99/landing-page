// PricingCards.jsx
import React from "react";
// تأكد من أن الصورة موجودة في المسار الصحيح

const PricingCards = () => {
  return (
    <div
      className="mx-auto
    flex
    w-full
    max-w-4xl
    flex-col
    gap-24
    p-4
    md:flex-row
    max-sm:items-center
    max-sm:text-center"
    >
      {/* Plus Card */}
      <label
        data-aos="fade-in"
        data-aos-delay="250"
        data-aos-easing="ease-in-out"
        className="w-[28rem] flex-1 cursor-pointer"
      >
        <input type="radio" name="plan" className="peer hidden" />
        <div
          className="relative
        h-40
        rounded-xl
        bg-SecBlue
        p-6
        shadow-2xl
        transition-all
        duration-30
        text-white/60
        peer-checked:bg-MainBlue
        peer-checked:ring-2
        peer-checked:text-white
        max-sm:w-full"
        >
          {/* Overlay لتعتيم الخلفية وتوضيح النص */}
          <div className="absolute inset-0 rounded-xl"></div>
          <div className="relative z-10">
            <h2 className="mb-2 text-xl font-semibold">Plus</h2>
            <p className="text-sm">£2.99/month</p>
            <span className="absolute bottom-4 right-4 text-xl">↗</span>
          </div>
        </div>
      </label>

      {/* Premium Card */}
      <label
        data-aos="fade-in"
        data-aos-delay="500"
        data-aos-easing="ease-in-out"
        className="relative w-[28rem] flex-1 cursor-pointer"
      >
        <input type="radio" name="plan" className="peer hidden" />
        <div
          className="relative
        z-10
        h-40
        rounded-xl
        bg-cover
        bg-center
        p-6
        shadow-2xl
        transition
        duration-300
        bg-SecBlue
        text-white/60
        peer-checked:bg-MainBlue
        peer-checked:ring-2
        peer-checked:text-white"
          style={{
            backgroundImage: "",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="mb-2 text-xl font-semibold">Premium</h2>
          <p className="text-sm">£6.99/month</p>
          <span className="absolute right-10 top-[2rem] text-xl text-white">
            ↗
          </span>
        </div>
      </label>
    </div>
  );
};

export default PricingCards;
