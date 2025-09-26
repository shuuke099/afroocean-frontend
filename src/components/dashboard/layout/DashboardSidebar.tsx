"use client";

import { cn } from "@/lib/utils/utils";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Package,
  BarChart3,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type DashboardSidebarProps = {
  basePath: string; // e.g. "/admin", "/seller", "/kenya/admin"
};

const navItems = [
  { label: "Dashboard", path: "", icon: LayoutDashboard },
  { label: "Orders", path: "orders", icon: ShoppingCart },
  { label: "Products Management", path: "products", icon: Package },
  { label: "Users Management", path: "users", icon: Users },
  { label: "Revenue", path: "revenue", icon: BarChart3 },
  { label: "Settings", path: "settings", icon: Settings },
];

export default function DashboardSidebar({ basePath }: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 hidden md:flex flex-col">
      <div className="text-2xl font-bold text-accent mb-8">AfroOcean</div>
      <nav className="space-y-2">
        {navItems.map(({ label, path, icon: Icon }) => {
          const href = `${basePath}/${path}`.replace(/\/$/, "").toLowerCase(); // avoid double slashes
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === href
                  ? "bg-accent text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              )}
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
