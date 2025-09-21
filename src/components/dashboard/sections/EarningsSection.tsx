"use client";

import BarChart from "../charts/BarChart";

export default function EarningsSection() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 15000, 10000, 18000, 20000, 17000],
        backgroundColor: "#3b82f6",
      },
      {
        label: "Profit",
        data: [8000, 10000, 7000, 12000, 15000, 11000],
        backgroundColor: "#10b981",
      },
    ],
  };

  return (
    <section className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-5">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Earnings
      </h2>
      <div className="h-72">
        <BarChart data={data} />
      </div>
    </section>
  );
}
