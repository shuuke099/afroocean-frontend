"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Category {
  id: number;
  name: string;
  slug: string;
  img?: string;
}

const CategoryScroller: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((cat: any) => ({
          id: cat.id,
          name: cat.name,
          slug: cat.slug,
          img: cat.img || "https://picsum.photos/seed/" + cat.slug + "/100/100",
        }));
        setCategories(mapped);
        setError(false);
      })
      .catch((err) => {
        console.error("Failed to load categories", err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleClick = (slug: string) => {
    if (slug === "all") {
      router.push("/categories");
    } else {
      router.push(`/categories/${slug}`);
    }
  };

  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="grid grid-rows-2 grid-flow-col auto-cols-max gap-x-4 gap-y-2 p-1">
        {/* Loading skeleton */}
        {loading &&
          Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex-none w-20 sm:w-24 text-center animate-pulse"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full mx-auto" />
              <div className="h-3 bg-gray-200 rounded mt-2 w-12 mx-auto" />
            </div>
          ))}

        {/* Error state */}
        {!loading && error && (
          <p className="text-red-500 col-span-full">Failed to load categories</p>
        )}

        {/* Real categories */}
        {!loading &&
          !error &&
          categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleClick(cat.slug)}
              className="flex-none w-20 sm:w-24 text-center cursor-pointer hover:scale-105 transition"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full mx-auto shadow"
              />
              <p className="mt-2 text-xs sm:text-sm font-medium text-gray-700">
                {cat.name}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryScroller;
