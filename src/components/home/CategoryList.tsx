"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Container from "../ui/container";

export default function CategoryList() {
  const [categories, setCategories] = useState<
    { name: string; slug: string }[]
  >([]);
  const pathname = usePathname();
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

  // 🔹 Detect active category from URL
  const active = (() => {
    if (pathname === "/categories") return "all";
    const parts = pathname.split("/");
    return parts.length > 2 ? parts[2] : "all"; // /categories/[slug]
  })();

  const handleClick = (slug: string) => {
    if (slug === "all") {
      router.push("/categories");
    } else {
      router.push(`/categories/${slug}`);
    }
  };

  return (
    <Container>
      <div className="flex overflow-x-auto no-scrollbar px-2 space-x-4 mb-2">
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
    </Container>
  );
}
