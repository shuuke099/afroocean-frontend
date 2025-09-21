"use client";

import { TrendingUp, DollarSign, Users, ShoppingBag } from "lucide-react";
import KpiCard from "../cards/KpiCard";

export default function KpiSection() {
  const kpis = [
    {
      title: "Total Sales",
      value: "34,945",
      change: "+1.56%",
      positive: true,
      icon: <ShoppingBag className="w-5 h-5 text-primary" />,
      data: [5, 8, 6, 10, 9, 12, 15],
    },
    {
      title: "Revenue",
      value: "$37,802",
      change: "-0.80%",
      positive: false,
      icon: <DollarSign className="w-5 h-5 text-primary" />,
      data: [10, 14, 12, 9, 15, 13, 11],
    },
    {
      title: "Active Users",
      value: "12,340",
      change: "+2.1%",
      positive: true,
      icon: <Users className="w-5 h-5 text-primary" />,
      data: [2, 3, 4, 3, 5, 6, 7],
    },
    {
      title: "Visitors",
      value: "45,210",
      change: "+0.56%",
      positive: true,
      icon: <TrendingUp className="w-5 h-5 text-primary" />,
      data: [20, 18, 22, 19, 25, 28, 30],
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {kpis.map((kpi, i) => (
        <KpiCard key={i} {...kpi} />
      ))}
    </section>
  );
}
