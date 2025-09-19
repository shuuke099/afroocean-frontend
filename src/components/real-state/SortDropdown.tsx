"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function SortDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Homes for You");

  const options = [
    "Recommended",
    "Price: High → Low",
    "Price: Low → High",
    "Newest Listings",
    "By Bedrooms",
    "By Bathrooms",
    "By Square Footage",
    "By Lot Size",
  ];

  return (
    <div className="relative px-1">
      {/* Trigger */}
      <Button
        variant="link"
        className="text-sm font-semibold text-primary hover:text-primary-light focus:text-primary-light focus:outline-none focus:ring-0 px-0"
        onClick={() => setOpen(!open)}
      >
        {selected} ▼
      </Button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
          <div className="flex flex-col">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
                className={`px-4 py-2 text-left text-sm transition-colors ${
                  selected === option
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
