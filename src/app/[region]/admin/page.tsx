"use client";

import { use } from "react";
import AdminDashboard from "@/components/dashboard/AdminDashboard";

export default function RegionalAdminPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = use(params);

  return <AdminDashboard role="regional-admin" region={region} />;
}
