"use client";

import KpiSection from "@/components/dashboard/sections/KpiSection";
import OrdersSection from "@/components/dashboard/sections/OrdersSection";
import AnalyticsSection from "@/components/dashboard/sections/AnalyticsSection";

export default function SellerDashboard() {
  return (
    <div className="space-y-8">
      {/* KPI Cards */}
      <KpiSection role="seller" />

      {/* Recent Orders */}
      <OrdersSection />

      {/* Analytics */}
      <AnalyticsSection />
    </div>
  );
}
