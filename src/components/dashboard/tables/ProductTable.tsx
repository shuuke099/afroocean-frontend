"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { DashProduct } from "@/types/product";

type ProductsTableProps = {
  products: DashProduct[];
  title?: string;
  filters?: string[];
  defaultFilter?: string;
  fullWidth?: boolean;
  role?: "admin" | "manager" | "regional-admin" | "seller";
};

const defaultFilters = [
  "All Products",
  "Pending",
  "Approved",
  "Rejected",
  "Out of Stock",
  "Flagged",
];

export default function ProductsTable({
  products,
  title = "Products",
  filters = defaultFilters,
  defaultFilter,
  fullWidth = false,
  role = "admin",
}: ProductsTableProps) {
  const [filter, setFilter] = useState(defaultFilter || filters[0]);
  const router = useRouter();
  const filteredProducts = products.filter((p) => {
    switch (filter) {
      case "Pending":
      case "Pending Products":
        return p.status === "pending";
      case "Approved":
        return p.status === "approved";
      case "Rejected":
        return p.status === "rejected";
      case "Out of Stock":
        return p.status === "out-of-stock";
      case "Flagged":
      case "Flagged Products":
        return p.status === "flagged";
      default:
        return true;
    }
  });

  return (
    <section
      className={`${
        fullWidth ? "w-full" : "rounded-xl shadow-md border"
      } bg-white dark:bg-gray-900  border-gray-200 dark:border-gray-800`}
    >
      {/* Header + Filter */}
      <div className="flex items-center justify-between mb-4 p-3">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-md px-3 py-1 text-sm dark:bg-gray-800 dark:text-gray-200"
        >
          {filters.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-4 py-3 font-medium">Product ID</th>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Seller</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Price</th>
              <th className="px-4 py-3 font-medium">Quantity</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Inquiries</th>
              <th className="px-4 py-3 font-medium">Region</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((p) => (
              <tr
                key={p.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <td className="px-4 py-3">{p.id}</td>
                <td className="px-4 py-3 text-gray-900 dark:text-gray-100">
                  {p.name}
                </td>
                <td className="px-4 py-3">{p.sellerName}</td>
                <td className="px-4 py-3">{p.category}</td>
                <td className="px-4 py-3">${p.price}</td>
                <td className="px-4 py-3">{p.quantity}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium
                      ${
                        p.status === "approved"
                          ? "bg-green-100 text-green-700"
                          : p.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : p.status === "rejected"
                          ? "bg-red-100 text-red-700"
                          : p.status === "out-of-stock"
                          ? "bg-gray-200 text-gray-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="px-4 py-3">{p.inquiries ?? 0}</td>
                <td className="px-4 py-3">{p.region || "-"}</td>
                <td className="px-4 py-3 flex gap-2">
                  {/* Admin / Manager / Regional Admin actions */}
                  {(role === "admin" ||
                    role === "manager" ||
                    role === "regional-admin") && (
                    <>
                      {p.status === "pending" && (
                        <>
                          <button className="px-2 py-1 bg-green-500 text-white rounded text-xs">
                            Approve
                          </button>
                          <button className="px-2 py-1 bg-red-500 text-white rounded text-xs">
                            Reject
                          </button>
                        </>
                      )}
                      {p.status === "flagged" && (
                        <button className="px-2 py-1 bg-yellow-600 text-white rounded text-xs">
                          Review
                        </button>
                      )}
                      <button
                        onClick={() => router.push(`/admin/products/${p.id}`)} // ✅ navigate
                        className="px-2 py-1 bg-gray-700 text-white rounded text-xs"
                      >
                        View
                      </button>
                    </>
                  )}

                  {/* Seller actions */}
                  {role === "seller" && (
                    <>
                      <button className="px-2 py-1 bg-blue-500 text-white rounded text-xs">
                        Edit
                      </button>
                      {p.status === "out-of-stock" && (
                        <button className="px-2 py-1 bg-green-500 text-white rounded text-xs">
                          Restock
                        </button>
                      )}
                      <button className="px-2 py-1 bg-gray-600 text-white rounded text-xs">
                        Deactivate
                      </button>
                      {p.status !== "pending" && (
                        <button className="px-2 py-1 bg-red-500 text-white rounded text-xs">
                          Delete
                        </button>
                      )}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
