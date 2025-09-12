"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs() {
  return (
    <nav className="text-xs text-gray-600 mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="hover:underline text-[#ffa200] font-medium">
            Home
          </Link>
        </li>
        <li>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </li>
        <li>
          <Link
            href="/category/rings"
            className="hover:underline text-[#ffa200] font-medium"
          >
            Rings
          </Link>
        </li>
        <li>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </li>
        <li className="text-gray-500 truncate">Men’s Punk Ring</li>
      </ol>
    </nav>
  );
}
