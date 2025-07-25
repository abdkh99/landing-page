import React from "react";
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
      data: [0, 200000, 500000, 900000, 1500000, 1876580],
      borderColor: "#0ea5e9",
      backgroundColor: "rgba(14, 165, 233, 0.2)",
      tension: 0.3,
      fill: true,
      pointRadius: 0,
      pointHoverRadius: 0,
      pointHitRadius: 0,
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

export default function PayzoDashboard() {
  return (
    <div className="max-w-6xl mx-auto pt-8 px-4 space-y-6 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-2xl font-bold mb-2">3k+</h3>
          <p className="text-gray-600">Businesses already running on Payzo</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-xl font-bold mb-2">
            Instant Withdraw your funds at any time
          </h3>
          <p className="text-gray-600">
            Lightning fast transactions to your bank
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-xl font-bold mb-2">No asset volatility</h3>
          <p className="text-gray-600">
            Generate returns on your cash reserves without making any
            investments
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-2xl">
        <h3 className="text-xl font-bold mb-2">Summary</h3>
        <p className="text-gray-600 mb-4">
          $1,876,580 <span className="text-sm text-gray-400">6 Months</span>
        </p>
        <div className="w-full h-64">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}
