"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CategoriesIndex() {
  const router = useRouter();

  useEffect(() => {
    const lastCategory = localStorage.getItem("lastCategory");
    if (lastCategory) {
      router.replace(`/categories/${lastCategory}`);
    } else {
      router.replace("/categories/women"); // 👈 pick your default fallback
    }
  }, [router]);

  return null; // nothing flashes, instant redirect
}
