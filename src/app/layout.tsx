import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers"; // client wrapper for Redux + ThemeProvider
import TopNavbar from "@/components/layout/TopNavbar";
import FooterLinks from "@/components/home/FooterLinks";
import BottomNav from "@/components/layout/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AfroOcean",
  description: "Marketplace App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-sans`}>
        <Providers>
          <TopNavbar />
          <main>{children}</main>
          <FooterLinks />
          <BottomNav />
        </Providers>
      </body>
    </html>
  );
}
