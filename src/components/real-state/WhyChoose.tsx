import { ShieldCheck, Users, Heart } from "lucide-react";
import InfoCard from "./InfoCard";

const features = [
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

export default function FeaturesSection() {
  return (
    <section className="px-6 py-16 bg-white">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-secondary mb-12">
        Key Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <InfoCard
            key={i}
            icon={feature.icon}
            title={feature.title}
            description={feature.desc}
          />
        ))}
      </div>
    </section>
  );
}
