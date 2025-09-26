"use client";

import UsersTable from "@/components/dashboard/tables/UsersTable";

type UserPageProps = {
  role: "manager" | "regional-admin";
  region?: string;
};

export default function UserManagement({ role, region }: UserPageProps) {
  const filters =
    role === "manager"
      ? [
          "All Users",
          "Sellers",
          "Buyers",
          "Pending Sellers",
          "Inactive Sellers",
          "Banned Users",
          "Verified Sellers",
          "Flagged Users",
        ]
      : [
          "Sellers", // ✅ only sellers, filtered by region in UsersTable
          "Pending Sellers",
          "Inactive Sellers",
          "Banned Users",
          "Verified Sellers",
          "Flagged Users",
        ];

  return (
    <main className="p-6 w-full">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        {role === "manager" ? "User Management" : `User Management – ${region}`}
      </h1>

      <UsersTable
        title="User Management"
        filters={filters}
        defaultFilter={filters[0]}
        fullWidth
        role={role} // pass role so filtering can happen inside table
        region={region}
      />
    </main>
  );
}
