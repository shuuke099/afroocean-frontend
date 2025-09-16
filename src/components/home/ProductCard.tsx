"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  id: number;
  slug: string;
  name: string;
  title: string; // alias from normalizer
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

export default function ProductCard({
  id,
  slug,
  name,
  title,
  img,
  price,
  originalPrice,
  discount,
  countdown,
  sold,
  isLocal,
  rating,
  fastDelivery,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className="block bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      {/* Image */}
      <div className="relative w-full aspect-square">
        <Image
          src={img}
          alt={title || name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          className="object-cover"
        />

        {/* Badges */}
        {isLocal ? (
          <span className="absolute top-1 left-1 bg-green-600 text-white text-[10px] px-1.5 py-0.5 rounded">
            Local
          </span>
        ) : fastDelivery ? (
          <span className="absolute top-1 left-1 bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded">
            Fast Delivery
          </span>
        ) : null}
      </div>

      {/* Content */}
      <div className="p-2 text-sm space-y-1">
        {/* Header row */}
        <div className="flex justify-between items-center">
          {discount && <span className="text-xs text-red-500">{discount}</span>}
          <span className="text-[#ffa200] cursor-pointer">
            <ShoppingCart size={16} />
          </span>
        </div>

        {/* Product name */}
        <p className="line-clamp-2 leading-tight text-[13px]">
          {title || name}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-primary font-semibold text-[15px]">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-muted-foreground line-through text-xs">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Sold + Rating */}
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">{sold.toLocaleString()} sold</p>
          <div className="flex items-center gap-1 text-xs">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                fill={i < rating ? "#facc15" : "#e5e7eb"}
                strokeWidth={0}
              />
            ))}
          </div>
        </div>

        {/* Countdown */}
        {countdown && (
          <p className="text-[11px] text-gray-400">⏳ {countdown}</p>
        )}
      </div>
    </Link>
  );
}
