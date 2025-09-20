import { ShieldCheck, Users, Heart } from "lucide-react";
import ChooseUs from "../common/ChooseUs";

const realEstateReasons = [
  {
    title: "Verified Listings",
    desc: "Browse with confidence — every property is carefully verified for accuracy and authenticity.",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
  },
  {
    title: "Trusted Local Experts",
    desc: "Connect with experienced agents who know your community and guide you through every step.",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: "Personalized Saved Searches",
    desc: "Save your favorite homes, set alerts, and revisit listings anytime for a seamless experience.",
    icon: <Heart className="w-8 h-8 text-primary" />,
  },
];

export default function WhyChooseUsRealEstate() {
  return (
    <ChooseUs
      title="Why Choose AfroOcean Real Estate"
      reasons={realEstateReasons} // ✅ prop matches exactly
      bgImage="/real-state.jpg"
    />
  );
}
