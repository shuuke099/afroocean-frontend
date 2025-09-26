"use client";

import Container from "@/components/ui/container";
import DashboardSidebar from "./DashboardSidebar";
import DashboardTopbar from "./DashboardTopbar";

export default function DashboardLayout({
  children,
  basePath,
}: {
  children: React.ReactNode;
  basePath: string;
}) {
  return (
    <Container>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-950">
        {/* Sidebar */}
        <DashboardSidebar basePath={basePath} />

        {/* Main area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Topbar */}
          <DashboardTopbar />

          {/* Content */}
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    </Container>
  );
}
