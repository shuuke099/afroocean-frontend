"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  ListOrdered,
  Percent,
  Users,
  Settings,
  Shield,
  Home,
  Car,
  Store,
  BarChart3,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils/utils";
// if you have one; else replace with template strings

type Item = { label: string; href: string; icon: React.ReactNode };

function sellerItems(): Item[] {
  return [
    {
      label: "Overview",
      href: "/seller",
      icon: <LayoutGrid className="w-4 h-4" />,
    },
    {
      label: "My Listings",
      href: "/seller/listings",
      icon: <ListOrdered className="w-4 h-4" />,
    },
    {
      label: "Promotions",
      href: "/seller/promotions",
      icon: <Percent className="w-4 h-4" />,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <Settings className="w-4 h-4" />,
    },
  ];
}

function adminItems(): Item[] {
  return [
    {
      label: "Overview",
      href: "/admin",
      icon: <LayoutGrid className="w-4 h-4" />,
    },
    {
      label: "Manage Listings",
      href: "/admin/listings",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      label: "Sellers",
      href: "/admin/sellers",
      icon: <Users className="w-4 h-4" />,
    },
    {
      label: "Reports",
      href: "/admin/reports",
      icon: <BarChart3 className="w-4 h-4" />,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <Settings className="w-4 h-4" />,
    },
  ];
}

export default function Sidebar({
  role,
  open,
  onToggle,
}: {
  role: "seller" | "admin";
  open: boolean;
  onToggle: () => void;
}) {
  const pathname = usePathname();
  const items = role === "seller" ? sellerItems() : adminItems();

  return (
    <aside
      className={cn(
        "hidden md:flex md:flex-col w-64 shrink-0 border-r bg-white",
        open ? "md:w-64" : "md:w-16"
      )}
    >
      <div className="flex items-center gap-2 px-4 py-4 border-b">
        <img
          src="/afroocean-logo-1.png"
          alt="AfroOcean"
          className="h-7 w-auto"
        />
        {open && (
          <span className="text-secondary font-semibold text-sm">
            Dashboard
          </span>
        )}
      </div>

      <nav className="flex-1 p-2 space-y-1">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors",
                active
                  ? "bg-primary/10 text-primary"
                  : "text-neutral hover:bg-gray-100"
              )}
              aria-current={active ? "page" : undefined}
              title={item.label}
            >
              {item.icon}
              {open && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-3 border-t text-[12px] text-gray-500">
        <div className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5" />
          <span>AfroOcean © {new Date().getFullYear()}</span>
        </div>
      </div>
    </aside>
  );
}
