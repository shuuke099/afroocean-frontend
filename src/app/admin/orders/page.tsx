"use client";

import ProductTable from "@/components/dashboard/tables/ProductTable";
import { Package } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Package className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Products
          </h1>
        </div>
        <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors">
          + Add Product
        </button>
      </div>

      {/* Table */}
      <ProductTable />
    </div>
  );
}
