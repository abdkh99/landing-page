import React from "react";

const Step = () => {
  return (
    <div className="min-h-[60vh] w-full relative bg-[#827cbffd] max-sm:mt-32 p-20">
      <div className=" container mx-auto flex flex-col items-center max-xl:justify-center w-full h-full">
        <div className="w-full xl:pt-20 flex flex-col items-start justify-start max-xl:items-center max-xl:justify-center">
          <span
            data-aos="fade-up"
            className="text-sm font-bold text-white mb-2"
          >
            STEP
          </span>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl  text-white"
          >
            Maxmize your returns with a <br /> Reserve account that generates.
          </p>
        </div>

        <div className="boxes w-full flex  justify-start max-xl:justify-center  flex-wrap items-center ">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="box min-h-fit w-96 max-xl:ml-0 h-52  p-5 mt-10  shadow-2xl rounded-xl  "
          >
            <span
              className="text-5xl font-bold font-lato bg-gradient-to-b 
          from-white  via-[#827cbf75] to-SecBlue bg-clip-text text-transparent"
            >
              1
            </span>
            <p className="text-white pt-5 font-bold text-2xl">
              Set up your business
            </p>
            <p className="text-white mt-2">
              Sign up to Payzo and set up your account from the dashboard
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="box ml-28 min-h-fit max-xl:ml-0 w-96  h-52 p-5 mt-10  shadow-2xl rounded-xl  "
          >
            <span
              className="text-5xl font-bold font-lato bg-gradient-to-b 
          from-white  via-[#827cbf75] to-SecBlue bg-clip-text text-transparent"
            >
              2
            </span>
            <p className="text-white pt-5 font-bold text-2xl ">
              Set up your business
            </p>
            <p className="text-white mt-2 text-sm ">
              Sign up to Payzo and set up your account from the dashboard
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="box ml-28 min-h-fit max-xl:ml-0 w-96  h-52 p-5 mt-10  shadow-xl rounded-xl "
          >
            <span
              className="text-5xl font-bold font-lato bg-gradient-to-b 
          from-white  via-[#827cbf75] to-SecBlue bg-clip-text text-transparent"
            >
              3
            </span>
            <p className="text-white pt-5 font-bold text-2xl">
              Set up your business
            </p>
            <p className="text-white mt-2">
              Sign up to Payzo and set up your account from the dashboard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
