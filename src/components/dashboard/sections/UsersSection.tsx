"use client";

import UsersTable from "../tables/UsersTable";

export default function UsersSection() {
  return (
    <section className="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-md border border-gray-200 dark:border-gray-800">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Users
      </h2>
      <UsersTable />
    </section>
  );
}
