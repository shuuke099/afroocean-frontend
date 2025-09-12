"use client";

import CategoryGrid from "@/components/home/CategoryGrid";
import Link from "next/link";

const sidebarCategories = [
  "Home & Kitchen",
  "Women's Clothing",
  "Women's Curve Clothing",
  "Women's Shoes",
  "Women's Lingerie & Lounge",
  "Men's Clothing",
  "Men's Shoes",
  "Men's Big & Tall",
  "Men's Underwear & Sleepwear",
  "Sports & Outdoors",
  "Jewelry & Accessories",
];

export default function Categories() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-28 sm:w-28 md:w-32 lg:w-40 bg-gray-50 border-r overflow-y-auto">
        <ul className="text-xs sm:text-sm text-gray-700">
          {sidebarCategories.map((cat, i) => (
            <li
              key={i}
              className="px-2 sm:px-3 py-2 sm:py-3 cursor-pointer hover:bg-gray-100 hover:text-primary-light transition"
            >
              <Link
                href={`/categories/${cat.toLowerCase().replace(/ & | /g, "-")}`}
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-3 sm:p-4 overflow-y-auto">
        <h1 className="text-base sm:text-lg font-semibold text-primary-light mb-3 sm:mb-4">
          Shop by Category
        </h1>

        {/* ✅ Grid layout for category page (3 per row on mobile) */}
        <CategoryGrid gridClasses="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-3 sm:gap-x-4 gap-y-5 sm:gap-y-6 text-center" />
      </main>
    </div>
  );
}
