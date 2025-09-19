"use client";

import { useState } from "react";
import Link from "next/link"; // ✅ use Next.js Link for navigation
import { properties } from "@/app/data/properties";
import { slugify } from "@/lib/slugify";

export default function FeaturedListings() {
  const [list] = useState(properties);

  return (
    <section className="px-6">
      <h2 className="text-2xl font-bold mb-4 text-secondary">
        Featured Listings
      </h2>
      <div className="pb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {list.map((property) => {
          const slug = slugify(property.title);
          const url = `/real-estate/${property.id}-${slug}`;

          return (
            <Link
              key={property.id}
              href={url}
              className="block rounded-lg overflow-hidden border shadow-sm hover:shadow-md hover:border-primary transition"
            >
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-3 space-y-1">
                <p className="font-bold text-secondary">{property.title}</p>
                <p className="text-accent font-semibold">{property.price}</p>
                <p className="text-sm text-gray-600">
                  {property.beds} bds | {property.baths} ba |{" "}
                  {property.sqft.toLocaleString()} sqft
                </p>
                <p className="text-sm text-gray-500">{property.address}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
