"use client";

import Link from "next/link";
import { Home, PlayCircle, Grid, User, ShoppingCart } from "lucide-react";

const tabs = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Play", icon: PlayCircle, href: "/play" },
  { name: "Categories", icon: Grid, href: "/categories" },
  { name: "Account", icon: User, href: "/account" },
  { name: "Cart", icon: ShoppingCart, href: "/cart" },
];

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full border-t bg-white sm:hidden flex justify-around items-center py-2 z-50 text-xs shadow-md">
      {tabs.map((tab, i) => (
        <Link
          key={i}
          href={tab.href}
          className="flex flex-col items-center text-gray-500 hover:text-primary-light focus:text-primary-light transition"
        >
          <tab.icon className="w-5 h-5 mb-1" />
          {tab.name}
        </Link>
      ))}
    </div>
  );
}
