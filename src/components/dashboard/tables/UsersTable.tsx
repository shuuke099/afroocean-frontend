"use client";

import { useState } from "react";
import { Users } from "@/data/usersData";

type UserRole = "manager" | "regional-admin" | "seller" | "buyer";

type User = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: "active" | "inactive" | "pending" | "banned";
  verified?: boolean;
  flagged?: number;
  lastActive?: string;
  productsCount?: number;
  region?: string;
};

type UsersTableProps = {
  title?: string;
  filters: string[];
  defaultFilter?: string;
  fullWidth?: boolean;
  role: "manager" | "regional-admin" | "seller"; // logged-in role
  region?: string; // for regional-admin
};

export default function UsersTable({
  title = "Users",
  filters,
  defaultFilter,
  fullWidth = false,
  role,
  region,
}: UsersTableProps) {
  const [filter, setFilter] = useState(defaultFilter || filters[0]);

  // ✅ scope users
  const scopedUsers =
    role === "regional-admin"
      ? Users.filter(
          (u) =>
            u.role === "seller" &&
            u.region?.toLowerCase() === region?.toLowerCase()
        )
      : Users;

  // ✅ filtering
  const filteredUsers = scopedUsers.filter((u) => {
    switch (filter) {
      case "Sellers":
        return u.role === "seller";
      case "Buyers":
        return u.role === "buyer";
      case "Pending Sellers":
        return u.role === "seller" && u.status === "pending";
      case "Inactive Sellers":
        return u.role === "seller" && u.status === "inactive";
      case "Banned Users":
        return u.status === "banned";
      case "Verified Sellers":
        return u.role === "seller" && u.verified;
      case "Flagged Users":
        return (u.flagged ?? 0) > 0;
      case "Recently Active":
        return u.role === "seller" && u.status === "active";
      case "Top Sellers":
        return (
          u.role === "seller" &&
          u.status === "active" &&
          (u.productsCount ?? 0) > 50
        );
      default:
        return true;
    }
  });

  return (
    <section
      className={`${
        fullWidth ? "w-full" : "rounded-xl shadow-md border"
      } bg-white dark:bg-gray-900 p-6 border-gray-200 dark:border-gray-800`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
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
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Role</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Region</th>
              <th className="px-4 py-3 font-medium">Last Active</th>
              <th className="px-4 py-3 font-medium">Products</th>
              <th className="px-4 py-3 font-medium">Flags</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td
                  colSpan={9}
                  className="px-4 py-6 text-center text-gray-500 dark:text-gray-400"
                >
                  No users found for this filter.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <td className="px-4 py-3 text-gray-900 dark:text-gray-100">
                    {user.name}
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                    {user.email}
                  </td>
                  <td className="px-4 py-3">{user.role}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium
                        ${
                          user.status === "active"
                            ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                            : user.status === "inactive"
                            ? "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
                            : user.status === "pending"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200"
                            : "bg-gray-300 text-gray-700 dark:bg-gray-600 dark:text-gray-200"
                        }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{user.region || "-"}</td>
                  <td className="px-4 py-3">{user.lastActive || "-"}</td>
                  <td className="px-4 py-3">
                    {user.role === "seller" ? user.productsCount ?? 0 : "-"}
                  </td>
                  <td className="px-4 py-3">{user.flagged ?? 0}</td>
                  <td className="px-4 py-3 flex gap-2">
                    {role !== "seller" && user.status !== "banned" && (
                      <>
                        {user.status !== "active" && (
                          <button className="px-2 py-1 bg-green-500 text-white rounded text-xs">
                            Activate
                          </button>
                        )}
                        {user.status === "active" && (
                          <button className="px-2 py-1 bg-red-500 text-white rounded text-xs">
                            Deactivate
                          </button>
                        )}
                        <button className="px-2 py-1 bg-gray-700 text-white rounded text-xs">
                          Ban
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
