"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({
  role, // "seller" | "admin"
  children,
}: {
  role: "seller" | "admin";
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar role={role} open={open} onToggle={() => setOpen((v) => !v)} />

        {/* Main */}
        <div className="flex-1 min-w-0">
          <Topbar onToggleSidebar={() => setOpen((v) => !v)} />
          <main className="p-4 sm:p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
