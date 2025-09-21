// Seller layout (src/app/seller/layout.tsx)
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import {
  Home,
  FileText,
  ShoppingCart,
  Tag,
  BarChart,
  Settings,
} from "lucide-react";

const sellerNav = [
  { label: "Dashboard", href: "/seller", icon: <Home /> },
  { label: "Listings", href: "/seller/listings", icon: <FileText /> },
  { label: "Orders", href: "/seller/orders", icon: <ShoppingCart /> },
  { label: "Discounts", href: "/seller/discounts", icon: <Tag /> },
  { label: "Analytics", href: "/seller/analytics", icon: <BarChart /> },
  { label: "Settings", href: "/seller/settings", icon: <Settings /> },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout navItems={sellerNav}>{children}</DashboardLayout>;
}
