import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout basePath="/seller">{children}</DashboardLayout>;
}
