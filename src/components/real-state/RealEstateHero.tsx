"use client";

import { useState } from "react";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import SidebarMenu from "../common/SidebarMenu";
import DesktopNavbar from "./DesktopNavbar";
import Link from "next/link";

export default function RealEstateHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Topbar (outside hero) */}


<header className="absolute top-0 left-0 w-full z-[9999] flex items-center justify-between px-6 py-4">
  {/* Hamburger (mobile) */}
  <button
    onClick={() => setMenuOpen(true)}
    className="text-white md:hidden"
  >
    <Menu className="h-7 w-7" />
  </button>

  {/* Logo with link to homepage */}
  <Link href="/" className="flex items-center">
    <img
      src="/afroocean-logo-1.png"
      alt="AfroOcean"
      className="h-9 w-auto cursor-pointer"
    />
  </Link>

  {/* Desktop Menu */}
  <DesktopNavbar />

  {/* Sign In link */}
  <Link
    href="/signIn"
    className="text-white text-sm font-medium hover:text-accent-light transition-colors"
  >
    Sign In
  </Link>
</header>


      {/* Hero Section */}
      <section
        className="relative h-[60vh] w-full flex flex-col bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/real-state.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3">
            Find Your Dream Home
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-6">
            Buy, rent, or invest with{" "}
            <span className="text-accent">AfroOcean</span> Real Estate
          </p>

          {/* Search Bar */}
          <div className="flex w-full max-w-xl bg-white rounded-lg overflow-hidden shadow-md">
            <input
              type="text"
              placeholder="Enter an address, neighborhood, or city"
              className="flex-1 px-4 py-3 text-gray-700 focus:outline-none text-sm sm:text-base"
            />
            <Button
              variant="ghost"
              className="h-auto px-4 flex items-center justify-center text-accent"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Sidebar (mobile only) */}
      <SidebarMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
