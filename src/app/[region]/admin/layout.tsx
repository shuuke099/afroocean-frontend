import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";

export default async function RegionalAdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;

  return (
    <DashboardLayout basePath={`/${region}/admin`}>{children}</DashboardLayout>
  );
}
