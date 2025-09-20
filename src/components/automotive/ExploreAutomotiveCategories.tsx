import { Car, Wrench, Fuel } from "lucide-react";
import CategoriesSection from "@/components/commons/CategoriesSection";

const automotiveCategories = [
  {
    icon: <Car className="w-10 h-10 text-primary" />,
    title: "Vehicles",
    description: "Browse sedans, SUVs, and trucks from trusted sellers.",
    href: "/automotive/vehicles",
    buttonText: "Find Vehicles",
  },
  {
    icon: <Wrench className="w-10 h-10 text-primary" />,
    title: "Spare Parts",
    description: "Get certified spare parts and accessories for your car.",
    href: "/automotive/parts",
    buttonText: "Shop Parts",
  },
  {
    icon: <Fuel className="w-10 h-10 text-primary" />,
    title: "Services",
    description: "Connect with mechanics, workshops, and car service providers.",
    href: "/automotive/services",
    buttonText: "Find Services",
  },
];

export default function ExploreAutomotiveCategories() {
  return (
    <CategoriesSection
      title="Explore Automotive Marketplace"
      categories={automotiveCategories}
    />
  );
}
