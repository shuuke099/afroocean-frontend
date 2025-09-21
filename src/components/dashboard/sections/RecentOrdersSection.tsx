"use client";

import OrderTable from "../tables/OrderTable";

export default function RecentOrdersSection() {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-5">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Recent Orders
      </h2>
      <OrderTable limit={5} />
    </section>
  );
}
