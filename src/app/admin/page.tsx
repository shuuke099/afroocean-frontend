"use client";

import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import KpiSection from "@/components/dashboard/sections/KpiSection";
import RevenueSection from "@/components/dashboard/sections/RevenueSection";
import UsersSection from "@/components/dashboard/sections/UsersSection";
import ProductsSection from "@/components/dashboard/sections/ProductsSection";
import CategoriesSection from "@/components/dashboard/sections/CategoriesSection";
import BestSellersSection from "@/components/dashboard/sections/BestSellersSection";
import TopCountriesSection from "@/components/dashboard/sections/TopCountriesSection";
import CommentsSection from "@/components/dashboard/sections/CommentsSection";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* KPIs at the top */}
      <KpiSection />

      {/* Revenue + Top Countries */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UsersSection />
        <ProductsSection />
      </div>

      {/* Users + Products + Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RevenueSection />
        <TopCountriesSection />

        <CategoriesSection />
      </div>

      {/* Best sellers + Comments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BestSellersSection />
        <CommentsSection />
      </div>
    </div>
  );
}
