"use client";

import Image from "next/image";

const categories = [
  {
    name: "Fashion",
    href: "/categories/fashion",
    img: "https://picsum.photos/id/1011/400/400",
  },
  {
    name: "Electronics",
    href: "/categories/electronics",
    img: "https://picsum.photos/id/1015/400/400",
  },
  {
    name: "Home & Living",
    href: "/categories/home",
    img: "https://picsum.photos/id/1025/400/400",
  },
  {
    name: "Beauty",
    href: "/categories/beauty",
    img: "https://picsum.photos/id/1035/400/400",
  },
  {
    name: "Kids",
    href: "/categories/kids",
    img: "https://picsum.photos/id/1045/400/400",
  },
  {
    name: "Sports",
    href: "/categories/sports",
    img: "https://picsum.photos/id/1055/400/400",
  },
];


export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-7 gap-4 text-center">
      {categories.map((cat, i) => (
     <div key={i} className="space-y-2">
  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto overflow-hidden rounded-full border border-gray-200 relative">
    <Image
      src={cat.img}
      alt={cat.name}
      fill
      className="object-cover"
      sizes="(max-width: 640px) 64px, 80px"
    />
  </div>
  <p className="text-xs sm:text-sm font-medium text-gray-700 text-center">
    {cat.name}
  </p>
</div>
      ))}
    </div>
  );
}
