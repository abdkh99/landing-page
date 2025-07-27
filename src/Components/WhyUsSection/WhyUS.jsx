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
      className="relative
    mx-auto
    flex
    min-h-[130vh]
    max-960:min-h-[100vh]
    w-full
    flex-col
    bg-white
    max-sm:mt-10"
    >
      
      <div
        className="box
      absolute
      left-1/2
      top-[-25vh]
      h-[50vh]
      min-h-fit
      w-[90%]
      -translate-x-1/2
      rounded-3xl
      bg-[#fff]
      shadow-2xl
      2xl:top-[-10]
      max-960:hidden
      xl:w-[70%]"
      >
        <div className="head flex justify-between p-10 xl:p-20 xl:pb-0">
          <div className="flex-1">
            <span className="mb-2 block font-montserrat font-bold text-MainBlue text-sm">
              FUTURE PAYMEN
            </span>
            <p className="text-3xl font-bold">
              Experience that frows <br />
              with your scale.
            </p>
          </div>
          <div className="flex-1">
            <p className="mt-5 font-poppins leading-8 text-gray-600">
              Design a financial operating system that works for your business
              and streamlined cash flow management
            </p>
          </div>
        </div>

        <div className="box flex flex-1 justify-between">
          <div
            data-aos="fade-up"
            className="box-content
          flex-1
          p-10
          max-w-[20rem]
          flex-col
          max-lg:p-5
          xl:p-20"
          >
            <div className="text-2xl text-MainBlue">
              <FontAwesomeIcon icon={faBuildingColumns} />
            </div>
            <span className="font-montserrat text-xl font-bold">
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
            className="box-content
          flex-1
          p-10
          max-w-[20rem]
          flex-col
          max-lg:p-5
          xl:p-20
          xl:pb-0"
          >
            <div className="text-2xl text-MainBlue">
              <FontAwesomeIcon icon={faCloudArrowUp} />
            </div>
            <span className="font-montserrat text-xl font-bold">
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
            className="box-content
          flex-1
          p-10
          max-w-[20rem]
          flex-col
          max-lg:p-5
          xl:p-20
          xl:pb-0"
          >
            <div className="text-2xl text-MainBlue">
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>
            <span className="font-montserrat text-xl font-bold">
              Unmatched security
            </span>
            <p>
              Securely manage your finances with organization-wide MFA,
              card-locking, and account-level controls.
            </p>
          </div>
        </div>
      </div>
      <div className="big content h-full min-h-screen w-full min-960:mt-[20rem]">
        <div className="text-center pt-5  max-2xl:pt-32 max-960:pt-0">
          <span data-aos="fade-right" className="font-bold text-MainBlue">
            Why US
          </span>
          <p
            data-aos="fade-right"
            className="font-montserrat text-5xl font-bold"
          >
            Why they prefer Payzo
          </p>
          <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div
                data-aos="fade-right"
                className="rounded-2xl bg-white p-6 shadow-2xl"
              >
                <h3 className="mb-2 text-start font-bold text-MainBlue text-5xl">
                  3k+
                </h3>
                <p className="text-start text-black text-xl">
                  Businesses already running on Payzo
                </p>
              </div>

              <div
                data-aos="fade-right"
                data-aos-delay="200"
                className="rounded-2xl bg-white p-6 text-start shadow-2xl"
              >
                <h3 className="mb-2 font-bold text-MainBlue text-xl">
                  Instant Withdraw your funds at any time
                </h3>
                <p className="text-gray-600">
                  Lightning fast transactions to your bank
                </p>
              </div>

              <div
                data-aos="fade-right"
                data-aos-delay="300"
                className="rounded-2xl bg-white p-6 text-start shadow-2xl"
              >
                <h3 className="mb-2 font-bold text-MainBlue text-xl">
                  No asset volatility
                </h3>
                <p className="text-gray-600">
                  Generate returns on your cash reserves without making any
                  investments
                </p>
              </div>
            </div>

            <div data-aos="fade-up" className="rounded-2xl bg-white p-6 shadow">
              <h3 data-os-delay="300" className="mb-2 text-xl font-bold">
                Summary
              </h3>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="mb-4 text-gray-600"
              >
                $1,876,580
                <span className="text-sm text-gray-400"> 6 Months</span>
              </p>
              <div data-aos="fade-up" className="h-64 w-full">
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
