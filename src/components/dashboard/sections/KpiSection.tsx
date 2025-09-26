"use client";

import {
  MessageCircle,
  DollarSign,
  Store,
  ShoppingBag,
  TrendingUp,
  UserCircle,
} from "lucide-react";
import KpiCard from "../cards/KpiCard";

type KpiSectionProps = {
  role: "admin" | "regional-admin" | "manager" | "seller";
  region?: string; // optional, needed for regional-admin
};

export default function KpiSection({ role, region }: KpiSectionProps) {
  const adminKpis = [
    {
      title: "Total Inquiries",
      value: role === "regional-admin" ? "2,340" : "12,450", // example difference
      change: "+3.2%",
      positive: true,
      icon: <MessageCircle className="w-5 h-5 text-primary" />,
      data: [50, 80, 65, 100, 90, 120, 150],
    },
    {
      title: "Top Categories",
      value:
        role === "regional-admin"
          ? `Top in ${region}`
          : "Electronics, Clothing, Automotive",
      change: "+12%",
      positive: true,
      icon: <TrendingUp className="w-5 h-5 text-primary" />,
      data: [120, 150, 200, 180, 220, 250, 300],
    },
    {
      title: "Active Sellers",
      value: role === "regional-admin" ? "45" : "340",
      change: "+2.1%",
      positive: true,
      icon: <Store className="w-5 h-5 text-primary" />,
      data: [2, 3, 4, 3, 5, 6, 7],
    },
    {
      title: "Site Visitors",
      value: role === "regional-admin" ? "5,210" : "45,210",
      change: "+0.56%",
      positive: true,
      icon: <TrendingUp className="w-5 h-5 text-primary" />,
      data: [200, 180, 220, 190, 250, 280, 300],
    },
  ];

  const sellerKpis = [
    {
      title: "My Inquiries",
      value: "145",
      change: "+4.8%",
      positive: true,
      icon: <MessageCircle className="w-5 h-5 text-primary" />,
      data: [5, 8, 6, 10, 9, 12, 15],
    },
    {
      title: "My Potential Value",
      value: "$6,320",
      change: "+1.5%",
      positive: true,
      icon: <DollarSign className="w-5 h-5 text-primary" />,
      data: [10, 14, 12, 9, 15, 13, 11],
    },
    {
      title: "Active Products",
      value: "58",
      change: "+4.5%",
      positive: true,
      icon: <ShoppingBag className="w-5 h-5 text-primary" />,
      data: [2, 5, 3, 6, 7, 9, 8],
    },
    {
      title: "Profile Visits",
      value: "1,210",
      change: "+0.9%",
      positive: true,
      icon: <UserCircle className="w-5 h-5 text-primary" />,
      data: [20, 18, 22, 19, 25, 28, 30],
    },
  ];

  // Pick KPIs based on role
  let kpis;
  if (role === "seller") {
    kpis = sellerKpis;
  } else {
    kpis = adminKpis;
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {kpis.map((kpi, i) => (
        <KpiCard key={i} {...kpi} />
      ))}
    </section>
  );
}
