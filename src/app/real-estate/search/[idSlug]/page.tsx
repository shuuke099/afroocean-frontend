import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { properties } from "@/data/properties";
import PropertyDetail from "./PropertyDetail";

export async function generateMetadata({
  params,
}: {
  params: { idSlug: string };
}): Promise<Metadata> {
  const [idStr] = params.idSlug.split("-");
  const id = Number(idStr);

  const property = properties.find((p) => p.id === id);
  if (!property) {
    return {
      title: "Property not found | AfroOcean",
      description: "Browse real estate listings on AfroOcean.",
    };
  }

  return {
    title: `${property.title} | AfroOcean Real Estate`,
    description: `${property.price} · ${property.beds} beds · ${
      property.baths
    } baths · ${property.sqft.toLocaleString()} sqft - ${property.address}`,
    openGraph: {
      images: property.images.map((src) => ({
        url: src,
        width: 900,
        height: 600,
        alt: property.title,
      })),
    },
  };
}

export default function PropertyDetailPage({
  params,
}: {
  params: { idSlug: string };
}) {
  const [idStr] = params.idSlug.split("-");
  const id = Number(idStr);

  const property = properties.find((p) => p.id === id);
  if (!property) return notFound();

  return <PropertyDetail property={property} />;
}
