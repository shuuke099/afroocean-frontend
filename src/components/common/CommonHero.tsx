"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import DesktopNavbar from "./DesktopNavbar";
import SidebarMenu from "./SidebarMenu";

interface CommonHeroProps {
  title: string;
  subtitle: string;
  bgImage: string;
  searchPath: string; // e.g. "/realestate/search"
}

export default function CommonHero({
  title,
  subtitle,
  bgImage,
  searchPath,
}: CommonHeroProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`${searchPath}?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="relative w-full">
      {/* Topbar */}
      <header className="absolute top-0 left-0 w-full z-[9999] flex items-center justify-between px-6 py-4">
        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white md:hidden"
        >
          <Menu className="h-7 w-7" />
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/afroocean-logo-1.png"
            alt="AfroOcean"
            className="h-9 w-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <DesktopNavbar />

        {/* Sign In */}
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
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-6">{subtitle}</p>

          {/* Search Bar */}
          <div className="flex w-full max-w-xl bg-white rounded-lg overflow-hidden shadow-md">
            <input
              type="text"
              placeholder="Search here..."
              className="flex-1 px-4 py-3 text-gray-700 focus:outline-none text-sm sm:text-base"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <Button
              variant="ghost"
              className="h-auto px-4 flex items-center justify-center text-accent"
              onClick={handleSearch}
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Sidebar (mobile) */}
      <SidebarMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
