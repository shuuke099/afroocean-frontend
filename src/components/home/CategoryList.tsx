"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CategoryList() {
  const [categories, setCategories] = useState<{ name: string; slug: string }[]>([]);
  const [active, setActive] = useState("all");
  const router = useRouter();

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((cat: any) => ({
          name: cat.name,
          slug: cat.slug,
        }));
        setCategories([{ name: "All", slug: "all" }, ...mapped]);
      });
  }, []);

  const handleClick = (slug: string) => {
    setActive(slug);
    if (slug === "all") {
      router.push("/categories");
    } else {
      router.push(`/categories/${slug}`);
    }
  };

  return (
    <div className="w-full pb-2 bg-white">
      <div className="flex overflow-x-auto no-scrollbar px-2 space-x-4">
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => handleClick(cat.slug)}
            className={`py-1 px-1 text-sm whitespace-nowrap transition
              ${
                active === cat.slug
                  ? "text-[#f97316] border-b-2 border-[#f97316] font-medium"
                  : "text-gray-600 hover:text-[#f97316]"
              }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}
