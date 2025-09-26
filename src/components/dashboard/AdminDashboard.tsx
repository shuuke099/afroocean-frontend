"use client";

import KpiSection from "@/components/dashboard/sections/KpiSection";
import InquiriesSection from "@/components/dashboard/sections/InquiriesSection"; // renamed for clarity
import UsersSection from "@/components/dashboard/sections/UsersSection";
import ProductsSection from "@/components/dashboard/sections/ProductsSection";
import CategoriesSection from "@/components/dashboard/sections/CategoriesSection";
import TopCountriesSection from "@/components/dashboard/sections/TopCountriesSection";
import CommentsSection from "@/components/dashboard/sections/CommentsSection";

type AdminDashboardProps = {
  role: "manager" | "regional-admin" | "seller";
  region?: string; // optional because admin/manager don't need it
};

export default function AdminDashboard({ role, region }: AdminDashboardProps) {
  return (
    <div className="space-y-6">
      {/* KPIs at the top */}
      <KpiSection role={role} />

      {/* Users Section */}
      <div className="w-full">
        <UsersSection role={role} region={region} />
      </div>

      {/* Inquiries + Top Countries + Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <InquiriesSection role={role} region={region} />
        {/* <TopCountriesSection role={role} region={region} />
        <CategoriesSection role={role} region={region} /> */}
      </div>

      {/* Products + Comments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* <ProductsSection role={role} region={region} /> */}
        {/* <CommentsSection role={role} region={region} /> */}
      </div>
    </div>
  );
}
