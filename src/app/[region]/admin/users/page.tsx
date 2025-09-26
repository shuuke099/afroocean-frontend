// src/app/[region]/admin/users/page.tsx
import UsersTable from "@/components/dashboard/tables/UsersTable";

export default async function RegionalAdminUsersPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;

  const filters = [
    "Sellers",
    "Pending Sellers",
    "Inactive Sellers",
    "Banned Users",
    "Verified Sellers",
    "Flagged Users",
  ];

  return (
    <main className="p-6 w-full">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        User Management – {region}
      </h1>

      <UsersTable
        title="User Management"
        filters={filters}
        defaultFilter={filters[0]}
        fullWidth
        role="regional-admin"
        region={region}
      />
    </main>
  );
}
