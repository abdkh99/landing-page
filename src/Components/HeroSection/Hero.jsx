import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Card from "../HeroSection/Card.jsx";

const Hero = () => {
  return (
    <>
      <div
        className="Hero-Page
           relative
           w-full
           mb-20
           bg-[#E0DDEF]
           min-h-[100vh]
           grid
           grid-cols-2
           max-2xl:mb-36
           max-960:grid-cols-1
           max-960:items-center
           max-960:flex
           max-960:flex-col
           max-440:translate-x-0
           max-440:p-0
           overflow-hidden
           max-800:text-center
           max-800:items-center"
      >
        {/* Image Shape Driver */}
        <div class="custom-shape-divider-bottom-1753626675">
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
        {/*End Image Shape Driver */}
        <div className="card Left-conten  min-1400:ml-24 relative flex mt-24 max-960:mt-0  flex-col  h-full pl-14 max-440:pl-0 ">
          <div className="card ">
            <h1 className="pt-10 mb-4 font-poppins text-5xl lg:text-6xl max-440:mb-2 xl:text-7xl max-440:text-4xl">
              <span className="font-bold"> Get paid faster</span> <br />
              <span className="font-bold text-MainBlue">save effortlessly</span>
              <br />
              take control of every dollar
            </h1>
            <p className="text-gray-500  text-lg max-440:text-sm  font-poppins mb-8 card">
              Empowering small businesses with smart invoicing,
              <br /> seamless integrations, and effective
              <br /> cash flow management
            </p>
            <div className="border w-fit  h-14 max-440:h-12  flex items-center rounded-lg card ">
              <div className="inputContainer  ">
                <input
                  className="w-[20rem] h-16 focus:placeholder:text-transparent transition-all duration-300 
                  max-800:w-[60vw]"
                  required="required"
                  id="inputField"
                  placeholder="Username"
                  type="text"
                />
                <label class="usernameLabel " for="inputField">
                  Username
                </label>
                <svg viewBox="0 0 448 512" class="userIcon">
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                </svg>
              </div>
              <button
                className="bg-MainBlue  bg-blue-hover
          b text-white h-16 rounded-lg ml-[-1rem] px-4 py-2 flex items-center
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
            <div className="mt-6 card  flex flex-wrap flex-row max-440:flex gap-4 max-440:gap-2 max-800:justify-around max-800:mt-8">
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
