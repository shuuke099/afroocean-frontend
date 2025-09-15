"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Category {
  id: number;
  name: string;
  slug: string;
  children?: Category[];
}

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { slug } = useParams();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar stays stable */}
      <aside className="w-28 md:w-32 lg:w-40 bg-gray-50 border-r overflow-y-auto">
        <ul className="text-xs sm:text-sm text-gray-700">
          {categories.map((cat) => (
            <li
              key={cat.id}
              className={`px-3 py-2 transition ${
                slug === cat.slug
                  ? "bg-gray-200 text-primary font-medium"
                  : "hover:bg-gray-100 hover:text-primary-light"
              }`}
            >
              <Link href={`/categories/${cat.slug}`}>{cat.name}</Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* This part swaps based on slug */}
      <main className="flex-1 p-4 overflow-y-auto">{children}</main>
    </div>
  );
}
