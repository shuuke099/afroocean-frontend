import { Home, Key, LandPlot } from "lucide-react";
import CategoriesSection from "../common/CategoriesSection";


const realEstateCategories = [
  {
    icon: <Home className="w-10 h-10 text-primary" />,
    title: "Buy a Home",
    description: "Work with trusted agents to find the right home and avoid hidden costs.",
    href: "/buy",
    buttonText: "Find Homes",
  },
  {
    icon: <Key className="w-10 h-10 text-primary" />,
    title: "Rent a Property",
    description: "Browse apartments, condos, and family rentals that fit your lifestyle.",
    href: "/rent",
    buttonText: "Browse Rentals",
  },
  {
    icon: <LandPlot className="w-10 h-10 text-primary" />,
    title: "Invest in Land",
    description: "Discover plots for building, farming, or long-term investment opportunities.",
    href: "/land",
    buttonText: "Explore Land",
  },
];

export default function ExploreRealEstateCategories() {
  return (
    <CategoriesSection
      title="Explore Opportunities"
      categories={realEstateCategories}
    />
  );
}
