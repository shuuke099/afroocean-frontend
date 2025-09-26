"use client";

import BarChart from "../charts/BarChart";

export default function EngagementSection() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Inquiries (WhatsApp Clicks)", // ✅ instead of Revenue
        data: [50, 120, 80, 150, 90, 200], // example numbers
        backgroundColor: "#3b82f6", // blue
      },
      {
        label: "Product Views", // ✅ instead of Profit
        data: [300, 500, 400, 600, 550, 700], // example numbers
        backgroundColor: "#10b981", // green
      },
    ],
  };

  return (
    <section className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-5">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Engagement Overview {/* ✅ updated */}
      </h2>
      <div className="h-72">
        <BarChart data={data} />
      </div>
    </section>
  );
}
