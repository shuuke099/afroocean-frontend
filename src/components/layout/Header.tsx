"use client";

import Image from "next/image";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
import {
  MenuIcon,
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

export default function Header() {
  return (
    <div>
      {/* Announcement Bar */}
      <header className="mx-auto">
        <Container>
          <div className="text-sm pt-4 flex justify-between items-center">
            <div className="w-full flex items-center justify-between sm:hidden">
              <Button className="bg-white text-[#ffa200] px-4 py-1 text-xs rounded shadow-md">
                Become Seller
              </Button>
              <Button
                variant="outline"
                className="text-sm px-4 py-1 rounded border border-gray-300 shadow-sm"
              >
                <PlaneTakeoff />
                <span>BookFlight</span>
              </Button>
              <Button
                variant="outline"
                className="text-sm px-4 py-1 rounded border border-gray-300 shadow-sm"
              >
                Top-Stores
              </Button>
            </div>
            <div className="text-sm hidden sm:block">Get help 24/7</div>

            <div className="hidden sm:flex items-center gap-3 text-sm">
              <span className="flex items-center cursor-pointer">
                <Globe className="w-4 h-4 mr-1" /> Language{" "}
                <ChevronDown className="w-4 h-4 ml-1" />
              </span>
              <span className="flex items-center cursor-pointer">
                📍 Location <ChevronDown className="w-4 h-4 ml-1" />
              </span>
            </div>
          </div>
          <div className="flex sm:hidden gap-3 text-sm justify-end py-1">
            <div className="tex-sm">downlaod the app</div>
            <span className="flex items-center cursor-pointer">
              <Globe className="w-4 h-4 mr-1" />
              Language
              <ChevronDown className="w-4 h-4 ml-1" />
            </span>
            <span className="flex items-center cursor-pointer">
              📍 Location
              <ChevronDown className="w-4 h-4 ml-1" />
            </span>
          </div>

          {/* Top Nav */}
          <div className="py-2 flex items-center justify-between sticky top-0 z-50">
            <div className="flex items-center gap-3">
              <Image
                src="/logo/flipkart.svg"
                alt="Logo"
                width={100}
                height={30}
              />
              <div className="hidden sm:block text-xs text-[#ffa200] font-semibold">
                Book<span className="text-blue-600">Flight</span>
              </div>
            </div>

            <div className="flex-1 mx-4 relative">
              <Input
                type="text"
                placeholder="Search for Products, Brands and More"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-full text-sm shadow-sm"
              />
              <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-1 cursor-pointer">
                <User className="h-5 w-5" /> <span>Login</span>
              </div>
              <div className="hidden sm:flex items-center gap-1 cursor-pointer">
                <ShoppingCart className="h-5 w-5" /> <span>Cart</span>
              </div>
              <div className="hidden sm:flex items-center gap-1 cursor-pointer">
                <Store className="h-5 w-5" /> <span>Become a Seller</span>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero Banner */}
      <Container>
        <div className="relative w-full h-[150px] sm:h-[400px] overflow-hidden rounded-xl">
          <Image
            src="https://picsum.photos/seed/furniturebanner/1600/500"
            fill
            alt="Furniture Promo"
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="font-semibold text-xl sm:text-3xl">
              Stylish Furniture
            </p>
            <p className="text-sm sm:text-lg">Up to 70% Off</p>
            <p className="text-xs sm:text-sm">
              Modern, Minimalist, and Comfortable
            </p>
          </div>
        </div>
      </Container>
      {/* Category Icons Grid (Mobile Friendly) */}
      <Container>
        <div className=" py-4 px-2 grid grid-cols-4 sm:grid-cols-10 gap-4 text-center">
          {[
            "Scan & Pay",
            "Mobiles",
            "Home",
            "Gadgets",
            "Appliances",
            "GenZ Toys",
            "Fashion",
            "Food",
            "Beauty",
            "Electronics",
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-xs sm:text-sm"
            >
              <div className="w-14 h-14 bg-[#f5f5f5] rounded-full mb-1"></div>
              {item}
            </div>
          ))}
        </div>
      </Container>

      {/* Mobile Bottom Bar */}
      <Container>
        <div className="fixed bottom-0 left-0 w-full border-t sm:hidden flex justify-around items-center py-2 z-50 text-xs">
          {["Home", "Play", "Categories", "Account", "Cart"].map((tab, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-5 h-5 bg-gray-300 rounded-full mb-1"></div>
              {tab}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
