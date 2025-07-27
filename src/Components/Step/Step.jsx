import React from "react";

const Step = () => {
  return (
    <div
      className="relative
    min-h-[60vh]
    w-full
    bg-[#827cbffd]
    p-20
    max-sm:mt-32"
    >
      {/* Start Image */}
      <div class="custom-shape-divider-top-1753626632">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      {/* End Image */}
      <div
        className="container
      mx-auto
      flex
      h-full
      w-full
      flex-col
      items-center
      max-xl:justify-center"
      >
        <div
          className="flex
        w-full
        flex-col
        items-start
        justify-start
        xl:pt-20
        max-xl:items-center
        max-xl:justify-center"
        >
          <span
            data-aos="fade-up"
            className="mb-2 text-sm font-bold text-white"
          >
            STEP
          </span>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white
          text-2xl
          md:text-3xl
          lg:text-4xl
          xl:text-5xl"
          >
            Maxmize your returns with a <br /> Reserve account that generates.
          </p>
        </div>

        <div
          className="boxes
        flex
        w-full
        max-lg:flex-wrap
        items-center
        justify-start
        max-xl:justify-center"
        >
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="box
          mt-10
          h-52
          w-96
          min-h-fit
          rounded-xl
          p-5
          shadow-2xl
          max-xl:ml-0
          max-lg:w-full"
          >
            <span
              className="bg-gradient-to-b
            from-white
            via-[#827cbf75]
            to-SecBlue
            bg-clip-text
            font-lato
            text-5xl
            font-bold
            text-transparent"
            >
              1
            </span>
            <p className="pt-5 text-2xl font-bold text-white">
              Set up your business
            </p>
            <p className="mt-2 text-white">
              Sign up to Payzo and set up your account from the dashboard
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className="box
          ml-28
          mt-10
          h-52
          w-96
          min-h-fit
          rounded-xl
          p-5
          shadow-2xl
          max-xl:ml-0
          max-lg:w-full"
          >
            <span
              className="bg-gradient-to-b
            from-white
            via-[#827cbf75]
            to-SecBlue
            bg-clip-text
            font-lato
            text-5xl
            font-bold
            text-transparent"
            >
              2
            </span>
            <p className="pt-5 text-2xl font-bold text-white">
              Set up your business
            </p>
            <p className="mt-2 text-sm text-white">
              Sign up to Payzo and set up your account from the dashboard
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="box
          ml-28
          mt-10
          h-52
          w-96
          min-h-fit
          rounded-xl
          p-5
          shadow-xl
          max-xl:ml-0
          max-lg:w-full"
          >
            <span
              className="bg-gradient-to-b
            from-white
            via-[#827cbf75]
            to-SecBlue
            bg-clip-text
            font-lato
            text-5xl
            font-bold
            text-transparent"
            >
              3
            </span>
            <p className="pt-5 text-2xl font-bold text-white">
              Set up your business
            </p>
            <p className="mt-2 text-white">
              Sign up to Payzo and set up your account from the dashboard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
