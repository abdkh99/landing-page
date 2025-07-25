import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Balance ($)",
      data: [0, 200000, 600000, 900000, 1500000, 1876580],
      borderColor: "#827CBF",
      backgroundColor: "#827cbf75",
      tension: 0.3,
      fill: true,
    },
  ],
};
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          return "$" + value.toLocaleString();
        },
      },
    },
  },
};

const WhyUS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الأنيميشن بالميلي ثانية
      once: true, // تفعيل الأنيميشن مرة واحدة عند التمرير
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className=" relative max-sm:mt-10 flex flex-col mx-auto w-full min-h-screen h-[120vh] bg-white "
    >
      <div className="box bg-[#fff] shadow-2xl rounded-3xl absolute top-[-25vh] 2xl:top-[-20vh] translate-x-[-50%] left-1/2 xl:w-[70%] w-[90%] h-[50vh] min-h-fit max-960:hidden">
        <div className=" head flex justify-between p-10 xl:p-20 xl:pb-0">
          <div className="flex-1">
            <span className="text-sm text-MainBlue font-bold font-montserrat block pb-2">
              FUTURE PAYMEN
            </span>
            <p className="text-3xl font-bold">
              Experience that frows <br />
              with your scale.
            </p>
          </div>
          <div className=" flex-1">
            <p className="mt-5 leading-8 font-poppins text-gray-600">
              Design a financial operating system that works for your business
              and streamlined cash flow management
            </p>
          </div>
        </div>

        <div className="box flex flex-1 justify-between">
          <div
            data-aos="fade-up"
            className="box-content  max-lg:p-5 p-10 xl:p-20 flex-1 max-w-[20rem]"
          >
            <div className="text-2xl text-MainBlue ">
              <FontAwesomeIcon icon={faBuildingColumns} />
            </div>
            <span className="text-xl font-bold font-montserrat">
              Free transfers
            </span>
            <p className="text-s">
              Create a financial experienceeasy and automate repeat purchases by
              scheduling recurring payments.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="box-content max-lg:p-5 p-10  flex-1 max-w-[20rem] xl:p-20 xl:pb-0"
          >
            <div className="text-2xl text-MainBlue ">
              <FontAwesomeIcon icon={faCloudArrowUp} />
            </div>
            <span className="text-xl font-bold font-montserrat">
              Multiple account
            </span>
            <p>
              Run your operations with cash from your account and generate yield
              on funds stored in your account.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="box-content max-lg:p-5 p-10  flex-1 max-w-[20rem] xl:p-20 xl:pb-0"
          >
            <div className="text-2xl text-MainBlue ">
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>
            <span className="text-xl font-bold font-montserrat">
              Unmatched security
            </span>
            <p>
              Securely manage your finances with organization-wide MFA,
              card-locking, and account-level controls.
            </p>
          </div>
        </div>
      </div>
      <div className="big content  min-h-screen  w-full h-full min-960:mt-[20rem]">
        <div className="text-center ">
          <span data-aos="fade-up" className="text-MainBlue font-bold">
            Why US
          </span>
          <p data-aos="fade-up" className="text-5xl font-bold font-montserrat">
            Why they prefer Payzo
          </p>
          <div className="max-w-6xl mx-auto py-8 px-4 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                data-aos="fade-up"
                className="bg-white rounded-2xl p-6 shadow-2xl "
              >
                <h3 className="text-5xl text-start text-MainBlue font-bold mb-2">
                  3k+
                </h3>
                <p className="text-black text-xl text-start">
                  Businesses already running on Payzo
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="bg-white rounded-2xl p-6 shadow-2xl  text-start"
              >
                <h3 className=" font-bold mb-2 text-MainBlue text-xl">
                  Instant Withdraw your funds at any time
                </h3>
                <p className="text-gray-600">
                  Lightning fast transactions to your bank
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="bg-white rounded-2xl p-6 shadow-2xl  text-start"
              >
                <h3 className="text-xl font-bold mb-2 text-MainBlue ">
                  No asset volatility
                </h3>
                <p className="text-gray-600">
                  Generate returns on your cash reserves without making any
                  investments
                </p>
              </div>
            </div>

            <div data-aos="fade-up" className="bg-white rounded-2xl p-6 shadow">
              <h3 data-os-delay="300" className="text-xl font-bold mb-2">
                Summary
              </h3>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-gray-600 mb-4"
              >
                $1,876,580
                <span className="text-sm text-gray-400"> 6 Months</span>
              </p>
              <div data-aos="fade-up" className="w-full h-64 ">
                <Line data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUS;
