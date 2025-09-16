"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  SearchIcon,
  ShoppingCart,
  User,
  Globe,
  Store,
  ChevronDown,
  PlaneTakeoff,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Container from "../ui/container";

export default function TopNavbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  // 🔹 Auto search with debounce (only after user stops typing for 600ms)
  useEffect(() => {
    if (!searchTerm.trim()) return;

    const timer = setTimeout(() => {
      localStorage.setItem("recentSearch", searchTerm.trim());
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }, 600);

    return () => clearTimeout(timer);
  }, [searchTerm, router]);

  // 🔹 Manual search (search button)
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    localStorage.setItem("recentSearch", searchTerm.trim());
    router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
  };

  return (
    <header className="w-full bg-gradient-to-b from-primary-light via-white to-white">
      <Container>
        {/* Quick Actions */}
        <div className="flex flex-wrap items-center justify-between py-2 text-sm gap-2 ">
          <div className="flex flex-wrap items-center gap-3">
            <Button className="border border-accent text-accent bg-background hover:bg-accent-light hover:text-white active:bg-accent-light active:text-white px-3 py-1 rounded text-xs sm:text-sm">
              Become Seller
            </Button>
            <Button
              variant="outline"
              className="border border-neutral text-neutral hover:bg-neutral hover:text-white px-3 py-1 rounded flex items-center gap-1 text-xs sm:text-sm"
            >
              <PlaneTakeoff className="h-4 w-4" />
              Book Flight
            </Button>
            <Button
              variant="outline"
              className="border border-neutral text-neutral hover:bg-neutral hover:text-white px-3 py-1 rounded text-xs sm:text-sm"
            >
              Real Estate
            </Button>
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
                placeholder="Search products..."
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
