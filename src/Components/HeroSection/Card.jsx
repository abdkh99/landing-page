import PaymentMethodSelector from "./PaymentMethodSelector.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faViacoin} from "@fortawesome/free-brands-svg-icons"
import logo from "/public/assets/P-logo-removebg-preview.png"
const Card = () => {
  return (
    <div className="text-black flex mt-32 w-full h-full ">
      <div className="big-card relative w-[25rem] max-440:w-[20rem] h-fit border p-6 mx-4 rounded-xl ">
        <div className="title flex items-center gap-4 mb-8">
          <img
            src={logo}
            className="rounded-2xl w-16 h-12   "
            alt="no image"
          />
          <div>
            <p className="text-black font-semibold">Dipa Inhouse</p>
            <p>dioaflsuse@gmail.com</p>
          </div>
        </div>
        <div className="content border p-6 w-[100%] rounded-xl mb-2">
          <p className="text-black font-semibold">Product</p>
          <p className="text-black text-3xl font-semibold">$55,86,5006</p>
          <p className="text-black ">Jun 20,2025</p>
        </div>

        <div className="content ">
          <PaymentMethodSelector />
          <button className="w-full bg-SecBlue text-white py-2 rounded-lg mt-4 hover:bg-SecBlue">
            Pay
          </button>
        </div>
        <div className="small-card card bg-MainBlue overflow-hidden rounded-xl  h-2/3 w-2/3 top-[-3rem] right-[-5rem] absolute max-440:w-[12rem] max-440:top-[-1.5rem] max-440:right-[-1.5rem] max-440:  ">
          <p className="mt-5 ml-5 text-white">Cerdit Card</p>
          <p className="ml-5 text-2xl text-white  pb-12 ">465 7*** ***</p>
          <div className=" w-full  ml-[-1rem] mb-[5rem] border-white"></div>
          <div className="border-t border-MainBlue bg-SecBlue p-10 ">
            <div className="flex justify-between text-white mt-[1.5rem] ">
              <p className="mt-[-2rem] font-semibold font-mono text-3xl">
                Visa
              </p>
              <p className=" mt-[-1.6rem] text-2xl">
                <FontAwesomeIcon icon={faViacoin} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
