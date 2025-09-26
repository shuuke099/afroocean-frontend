"use client";

import BarChart from "../charts/BarChart";

type InquiriesSectionProps = {
  role: "manager" | "regional-admin" | "seller";
  region?: string;
};

export default function InquiriesSection({
  role,
  region,
}: InquiriesSectionProps) {
  // Example mock data — replace with backend API later
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label:
          role === "seller"
            ? "My Inquiries"
            : role === "regional-admin"
            ? `Inquiries (${region})`
            : "Total Inquiries",
        data:
          role === "seller"
            ? [5, 12, 9, 15, 7, 20] // Seller-specific
            : role === "regional-admin"
            ? [30, 55, 40, 70, 60, 85] // Region-specific
            : [120, 200, 180, 250, 220, 300], // Manager/global
        backgroundColor: "#3b82f6",
      },
    ],
  };

  return (
    <section className="rounded-xl bg-white dark:bg-gray-900 p-6 shadow-md border border-gray-200 dark:border-gray-800">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        {role === "seller"
          ? "My Inquiries Overview"
          : role === "regional-admin"
          ? `Inquiries Overview (${region})`
          : "Inquiries Overview"}
      </h2>
      <div className="h-64">
        <BarChart data={data} />
      </div>
    </section>
  );
}
