"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function PropertyTypeDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("For Sale");

  const options = ["For Sale", "For Rent", "Sold"];

  return (
    <div className="relative">
      {/* Trigger */}
      <Button
        variant="outline"
        className="flex-2 min-w-[120px] text-xs sm:text-sm"
        onClick={() => setOpen(!open)}
      >
        {selected} ▼
      </Button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl z-20">
          {/* Header */}
          <div className="p-2 border-b font-semibold text-center text-gray-700">
            Property Type
          </div>

          {/* Options */}
          <div className="flex flex-col">
            {options.map((option) => (
              <label
                key={option}
                className={`flex items-center px-4 py-2 text-sm cursor-pointer transition-colors ${
                  selected === option
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                <input
                  type="radio"
                  name="propertyType"
                  value={option}
                  checked={selected === option}
                  onChange={() => setSelected(option)}
                  className="mr-2 accent-blue-500"
                />
                {option}
              </label>
            ))}
          </div>

          {/* Footer */}
          <div className="p-2 border-t">
            <Button
              className="w-full bg-blue-500 text-white hover:bg-blue-600"
              onClick={() => setOpen(false)}
            >
              Apply
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
