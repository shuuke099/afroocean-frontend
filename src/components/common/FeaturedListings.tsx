"use client";

import { useState } from "react";
import Link from "next/link";
import { slugify } from "@/lib/slugify";

// Union type for categories
type Category =
  | "home"
  | "Car"
  | "Truck"
  | "Motorcycle"
  | "SparePart"
  | "Accessory"
  | "Service";

export interface ListingItem {
  id: number | string;
  title: string;
  images: string[];
  price: string | number;
  category: Category;

  // Common
  location?: string;
  condition?: string;

  // Home fields
  address?: string;
  beds?: number;
  baths?: number;
  sqft?: number;

  // Vehicle fields
  make?: string;
  model?: string;
  year?: number;
  mileage?: number;
  transmission?: string;
  fuel?: string;

  // Parts / Accessories fields
  brand?: string;
  partType?: string;
  compatibility?: string[];
  warranty?: string;

  // Service fields
  serviceType?: string;
  provider?: string;
}

interface FeaturedListingsProps {
  title: string;
  items: ListingItem[];
  basePath: string; // e.g. "/real-estate" or "/automotive"
}

export default function FeaturedListings({
  title,
  items,
  basePath,
}: FeaturedListingsProps) {
  const [list] = useState(items);

  return (
    <section className="px-6 mt-10">
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-5 capitalize">
          {title}
        </h2>
      </div>

      <div className="pb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {list.map((item) => {
          const slug = slugify(item.title);
          const url = `${basePath}/${item.id}-${slug}`;

          return (
            <Link
              key={item.id}
              href={url}
              className="block rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-primary transition"
            >
              {/* Image */}
              <img
                src={item.images?.[0] ?? "https://picsum.photos/seed/placeholder/600/400"}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              {/* Info */}
              <div className="p-3 space-y-1">
                <p className="font-bold text-secondary">{item.title}</p>
                <p className="text-accent font-semibold">{item.price}</p>

                {/* 🏡 Home */}
                {item.category === "home" && (
                  <p className="text-sm text-gray-600">
                    {item.beds ? `${item.beds} bds | ` : ""}
                    {item.baths ? `${item.baths} ba | ` : ""}
                    {item.sqft ? `${item.sqft.toLocaleString()} sqft` : ""}
                  </p>
                )}

                {/* 🚗 Vehicles */}
                {["Car", "Truck", "Motorcycle"].includes(item.category) && (
                  <p className="text-sm text-gray-600">
                    {item.year ? `${item.year} ` : ""}
                    {item.make ? `${item.make} ` : ""}
                    {item.model ? `${item.model} ` : ""}
                    {item.mileage ? `| ${item.mileage.toLocaleString()} mi ` : ""}
                    {item.condition ? `| ${item.condition}` : ""}
                  </p>
                )}

                {/* 🔧 Parts / Accessories */}
                {["SparePart", "Accessory"].includes(item.category) && (
                  <p className="text-sm text-gray-600">
                    {item.partType ? `${item.partType} ` : ""}
                    {item.brand ? `| ${item.brand} ` : ""}
                    {item.condition ? `| ${item.condition} ` : ""}
                    {item.compatibility?.length ? (
                      <>
                        | Fits: {item.compatibility[0]}
                        {item.compatibility.length > 1
                          ? ` (+${item.compatibility.length - 1} more)`
                          : ""}
                      </>
                    ) : null}
                  </p>
                )}

                {/* 🛠 Services */}
                {item.category === "Service" && (
                  <p className="text-sm text-gray-600">
                    {item.serviceType} — {item.provider}
                  </p>
                )}

                {/* Common fields */}
                {item.address && (
                  <p className="text-sm text-gray-500">{item.address}</p>
                )}
                {item.location && (
                  <p className="text-sm text-gray-500">{item.location}</p>
                )}
                {["SparePart", "Accessory"].includes(item.category) &&
                  item.warranty && (
                    <p className="text-xs text-gray-500">
                      Warranty: {item.warranty}
                    </p>
                  )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
