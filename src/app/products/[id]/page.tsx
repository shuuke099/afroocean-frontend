"use client";
import Image from "next/image";
import { useState } from "react";
import { Star } from "lucide-react";
import ProductReviews from "@/components/productPage/productReview";
import Breadcrumbs from "@/components/productPage/breadCrumbs";
import ProductGallery from "@/components/productPage/productGallery";
import Container from "@/components/ui/container";
const images = [
  "https://picsum.photos/id/101/360/360",
  "https://picsum.photos/id/102/360/360",
  "https://picsum.photos/id/103/360/360",
  "https://picsum.photos/id/104/360/360",
  "https://picsum.photos/id/105/360/360",
];

const sizes = ["6#", "7#", "8#", "9#", "10#", "11#", "12#"];

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedColor, setSelectedColor] = useState("Golden");
  const [selectedSize, setSelectedSize] = useState("7#");

  return (
    <Container>
      <Breadcrumbs />
      <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-6">
        {/* Left: Images */}
        <div className="space-y-2">
          <ProductGallery />
        </div>

        {/* Right: Product Details */}
        <div className="space-y-3 text-sm">
          <p className="text-green-700 font-semibold">
            🚗 Local -{" "}
            <span className="text-green-600">
              Fastest delivery: 2 business days
            </span>
          </p>

          <h1 className="text-lg font-semibold">
            Business Silvery And Golden Inlaid Water Decorative Ring Suitable
            For Men's Daily Wear Punk Ring Valentine's Day Gift
          </h1>

          <div className="text-gray-600 text-xs">
            657 sold | Sold by <span className="font-bold">🟠</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-600 font-semibold bg-green-100 text-xs px-2 py-[1px] rounded">
              #4 Best Seller
            </span>
            <span className="text-[#ffa200] font-bold text-xl">$3.50</span>
            <span className="line-through text-gray-400 text-sm">$28.96</span>
            <span className="bg-[#ffa200] text-white text-xs px-2 py-[1px] rounded">
              87% OFF last 3 days
            </span>
          </div>

          <div className="flex flex-wrap gap-2 text-xs sm:justify-start justify-center">
            {["Golden", "Silvery"].map((color) => (
              <button
                key={color}
                className={`border rounded px-2 py-1 ${
                  selectedColor === color
                    ? "border-[#ffa200]"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 text-xs sm:justify-start justify-center">
            {sizes.map((size) => (
              <button
                key={size}
                className={`border rounded-full w-10 h-10 ${
                  selectedSize === size ? "border-[#ffa200]" : "border-gray-300"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <button className="flex-1 border border-[#ffa200] text-[#ffa200] rounded-full py-2 font-semibold text-xs">
              Add to cart <span className="ml-1">87% OFF</span>
            </button>
            <button className="flex-1 bg-[#ffa200] rounded-full py-2 text-white text-xs font-semibold">
              Buy now <br />
              <span className="text-[10px] font-normal">
                Fastest delivery in 2 business days
              </span>
            </button>
          </div>
        </div>
      </div>
      <ProductReviews />
    </Container>
  );
}
