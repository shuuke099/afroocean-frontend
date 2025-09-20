"use client";

import { usePathname } from "next/navigation";
import TopNavbar from "./TopNavbar";
import FooterLinks from "../home/FooterLinks";
import BottomNav from "./BottomNav";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Define landing pages that should hide TopNavbar
  const hideNavbarOn = ["/real-estate", "/automotive"];

  // Check if current page is exactly landing (not search pages inside)
  const hideNavbar = hideNavbarOn.includes(pathname);

  return (
    <>
      {!hideNavbar && <TopNavbar />}
      <main>{children}</main>
      {!hideNavbar && <FooterLinks />}
      <BottomNav />
    </>
  );
}
