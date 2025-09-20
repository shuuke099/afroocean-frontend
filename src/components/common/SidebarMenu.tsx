"use client";

import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import Link from "next/link";

const menuSections = [
  {
    key: "buy",
    title: "Buy Properties",
    links: [
      "Homes for Sale",
      "New Developments",
      "Foreclosures & Deals",
      "Open Houses",
      "Recently Sold",
    ],
  },
  {
    key: "rent",
    title: "Rent Properties",
    links: [
      "Apartments for Rent",
      "Houses for Rent",
      "Short-Term Rentals",
      "All Rental Listings",
    ],
  },
  {
    key: "pros",
    title: "Find Professionals",
    links: [
      "Real Estate Agents",
      "Property Managers",
      "Home Inspectors",
      "Contractors & Builders",
    ],
  },
  {
    key: "sell",
    title: "Sell With Us",
    links: ["List Your Home", "Free Home Valuation", "Selling Guide"],
  },
];

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SidebarMenu({ isOpen, onClose }: SidebarMenuProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm">
      <aside className="absolute top-0 left-0 h-full w-80 bg-white shadow-2xl p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-primary transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Logo */}
        <div className="mb-10">
          <img src="/afroocean-logo-1.png" alt="AfroOcean" className="h-10" />
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          {menuSections.map((section) => (
            <div key={section.key}>
              {/* Toplist Button (now styled professionally) */}
              <button
                onClick={() => toggleSection(section.key)}
                className="flex justify-between items-center w-full px-3 py-3 rounded-lg
                           text-gray-900 font-semibold tracking-wide
                           hover:bg-gray-100 hover:text-primary
                           focus:bg-gray-100 focus:text-primary focus:outline-none
                           transition-colors duration-200"
              >
                <span>{section.title}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    openSection === section.key ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              {/* Sublist (unchanged, already professional) */}
              {openSection === section.key && (
                <ul className="mt-3 pl-4 text-sm space-y-2 text-gray-600 border-l border-gray-200">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="block px-2 py-2 rounded-md transition-colors duration-200
                                   hover:bg-primary hover:text-white 
                                   focus:bg-primary focus:text-white focus:outline-none"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
}
