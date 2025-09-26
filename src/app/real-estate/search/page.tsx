"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import PropertyTypeDropdown from "@/components/common/PropertyTypeDropdown";
import FiltersModal from "@/components/real-state/FiltersModal";
import SortDropdown from "@/components/common/SortDropdown";
import { slugify } from "@/lib/slugify";
import { properties } from "@/data/properties";

export default function RealEstatePage() {
  const [list] = useState(properties);

  return (
    <Container>
      {/* Top search + filters */}
      <div className="flex items-center gap-2 px-2 py-2 bg-white sticky top-0 z-10">
        <PropertyTypeDropdown />
        <FiltersModal />
        <Button className="bg-blue-500 text-white text-[11px] sm:text-xs px-2 py-1 rounded">
          Save Search
        </Button>
      </div>

      {/* Header info */}
      <div className="px-4 pt-2 pb-1 items-center text-sm flex justify-between text-gray-600">
        <p>{list.length} results</p>
        <div className="flex items-center gap-1">
          <strong>Sort:</strong>
          <SortDropdown />
        </div>
      </div>

      {/* Property cards */}
      <div className="pb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {list.map((property) => {
          const slug = slugify(property.title);
          const url = `/real-estate/${property.id}-${slug}`;

          return (
            <Link
              key={property.id}
              href={url}
              className="block rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-3">
                <p className="font-bold">{property.title}</p>
                <p className="text-orange-600 font-semibold">
                  {property.price}
                </p>
                <p className="text-sm text-gray-600">
                  {property.beds} bds | {property.baths} ba | {property.sqft}{" "}
                  sqft
                </p>
                <p className="text-sm text-gray-500">{property.address}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
