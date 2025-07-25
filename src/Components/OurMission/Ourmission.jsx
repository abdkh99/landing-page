import React from "react";
import PricingCards from "./PricingCards";
const Ourmission = () => {
  return (
    <>
      <div className="w-full h-full bg-[#eee]">
        <div className="max-w-6xl mx-auto pt-8 px-10  h-fit min-h-[110vh] w-full space-y-6">
          <div className="container mx-auto items-center flex flex-col justify-center  w-full h-full">
            <div className="head-ourMission flex flex-col items-center justify-center">
              <span
                data-aos="fade-up"
                className="text-MainBlue text-sm font-bold block mt-10 mb-3"
              >
                OUR MISSION
              </span>
              <p data-aos="fade-up" className="text-center text-4xl ">
                We've helper <br />
                <span className="text-MainBlue">innovative companies </span>
              </p>
              <p data-aos="fade-up" className="text-center text-sm pt-2">
                Handreds of all sizes and across all industries <br /> have made
                a big improvment with us.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="content flex max-sm:flex-col items-center justify-center mt-16 gap-10"
            >
              <div
                data-aos="fade-up"
                className="card flex flex-col items-center flex-1 ml-6"
              >
                <span className="text-5xl font-openSans font-[600]">24%</span>
                <p className="mt-2 text-MainBlue font-bold">Revenue business</p>
              </div>
              <div
                data-aos="fade-up"
                className="card flex flex-col items-center flex-1 ml-6"
              >
                <span className="text-5xl font-openSans font-[600]">180K</span>
                <p className="mt-2 text-MainBlue font-bold">Revenue business</p>
              </div>
              <div
                data-aos="fade-up"
                className="card flex flex-col items-center flex-1 ml-6"
              >
                <span className="text-5xl font-openSans font-[600]">10+</span>
                <p className="mt-2 text-MainBlue font-bold">Revenue business</p>
              </div>
            </div>
            <span
              data-aos="fade-up"
              className="text-MainBlue text-sm font-bold block mt-10 mb-3"
            >
              CHOOSE PLAN :
            </span>
            <div className="gap-10 flex items-center justify-center">
              <PricingCards />
            </div>
            <div
              data-aos="fade-up"
              className="box w-full min-h-60 p-10 rounded-3xl bg-SecBlue container mx-40 mt-20 flex max-sm:flex-col  max-sm:items-center  max-sm:gap-10 max-sm:px-5 "
            >
              <div className="w-[50%] max-sm:w-full">
                <span className="text-sm text-MainBlue font-bold block mb-3">
                  Try it Now
                </span>
                <p className="text-white font-bold text-2xl">
                  Ready to level up yout payment process?
                </p>
                <p className="text-white text-xs mt-2">
                  Supports small businesses with simple invoicing, powerful
                  integrations, and cash flow management tools.
                </p>
              </div>
              <div className="flex items-center justify-end gap-4 flex-1 ">
                <button className="border p-4 rounded-xl border-MainBlue text-white bg-MainBlue  transition-all">
                  Get Started Now
                </button>
                <button className="border p-4 rounded-xl border-[#000021] drop-shadow-2xl shadow-2xl  text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourmission;
