"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { menuData } from "./menuData";

export default function DesktopNavbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className="hidden md:flex items-center gap-8 relative z-[999999]" // super high z-index
    >
      {menuData.map((menu) => (
        <div key={menu.title} className="relative">
          {/* Top-level button */}
          <button
            onClick={() =>
              setOpenMenu(openMenu === menu.title ? null : menu.title)
            }
            className="flex items-center gap-1 font-medium text-white hover:text-accent transition"
          >
            {menu.title}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                openMenu === menu.title ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown */}
          {openMenu === menu.title && (
            <div className="absolute top-full left-0 mt-3 bg-white shadow-2xl rounded-xl p-5 w-64 animate-fade-in z-[9999999]">
              <ul className="space-y-2 text-sm font-medium text-gray-700">
                {menu.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="block px-3 py-2 rounded-md transition-colors duration-200
                                 hover:bg-primary hover:text-white
                                 focus:bg-primary focus:text-white
                                 focus:outline-none"
                      // ⚠️ removed auto-close on click
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
