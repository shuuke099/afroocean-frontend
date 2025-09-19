"use client";

import { usePathname } from "next/navigation";
import TopNavbar from "./TopNavbar";
import FooterLinks from "../home/FooterLinks";
import BottomNav from "./BottomNav";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Define landing pages that should hide TopNavbar
  const hideNavbarOn = ["/real-estate", "/automotives"];

  // Check if current page is exactly landing (not search pages inside)
  const hideNavbar = hideNavbarOn.includes(pathname);

  return (
    <>
      {<TopNavbar />}
      <main>{children}</main>
      {!hideNavbar && <FooterLinks />}
      <BottomNav />
    </>
  );
}
