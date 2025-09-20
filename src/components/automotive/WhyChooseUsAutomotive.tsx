import { Car, Wrench, ShieldCheck } from "lucide-react";
import ChooseUs from "@/components/common/ChooseUs";

const automotiveReasons = [
  {
    title: "Wide Vehicle Selection",
    desc: "From cars to trucks, explore both new and used vehicles with full transparency.",
    icon: <Car className="w-8 h-8 text-primary" />,
  },
  {
    title: "Certified Mechanics",
    desc: "Get peace of mind with vehicles inspected by trusted mechanics and dealerships.",
    icon: <Wrench className="w-8 h-8 text-primary" />,
  },
  {
    title: "Safe Transactions",
    desc: "Your safety comes first — all transactions are verified and secure.",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
  },
];

export default function WhyChooseUsAutomotive() {
  return (
    <ChooseUs
      title="Why Choose AfroOcean Automotive"
      reasons={automotiveReasons} // ✅ make sure this is passed
      bgImage="/automotive.jpg"
    />
  );
}
