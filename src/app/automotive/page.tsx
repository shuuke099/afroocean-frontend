"use client";

import { Car, Wrench, Fuel, ShieldCheck, Users } from "lucide-react";
import { automotiveItems } from "@/app/data/automotiveItems";
import CommonHero from "@/components/common/CommonHero";
import CategoriesSection from "@/components/common/CategoriesSection";
import FeaturedListings from "@/components/common/FeaturedListings";
import WhyChooseUsAutomotive from "@/components/automotive/WhyChooseUsAutomotive";

export default function AutomotivePage() {
  const automotiveCategories = [
    {
      icon: <Car className="w-10 h-10 text-primary" />,
      title: "Vehicles",
      description:
        "Browse sedans, SUVs, trucks, and motorcycles from trusted sellers.",
      href: "/automotive/vehicles",
      buttonText: "Find Vehicles",
    },
    {
      icon: <Wrench className="w-10 h-10 text-primary" />,
      title: "Spare Parts & Accessories",
      description:
        "Shop certified spare parts and accessories with compatibility details.",
      href: "/automotive/parts",
      buttonText: "Shop Parts",
    },
    {
      icon: <Fuel className="w-10 h-10 text-primary" />,
      title: "Services",
      description:
        "Connect with workshops, mechanics, and auto care providers.",
      href: "/automotive/services",
      buttonText: "Find Services",
    },
  ];

  return (
    <main className="space-y-20">
      {/* Hero */}
      <CommonHero
        title="Find Your Next Vehicle, Part, or Service"
        subtitle="Buy, sell, and service with AfroOcean Automotive"
        bgImage="/automotive.jpg" // ✅ fixed spelling
        searchPath="/automotive/search"
      />

      {/* Featured Listings */}
      <FeaturedListings
        title="Featured Automotive Listings"
        items={automotiveItems}
        basePath="/automotive"
      />
      <WhyChooseUsAutomotive />
      <CategoriesSection
        title="Explore Automotive Marketplace"
        categories={automotiveCategories}
      />
    </main>
  );
}
