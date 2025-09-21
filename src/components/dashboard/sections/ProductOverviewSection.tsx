"use client";

import ProductTable from "../tables/ProductTable";

export default function ProductOverviewSection() {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-5">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Product Overview
      </h2>
      <ProductTable />
    </section>
  );
}
