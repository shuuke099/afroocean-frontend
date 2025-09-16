"use client";

import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import Spinner from "../ui/Spinner";
import { useGetProductsQuery } from "@/lib/services/productsApi";
import { NormalizedProduct } from "@/lib/normalizeProducts";
import { searchProducts } from "@/lib/utils/searchProducts";
import { getDiversifiedProducts } from "@/lib/utils/getDiversifiedProducts";

export default function ProductList() {
  const { data: products = [], isLoading } = useGetProductsQuery();
  const [visibleProducts, setVisibleProducts] = useState<NormalizedProduct[]>(
    []
  );
  const [page, setPage] = useState(0);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(false);

  // Initial load
  useEffect(() => {
    if (!products.length) return;

    const lastSearch = localStorage.getItem("recentSearch");

    if (lastSearch) {
      // Returning user → personalize
      const personalized = searchProducts(products, lastSearch, 12);
      setVisibleProducts(personalized);
    } else {
      // New user → diversify
      const diversified = getDiversifiedProducts(products, 12, 0);
      setVisibleProducts(diversified);
    }
  }, [products]);

  // Infinite scroll observer
  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !loading) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loading, products, visibleProducts]);

  const loadMore = () => {
    if (!products.length) return;
    setLoading(true);

    setTimeout(() => {
      const nextPage = page + 1;
      const diversified = getDiversifiedProducts(products, 12, nextPage);

      if (diversified.length > 0) {
        setVisibleProducts((prev) => [...prev, ...diversified]);
        setPage(nextPage);
      }
      setLoading(false);
    }, 600);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div ref={loaderRef} className="flex justify-center items-center py-6">
        {loading && <Spinner />}
      </div>
    </>
  );
}
