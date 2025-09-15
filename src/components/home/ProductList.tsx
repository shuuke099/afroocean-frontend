"use client";

import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import Spinner from "../ui/Spinner";

interface Product {
  id: number;
  slug: string;
  name: string;
  title: string;
  img: string;
  price: number;
  originalPrice: number;
  discount?: string;
  countdown?: string;
  sold: number;
  isLocal: boolean;
  rating: number;
  fastDelivery: boolean;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  // Fetch normalized products
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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
  }, [loading, products]);

  const loadMore = () => {
    if (visibleCount >= products.length) return;
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 12, products.length));
      setLoading(false);
    }, 800);
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {products.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div ref={loaderRef} className="flex justify-center items-center py-6">
        {loading && <Spinner />}
      </div>
    </>
  );
}
