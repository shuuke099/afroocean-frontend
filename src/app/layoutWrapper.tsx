"use client";

import { usePathname } from "next/navigation";
import TopNavbar from "@/components/layout/TopNavbar";
import FooterLinks from "@/components/home/FooterLinks";
import BottomNav from "@/components/layout/BottomNav";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Hide layout elements on real estate pages
  const hideLayout = pathname.startsWith("/real-estate");

  return (
    <>
      {!hideLayout && <TopNavbar />}
      <main>{children}</main>
      <FooterLinks />
      <BottomNav />
    </>
  );
}
