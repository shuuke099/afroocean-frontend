"use client";

import ProductsTable from "@/components/dashboard/tables/ProductTable";

export default function SellerProductManagementPage() {
  return (
    <main className="p-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Product Management
        </h1>

        {/* Add Product button */}
        <button className="px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition-colors text-sm font-medium">
          + Add Product
        </button>
      </div>

      {/* Products Table */}
      <ProductsTable
        title="My Products"
        filters={[
          "All My Products",
          "Active",
          "Out of Stock",
          "Drafts",
          "Pending",
          "Rejected",
          "Flagged",
        ]}
        defaultFilter="All My Products"
        fullWidth
        role="seller" // ✅ pass role so actions adapt
      />
    </main>
  );
}
