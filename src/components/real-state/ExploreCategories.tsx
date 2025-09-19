"use client";

import { Home, Key, LandPlot } from "lucide-react";
import InfoCard from "./InfoCard";

const categories = [
  {
    icon: <Home className="w-10 h-10 text-primary" />,
    title: "Buy a Home",
    description:
      "Work with trusted agents to find the right home and avoid hidden costs.",
    href: "/buy",
    buttonText: "Find Homes",
  },
  {
    icon: <Key className="w-10 h-10 text-primary" />,
    title: "Rent a Property",
    description:
      "Browse apartments, condos, and family rentals that fit your lifestyle.",
    href: "/rent",
    buttonText: "Browse Rentals",
  },
  {
    icon: <LandPlot className="w-10 h-10 text-primary" />,
    title: "Invest in Land",
    description:
      "Discover plots for building, farming, or long-term investment opportunities.",
    href: "/land",
    buttonText: "Explore Land",
  },
];

export default function ExploreCategories() {
  return (
    <section className="px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-secondary mb-10">
        Explore Opportunities
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <InfoCard
            key={i}
            icon={cat.icon}
            title={cat.title}
            description={cat.description}
            href={cat.href}
            buttonText={cat.buttonText}
          />
        ))}
      </div>
    </section>
  );
}
