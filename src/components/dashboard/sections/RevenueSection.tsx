"use client";

import BarChart from "../charts/BarChart";

export default function RevenueSection() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 19000, 15000, 20000, 17000, 22000],
        backgroundColor: "#3b82f6",
      },
    ],
  };

  return (
    <section className="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-md border border-gray-200 dark:border-gray-800">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Revenue Overview
      </h2>
      <div className="h-64">
        <BarChart data={data} />
      </div>
    </section>
  );
}
