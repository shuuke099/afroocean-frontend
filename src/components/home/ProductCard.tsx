"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  id: string;          // 👈 add this
  slug?: string;       // 👈 optional if you use slugs
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  sold?: number;
  isLocal?: boolean;
  rating?: number;
  fastDelivery?: boolean;
  tag?: string;
  countdown?: string;
}

export default function ProductCard({
  id,
  slug,
  image,
  title,
  price,
  originalPrice,
  discount,
  sold,
  isLocal,
  rating,
  fastDelivery,
  tag,
  countdown,
}: ProductCardProps) {
  const router = useRouter();

  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all">
      <Link href={`/products/${slug || id}`} >
      <div className="relative w-full h-[140px]"><Image src={image} alt={title} fill className="object-cover" /></div>
      </Link>

      <div className="p-2 text-sm space-y-1">
        <div className="flex justify-between">
          {isLocal && <span className="text-xs text-green-600">Local</span>}

          {/* ✅ Option 1: Using Link (SEO-friendly) */}
          <Link
            href={`/products/${slug || id}`}
            className="text-[#ffa200] text-xs cursor-pointer"
          >
            <ShoppingCart />
          </Link>

          {/* ✅ Option 2: Using onClick (programmatic navigation) */}
          {/* 
          <div
            className="text-[#ffa200] text-xs cursor-pointer"
            onClick={() => router.push(`/products/${slug || id}`)}
          >
            <ShoppingCart />
          </div>
          */}
        </div>

        <p className="line-clamp-2 leading-tight text-[13px]">{title}</p>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-primary font-semibold text-[15px]">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-muted-foreground line-through text-xs">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className="flex justify-between">
          {sold && (
            <p className="text-xs text-muted-foreground">
              {sold.toLocaleString()} sold
            </p>
          )}
          {rating && (
            <div className="flex items-center gap-1 text-xs text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  fill={i < rating ? "#facc15" : "#e5e7eb"}
                  strokeWidth={0}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
