"use client";
import Link from "next/link";
import Image from "next/image";
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
  return (
    <header className="w-full bg-gradient-to-b from-primary-light via-white to-white">
      <Container>
        {/* Announcement / Quick Actions */}
        <div className="flex flex-wrap items-center justify-between py-2 text-sm gap-2 ">
          {/* Left side */}
          <div className="flex flex-wrap items-center gap-3">
  {/* Accent outline (Alibaba style) */}
  <Button className="border border-accent text-accent bg-background hover:bg-accent-light hover:text-white active:bg-accent-light active:text-white px-3 py-1 rounded transition-colors text-xs sm:text-sm">
    Become Seller
  </Button>

  {/* Neutral outline with icon */}
  <Button
    variant="outline"
    className="border border-neutral text-neutral hover:bg-neutral hover:text-white active:bg-neutral active:text-white px-3 py-1 rounded flex items-center gap-1 transition-colors text-xs sm:text-sm"
  >
    <PlaneTakeoff className="h-4 w-4 shrink-0" />
    Book Flight
  </Button>

  {/* Neutral outline simple */}
  <Button
    variant="outline"
    className="border border-neutral text-neutral hover:bg-neutral hover:text-white active:bg-neutral active:text-white px-3 py-1 rounded transition-colors text-xs sm:text-sm"
  >
    Real State
  </Button>
         </div>


          {/* Right side */}
          <div className="flex items-center gap-3 text-neutral">
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

        {/* Main Nav (Logo + Search + User/Cart) */}
        <div className="flex items-center justify-between gap-3 py-3">
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

          {/* Search group (Alibaba style) */}
          <div className="flex-1 flex justify-center px-2">
            <div className="flex items-center border border-neutral rounded-full w-full max-w-xl min-w-[220px] overflow-hidden">
              <Input
                type="text"
                placeholder="Search products..."
                className="flex-1 bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 text-sm px-4"
              />
              <Button className="bg-primary hover:bg-primary-light text-white px-5 rounded-[2%] flex items-center gap-1 min-w-[50px]">
                <SearchIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Search</span>
              </Button>
            </div>
          </div>

          {/* User / Cart / Seller (desktop only) */}
          <div className="hidden sm:flex items-center gap-4 text-neutral">
            <div className="flex items-center gap-1 cursor-pointer">
              <User className="h-5 w-5" /> <span>Login</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <ShoppingCart className="h-5 w-5" /> <span>Cart</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer text-primary">
              <Store className="h-5 w-5" /> <span>Become a Seller</span>
            </div>
          </div>
        </div>
      </Container>



    </header>
  );
}
