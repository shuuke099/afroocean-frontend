"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation"; // ⬅️ added usePathname
import {
  SearchIcon,
  ShoppingCart,
  User,
  Globe,
  Store,
  ChevronDown,
  Car,
  Home,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Container from "../ui/container";

export default function TopNavbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const pathname = usePathname(); // ⬅️ detect current route

  // 🔹 Auto search with debounce (only after user stops typing for 600ms)
  useEffect(() => {
    if (!searchTerm.trim()) return;

    const timer = setTimeout(() => {
      localStorage.setItem("recentSearch", searchTerm.trim());

      // ⬅️ Route dynamically
      if (pathname.startsWith("/real-estate")) {
        router.push(
          `/real-estate/search?q=${encodeURIComponent(searchTerm.trim())}`
        );
      } else if (pathname.startsWith("/automotive")) {
        router.push(
          `/automotive/search?q=${encodeURIComponent(searchTerm.trim())}`
        );
      } else {
        router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [searchTerm, router, pathname]);

  // 🔹 Manual search (search button)
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    localStorage.setItem("recentSearch", searchTerm.trim());

    if (pathname.startsWith("/real-estate")) {
      router.push(
        `/real-estate/search?q=${encodeURIComponent(searchTerm.trim())}`
      );
    } else if (pathname.startsWith("/automotive")) {
      router.push(
        `/automotive/search?q=${encodeURIComponent(searchTerm.trim())}`
      );
    } else {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  // 🔹 Placeholder changes based on section
  let placeholder = "Search products...";
  if (pathname.startsWith("/real-estate")) {
    placeholder = "Search homes, addresses, MLS#";
  } else if (pathname.startsWith("/automotive")) {
    placeholder = "Search cars, make, model, year";
  }

  return (
    <header className="w-full bg-gradient-to-b from-primary-light via-white to-white">
      <Container>
        {/* Quick Actions */}
        <div className="flex justify-between items-center py-2 text-sm ">
          <div className="flex flex-nowrap items-center gap-2 w-full md:w-auto">
            {/* Become Seller */}
            <Button
              className="flex-1 min-w-0 border border-accent text-accent bg-background 
                      hover:bg-accent-light hover:text-white 
                      active:bg-accent active:text-white 
                      focus:bg-accent-light focus:text-white
                        px-2 py-1 rounded text-[11px] sm:text-sm transition-colors"
            >
              Become Seller
            </Button>

            {/* Automotive */}
            <Button
              variant="outline"
              className="flex-1 min-w-0 border border-neutral text-neutral 
                      hover:bg-neutral hover:text-white 
                      active:bg-neutral active:text-white 
                      focus:bg-neutral focus:text-white
                      px-2 py-1 rounded flex items-center gap-1 text-[11px] sm:text-sm transition-colors"
            >
              <Car className="h-4 w-4" />
              Automotive
            </Button>

            {/* Real Estate */}
            <Link href="/real-estate" className="flex-1 min-w-0">
              <Button
                variant="outline"
                className="w-full border border-neutral text-neutral 
                        hover:bg-neutral hover:text-white 
                        active:bg-neutral active:text-white 
                        focus:bg-neutral focus:text-white
                        px-2 py-1 rounded flex items-center gap-1 text-[11px] sm:text-sm transition-colors"
              >
                <Home className="h-4 w-4" />
                Real Estate
              </Button>
            </Link>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-neutral">
            <span className="cursor-pointer text-xs sm:text-sm">
              Download the app
            </span>
            <span className="flex items-center cursor-pointer text-xs sm:text-sm">
              <Globe className="w-4 h-4 mr-1" /> Language
              <ChevronDown className="w-4 h-4 ml-1" />
            </span>
            <span className="flex items-center cursor-pointer text-xs sm:text-sm">
              📍 Location
              <ChevronDown className="w-4 h-4 ml-1" />
            </span>
          </div>
        </div>

        {/* Main Nav */}
        <div className="flex items-center justify-between gap-3 py-1">
          {/* Logo */}
          <Link href="/" className="block w-[180px] h-auto cursor-pointer">
            <Image
              src="/afroocean-logo-1.png"
              alt="AfroOcean Logo"
              width={180}
              height={0}
              style={{ height: "auto" }}
              priority
            />
          </Link>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex-1 flex justify-center px-2"
          >
            <div className="flex items-center border border-accent-light rounded-full w-full max-w-xl min-w-[220px] overflow-hidden">
              <Input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={placeholder} // ⬅️ dynamic placeholder
                className="flex-1 bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 text-sm px-4"
              />
              <Button
                type="submit"
                className="bg-accent-light hover:bg-accent text-white px-5 rounded-[2%] flex items-center gap-1 min-w-[50px]"
              >
                <SearchIcon className="h-4 w-4" />
                <span className="hidden lg:inline">Search</span>
              </Button>
            </div>
          </form>

          {/* User / Cart */}
          <div className="hidden sm:flex items-center gap-4 text-neutral">
            <div className="flex items-center gap-1 cursor-pointer">
              <User className="h-5 w-5" /> <span>Login</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <ShoppingCart className="h-5 w-5" /> <span>Cart</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer text-primary-dark">
              <Store className="h-5 w-5" /> <span>Become a Seller</span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
