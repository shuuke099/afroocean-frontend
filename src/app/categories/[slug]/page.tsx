"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Spinner from "@/components/ui/Spinner";

interface Category {
  id: number;
  name: string;
  slug: string;
  children?: Category[];
}

export default function CategoryPage() {
  const { slug } = useParams();
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true); // 🔹 loader state

  useEffect(() => {
    setLoading(true); // start loading
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        const found = data.find((cat: Category) => cat.slug === slug);
        setActiveCategory(found || null);
      })
      .finally(() => setLoading(false)); // stop loading
  }, [slug]);

  const subCategories = activeCategory?.children || [];

  return (
    <>
      <h1 className="text-lg font-semibold text-primary mb-4">
        {activeCategory?.name || "Shop by Category"}
      </h1>

      {loading ? (
        // 🔹 Loader UI
        <div className="flex justify-center items-center h-40">
          <Spinner size={40} color="border-orange-400" border="border-4" />
        </div>
      ) : subCategories.length > 0 ? (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 2xl:grid-cols-8 gap-4 text-center">
          {subCategories.map((sub) => (
            <div
              key={sub.id}
              className="cursor-pointer hover:scale-105 transition"
            >
              <img
                src={sub.img || `https://picsum.photos/seed/${sub.slug}/100`}
                alt={sub.name}
                className="w-16 sm:w-24 aspect-square object-cover rounded-full mx-auto shadow"
              />
              <p className="mt-2 text-sm font-medium">{sub.name}</p>
            </div>
          ))}
        </div>
      ) : (
        // 🔹 Fallback if no subcategories
        <p className="text-gray-500">No subcategories found.</p>
      )}
    </>
  );
}
