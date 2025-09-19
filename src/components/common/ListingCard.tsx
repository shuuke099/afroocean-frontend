// src/components/common/ListingCard.tsx
"use client";

import Link from "next/link";

type Props = {
  item: any; // could refine with union RealEstateListing | AutomotiveListing
  urlPrefix: string; // e.g. "/real-estate" or "/automotives"
};

export default function ListingCard({ item, urlPrefix }: Props) {
  const url = `${urlPrefix}/${item.id}-${item.title
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

  return (
    <Link
      href={url}
      className="block border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-3">
        <p className="font-bold">{item.title}</p>
        <p className="text-orange-600 font-semibold">{item.price}</p>

        {/* Real Estate Specific */}
        {item.beds && (
          <p className="text-sm text-gray-600">
            {item.beds} bds | {item.baths} ba | {item.sqft?.toLocaleString()}{" "}
            sqft
          </p>
        )}

        {/* Automotive Specific */}
        {item.make && (
          <p className="text-sm text-gray-600">
            {item.year} {item.make} {item.model} ·{" "}
            {item.mileage?.toLocaleString()} mi
          </p>
        )}

        {/* Services / Parts */}
        {item.serviceType && (
          <p className="text-sm text-gray-600">
            Service: {item.serviceType} by {item.provider}
          </p>
        )}
        {item.partType && (
          <p className="text-sm text-gray-600">Part: {item.partType}</p>
        )}

        <p className="text-sm text-gray-500">{item.location}</p>
      </div>
    </Link>
  );
}
