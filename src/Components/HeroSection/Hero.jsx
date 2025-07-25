import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Card from "../HeroSection/Card.jsx";

const Hero = () => {
  return (
    <>
      <div className="Hero-Page w-full bg-[#E0DDEF] min-h-[100vh] grid grid-cols-2 max-960:grid-cols-1  max-960:items-center max-960:flex max-960:flex-col  max-440:translate-x-0  max-440:p-0  overflow-hidden max-440:mt-8 max-440:">
        <div className="card Left-conten  min-1400:ml-24 relative flex mt-24 max-960:mt-0  flex-col  h-full pl-14 max-440:pl-0 ">
          <div className="card">
            <h1 className="pt-10 mb-10 font-poppins text-5xl lg:text-6xl max-440:mb-6 xl:text-7xl max-440:text-4xl">
              <span className="font-bold"> Get paid early</span> <br />
              <span className="font-bold text-MainBlue">
                save automatically{" "}
              </span>
              <br />
              all your pay.
            </h1>
            <p className="text-gray-500 text-lg max-440:text-sm  font-poppins mb-5 card ">
              Supports samll businesses with simple invoicing,
              <br /> powerful integrations,
              <br /> and cash flow mangment tools.
            </p>
            <div className="border w-fit h-14 max-440:h-12  flex items-center rounded-lg card">
              <input
                className=" bg-white w-[20rem] max-440:w-[15rem]  outline-none h-full rounded-tl-lg rounded-bl-lg  placeholder:text-gray-400 placeholder:text-sm focus:placeholder:text-transparent pl-4"
                type="email"
                placeholder="Your business email"
                name=""
                id=""
              />
              <button
                className="bg-MainBlue  bg-blue-hover
          b text-white h-full rounded-lg ml-[-1rem] px-4 py-2 flex items-center
          relative before:content-[''] before:absolute before:h-full before:w-0 
          before:bg-[#ffffffc0] before:left-0 before:top-0 before:opacity-[0.3]
          before:transition-all hover:before:w-full before:duration-300 group
          "
              >
                Get Started
                <FontAwesomeIcon
                  className="max-sm:pl-0 rotate-45 pl-1 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all ease-in-out"
                  icon={faArrowUp}
                />
              </button>
            </div>
            <div className="mt-6 card  flex flex-wrap flex-row max-440:flex gap-4 max-440:gap-2 ">
              <span className="ml-4  cursor-pointer font-bold text-lg">
                Klarna
              </span>
              <span className="ml-10 cursor-pointer  font-bold text-lg">
                coinbase
              </span>
              <span className="ml-10 cursor-pointer  font-bold text-lg">
                instacart
              </span>
            </div>
          </div>
        </div>
        <div className="right-content  relative  min-1400:translate-x-[20%] fade-in mt-12 max-960:mt-5 h-full ">
          <div className="card">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
