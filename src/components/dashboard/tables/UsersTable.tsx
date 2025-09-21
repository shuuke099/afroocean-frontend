"use client";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive" | "pending";
};

const users: User[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Seller",
    status: "active",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    role: "Buyer",
    status: "inactive",
  },
  {
    id: 3,
    name: "Carla Reyes",
    email: "carla@example.com",
    role: "Admin",
    status: "active",
  },
  {
    id: 4,
    name: "David Lee",
    email: "david@example.com",
    role: "Seller",
    status: "pending",
  },
  {
    id: 5,
    name: "Eva Brown",
    email: "eva@example.com",
    role: "Buyer",
    status: "active",
  },
];

export default function UsersTable() {
  return (
    <section className="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-md border border-gray-200 dark:border-gray-800">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Users
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Role</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
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
                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                  {user.role}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium
                      ${
                        user.status === "active"
                          ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                          : user.status === "inactive"
                          ? "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200"
                      }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
