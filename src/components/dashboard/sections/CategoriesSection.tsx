"use client";

const dummyCategories = [
  { id: 1, name: "Real Estate", listings: 120 },
  { id: 2, name: "Automotive", listings: 95 },
  { id: 3, name: "Electronics", listings: 300 },
  { id: 4, name: "Fashion", listings: 210 },
];

export default function CategoriesSection() {
  return (
    <section className="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-md border border-gray-200 dark:border-gray-800">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Categories
      </h2>
      <ul className="space-y-3">
        {dummyCategories.map((cat) => (
          <li
            key={cat.id}
            className="flex justify-between items-center p-3 rounded-md bg-gray-50 dark:bg-gray-800"
          >
            <span className="font-medium text-gray-700 dark:text-gray-200">
              {cat.name}
            </span>
            <span className="text-sm text-gray-500">
              {cat.listings} listings
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
