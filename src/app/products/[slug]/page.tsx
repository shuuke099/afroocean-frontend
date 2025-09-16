"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Container from "@/components/ui/container";
import Breadcrumbs from "@/components/productPage/breadCrumbs";
import ProductGallery from "@/components/productPage/productGallery";
import ProductReviews from "@/components/productPage/productReview";

interface Product {
  id: number;
  slug: string;
  name: string;
  title: string; // alias (from normalizeProducts)
  img: string;
  price: number;
  originalPrice: number;
  discount: string;
  countdown: string;
  sold: number;
  rating: number;
  isLocal: boolean;
  fastDelivery: boolean;
}

export default function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);

    fetch(`/api/products/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched product:", data); // ✅ debug

        if (data && data.price !== undefined) {
          setProduct(data); // only set if it’s a valid product
        } else {
          setProduct(null); // triggers "Product not found"
        }
      })
      .catch((err) => {
        console.error("Failed to fetch product:", err);
        setProduct(null);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="w-8 h-8 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return <p className="text-center text-gray-500">Product not found.</p>;
  }

  return (
    <Container>
      <Breadcrumbs />
      <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-6">
        {/* Left: Images */}
        <div className="space-y-2">
          <ProductGallery images={[product.img]} />
        </div>

        {/* Right: Product Details */}
        <div className="space-y-3 text-sm">
          {product.isLocal && (
            <p className="text-green-700 font-semibold">
              🚗 Local -{" "}
              <span className="text-green-600">
                Fastest delivery: 2 business days
              </span>
            </p>
          )}

          <h1 className="text-lg font-semibold">{product.name}</h1>

          <div className="text-gray-600 text-xs">
            {product.sold !== undefined
              ? `${product.sold.toLocaleString()} sold`
              : "No sales data"}
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#ffa200] font-bold text-xl">
              ${product.price.toFixed(2)}
            </span>
            <span className="line-through text-gray-400 text-sm">
              ${product.originalPrice.toFixed(2)}
            </span>
            <span className="bg-[#ffa200] text-white text-xs px-2 py-[1px] rounded">
              {product.discount}
            </span>
          </div>

          {/* Dummy Colors */}
          <div className="flex flex-wrap gap-2 text-xs">
            {["Golden", "Silvery"].map((color) => (
              <button
                key={color}
                className="border rounded px-2 py-1 border-gray-300"
              >
                {color}
              </button>
            ))}
          </div>

          {/* Dummy Sizes */}
          <div className="flex flex-wrap gap-2 text-xs">
            {["6#", "7#", "8#", "9#"].map((size) => (
              <button
                key={size}
                className="border rounded-full w-10 h-10 border-gray-300"
              >
                {size}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <button className="flex-1 border border-[#ffa200] text-[#ffa200] rounded-full py-2 font-semibold text-xs">
              Add to cart <span className="ml-1">{product.discount}</span>
            </button>
            <button className="flex-1 bg-[#ffa200] rounded-full py-2 text-white text-xs font-semibold">
              Buy now <br />
              {product.fastDelivery && (
                <span className="text-[10px] font-normal">
                  Fastest delivery in 2 business days
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      <ProductReviews />
    </Container>
  );
}
