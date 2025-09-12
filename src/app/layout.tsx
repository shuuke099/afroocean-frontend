"use client";

import { ThemeProvider } from "@/components/ui/themeProvider"; // check spelling: "themeProvider.tsx"
import "./globals.css";
import TopNavbar from "@/components/layout/TopNavbar";
import FooterLinks from "@/components/home/FooterLinks";
import BottomNav from "@/components/layout/BottomNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TopNavbar />
          <main>{children}</main>
          <FooterLinks />
          <BottomNav/>
        </ThemeProvider>
      </body>
    </html>
  );
}
