"use client";

import { CategoriesData } from "@/app/data/categories";
import Image from "next/image";
import Link from "next/link";

type Props = {
  gridClasses?: string;
  limit?: number;
  showMore?: boolean;        // ✅ new flag
  showMoreLink?: string;     // ✅ optional link
};

export default function CategoryGrid({ gridClasses, limit, showMore, showMoreLink }: Props) {
  // if showMore is true → reserve 1 slot for "View More"
  const data =
    limit && showMore ? CategoriesData.slice(0, limit - 1) : limit ? CategoriesData.slice(0, limit) : CategoriesData;

  return (
    <div className={gridClasses}>
      {/* Render categories */}
      {data.map((cat, i) => (
        <Link
          key={i}
          href={`/categories/${cat.name.toLowerCase().replace(/ & | /g, "-")}`}
          className="flex flex-col items-center justify-center rounded-lg transition hover:scale-105 hover:shadow-md cursor-pointer"
        >
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#f9f9f9] flex items-center justify-center rounded-full mb-2 p-1 shadow-sm overflow-hidden">
            <Image
              src={cat.img}
              alt={cat.name}
              width={60}
              height={60}
              className="object-cover rounded-full"
            />
          </div>
          <span className="text-xs sm:text-sm font-medium text-center">
            {cat.name}
          </span>
        </Link>
      ))}

      {/* "View More" card only if enabled */}
      {showMore && showMoreLink && (
  <div className="flex items-center justify-center col-span-2 sm:col-span-1">
  <Link
    href={showMoreLink}
    className="px-4 py-2 text-primary-light text-sm font-medium hover:bg-primary-light hover:text-white transition cursor-pointer"
  >
    View More →
  </Link>
</div>

)}

    </div>
  );
}
