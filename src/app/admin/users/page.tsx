"use client";

import UsersTable from "@/components/dashboard/tables/UsersTable";

export default function UsersPage() {
  const filters = [
    "All Users",
    "Sellers",
    "Buyers",
    "Pending Sellers",
    "Inactive Sellers",
    "Banned Users",
    "Verified Sellers",
    "Flagged Users",
  ];

  return (
    <main className="p-6 w-full">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        User Management
      </h1>

      <UsersTable
        title="User Management"
        filters={filters}
        defaultFilter={filters[0]}
        fullWidth
        role="manager"
      />
    </main>
  );
}
