"use client";

import { useState } from "react";
import UsersTable from "../tables/UsersTable";

type SellersSectionProps = {
  role: "manager" | "regional-admin" | "seller";
  region?: string;
};

export default function SellersSection({ role, region }: SellersSectionProps) {
  const [tab, setTab] = useState<"pending" | "active" | "top">("pending");

  // ✅ map tab → filter
  const tabFilters: Record<typeof tab, string> = {
    pending: "Pending Sellers",
    active: "Recently Active",
    top: "Top Sellers",
  };

  return (
    <UsersTable
      title={
        role === "regional-admin" && region ? `Sellers (${region})` : "Sellers"
      }
      filters={["Pending Sellers", "Recently Active", "Top Sellers"]}
      defaultFilter={tabFilters[tab]}
      fullWidth
    />
  );
}
