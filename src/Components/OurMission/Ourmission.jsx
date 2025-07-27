import React from "react";
import PricingCards from "./PricingCards";
const Ourmission = () => {
  return (
    <>
      <div className="relative w-full h-full bg-[#eee]">
        <div
          className="
      w-full
      h-fit
      min-h-[110vh]
      max-w-6xl
      mx-auto
      px-10
      pt-8
      space-y-6
    "
        >
          <div
            className="
        w-full
        h-full
        container
        mx-auto
        flex
        flex-col
        items-center
        justify-center
      "
          >
            <div
              className="
          flex
          flex-col
          items-center
          justify-center
          head-ourMission
        "
            >
              <span
                data-aos="zoom-in"
                className="
              block
              text-sm
              font-bold
              text-MainBlue
              mt-10
              mb-3
            "
              >
                OUR MISSION
              </span>
              <p data-aos="zoom-in-down" className="text-7xl text-center">
                We've helper <br />
                <span className="text-MainBlue">innovative companies </span>
              </p>
              <p
                data-aos="fade-up"
                className="
            text-xl
            text-center
            pt-2
          "
              >
                Handreds of all sizes and across all industries <br /> have made
                a big improvment with us.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="
            flex
            items-center
            justify-center
            mt-16
            gap-10
            max-sm:flex-col
            content
          "
            >
              <div
                data-aos="fade-up"
                className="
              flex
              flex-col
              items-center
              flex-1
              ml-6
              card
            "
              >
                <span
                  data-aos="fade-in"
                  data-aos-delay=""
                  className="
              text-6xl
              font-openSans
              font-[600]
            "
                >
                  24%
                </span>
                <p
                  className="
              mt-2
              font-bold
              text-MainBlue
            "
                >
                  Revenue business
                </p>
              </div>
              <div
                data-aos="fade-up"
                className="
              flex
              flex-col
              items-center
              flex-1
              ml-6
              card
            "
              >
                <span
                  data-aos="fade-in"
                  data-aos-delay="300"
                  className="
              text-6xl
              font-openSans
              font-[600]
            "
                >
                  180K
                </span>
                <p
                  className="
              mt-2
              font-bold
              text-MainBlue
            "
                >
                  Revenue business
                </p>
              </div>
              <div
                data-aos="fade-up"
                className="
              flex
              flex-col
              items-center
              flex-1
              ml-6
              card
            "
              >
                <span
                  data-aos="fade-in"
                  data-aos-delay="500"
                  className="
              text-6xl
              font-openSans
              font-[600]
            "
                >
                  10+
                </span>
                <p
                  className="
              mt-2
              font-bold
              text-MainBlue
            "
                >
                  Revenue business
                </p>
              </div>
            </div>
            <span
              data-aos="fade-up"
              className="
            block
            text-xl
            font-bold
            text-MainBlue
            mt-10
            mb-3
          "
            >
              CHOOSE PLAN :
            </span>
            <div
              className="
          flex
          items-center
          justify-center
          gap-10
        "
            >
              <PricingCards />
            </div>
            <div
              data-aos="fade-in"
              data-aos-easing="ease-in"
              data-aos-delay="100"
              className="
            w-full
            min-h-60
            flex
            container
            mx-40
            mt-20
            mb-10
            p-10
            rounded-3xl
            bg-SecBlue
            font-arial
            max-sm:flex-col
            max-sm:items-center
            max-sm:gap-10
            max-sm:px-5
            box
          "
            >
              <div
                className="
            w-[50%]
            max-sm:w-full
          "
              >
                <span
                  className="
              block
              text-sm
              font-bold
              text-[#a9b6cc]
              mb-3
            "
                >
                  Try it Now
                </span>
                <p
                  className="
              text-2xl
              font-bold
              text-white
              font-arial
            "
                >
                  Ready to level up yout payment process?
                </p>
                <p
                  className="
              text-xs
              text-white
              font-arial
              mt-2
            "
                >
                  Supports small businesses with simple invoicing, powerful
                  integrations, and cash flow management tools.
                </p>
              </div>
              <div
                className="
            flex
            flex-1
            items-center
            justify-end
            gap-4
            font-arial
          "
              >
                <div className="but">
                  <button className="button-1" data-text="Awesome">
                    <span className="actual-text">
                      &nbsp;Get&nbsp;Started&nbsp;
                    </span>
                    <span aria-hidden="true" className="hover-text">
                      &nbsp;Get&nbsp;Started&nbsp;
                    </span>
                  </button>
                </div>
                <div className="but">
                  <button className="button-1" data-text="Awesome">
                    <span className="actual-text">
                      &nbsp;Learn&nbsp;More&nbsp;
                    </span>
                    <span aria-hidden="true" className="hover-text">
                      &nbsp;Learn&nbsp;More&nbsp;
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourmission;
