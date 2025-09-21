"use client";

import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";

export default function AnalyticsSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      {/* Sales Over Time */}
      <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-md border border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Sales Over Time
        </h3>
        <LineChart />
      </div>

      {/* Revenue by Category */}
      <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-md border border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Revenue by Category
        </h3>
        <BarChart />
      </div>

      {/* Sales Distribution */}
      <div className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-md border border-gray-200 dark:border-gray-800 lg:col-span-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Sales Distribution
        </h3>
        <div className="max-w-md mx-auto">
          <PieChart />
        </div>
      </div>
    </section>
  );
}
