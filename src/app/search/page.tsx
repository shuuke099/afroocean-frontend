"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Spinner from "@/components/ui/Spinner";
import { useGetProductsQuery } from "@/lib/services/productsApi";
import { NormalizedProduct } from "@/lib/normalizeProducts";
import { searchProducts } from "@/lib/utils/searchProducts";
import ProductCard from "@/components/home/ProductCard";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const { data: allProducts = [], isLoading } = useGetProductsQuery();

  const [results, setResults] = useState<NormalizedProduct[]>([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [loadingMore, setLoadingMore] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  // Recompute results whenever query changes
  useEffect(() => {
    if (!allProducts.length) return;
    const newResults = searchProducts(allProducts, query, 50); // fetch more than 12 for scroll
    setResults(newResults);
    setVisibleCount(12);
  }, [query, allProducts]);

  // Infinite scroll
  useEffect(() => {
    if (!loaderRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !loadingMore) {
          loadMore();
        }
      },
      { threshold: 1 }
    );
    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loadingMore, results]);

  const loadMore = () => {
    if (visibleCount >= results.length) return;
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 12, results.length));
      setLoadingMore(false);
    }, 600);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="p-4">
      {results.length === 0 ? (
        <p className="text-center text-gray-500">No results found.</p>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {results.slice(0, visibleCount).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div ref={loaderRef} className="flex justify-center py-6">
            {loadingMore && <Spinner />}
          </div>
        </>
      )}
    </div>
  );
}
