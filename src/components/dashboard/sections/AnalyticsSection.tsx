"use client";

import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import PieChart from "../charts/PieChart";

export default function AnalyticsSection() {
  // 👉 Data for Inquiries Over Time (LineChart)
  const lineLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const lineValues = [50, 120, 90, 180, 140, 220]; // Example: inquiries per month

  // 👉 Data for Engagement by Category (BarChart)
  const barData = {
    labels: ["Electronics", "Clothing", "Furniture", "Toys"],
    datasets: [
      {
        label: "Inquiries", // ✅ changed from Revenue
        data: [120, 90, 60, 100], // Example: clicks/views per category
        backgroundColor: "#3b82f6",
      },
    ],
  };

  // 👉 Data for Inquiry Distribution (PieChart)
  const pieLabels = ["Electronics", "Clothing", "Furniture"];
  const pieValues = [45, 35, 20]; // Example % split of inquiries

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      {/* Inquiries Over Time */}
      <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-md border border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Inquiries Over Time {/* ✅ updated */}
        </h3>
        <div className="h-64">
          <LineChart
            labels={lineLabels}
            values={lineValues}
            label="Inquiries"
            color="#6366f1"
          />
        </div>
      </div>

      {/* Engagement by Category */}
      <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-md border border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Engagement by Category {/* ✅ updated */}
        </h3>
        <BarChart data={barData} />
      </div>

      {/* Inquiry Distribution */}
      <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-md border border-gray-200 dark:border-gray-800 lg:col-span-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Inquiry Distribution {/* ✅ updated */}
        </h3>
        <div className="max-w-md mx-auto">
          <PieChart labels={pieLabels} values={pieValues} />
        </div>
      </div>
    </section>
  );
}
