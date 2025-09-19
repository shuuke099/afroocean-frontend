"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FiltersModal() {
  const [open, setOpen] = useState(false);
  const [selectedBeds, setSelectedBeds] = useState("Any");
  const [selectedBaths, setSelectedBaths] = useState("Any");

  const bedOptions = ["Any", "1+", "2+", "3+", "4+", "5+"];
  const bathOptions = ["Any", "1+", "2+", "3+", "4+"];

  const handleSelect = (
    value: string,
    current: string,
    setter: (val: string) => void
  ) => {
    setter(value === current ? "Any" : value);
  };

  return (
    <div>
      {/* Trigger */}
      <Button
        variant="outline"
        className="flex-1 min-w-[120px] text-xs sm:text-sm"
        onClick={() => setOpen(true)}
      >
        Filters ▼
      </Button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto shadow-lg">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b bg-gray-50">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button
              className="text-gray-500 text-xl"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-6">
            {/* Price Range */}
            <div>
              <label className="block font-medium mb-2 text-gray-700">
                Price Range
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-1/2 border rounded p-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-400"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-1/2 border rounded p-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block font-medium mb-2 text-gray-700">
                Bedrooms
              </label>
              <div className="flex gap-2 flex-wrap">
                {bedOptions.map((bed) => (
                  <Button
                    key={bed}
                    variant="outline"
                    onClick={() =>
                      handleSelect(bed, selectedBeds, setSelectedBeds)
                    }
                    className={`flex-1 text-xs border ${
                      selectedBeds === bed
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white text-gray-700 hover:bg-blue-50 border-gray-300"
                    }`}
                  >
                    {bed}
                  </Button>
                ))}
              </div>
            </div>

            {/* Bathrooms */}
            <div>
              <label className="block font-medium mb-2 text-gray-700">
                Bathrooms
              </label>
              <div className="flex gap-2 flex-wrap">
                {bathOptions.map((bath) => (
                  <Button
                    key={bath}
                    variant="outline"
                    onClick={() =>
                      handleSelect(bath, selectedBaths, setSelectedBaths)
                    }
                    className={`flex-1 text-xs border ${
                      selectedBaths === bath
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white text-gray-700 hover:bg-blue-50 border-gray-300"
                    }`}
                  >
                    {bath}
                  </Button>
                ))}
              </div>
            </div>

            {/* Home Type */}
            <div>
              <label className="block font-medium mb-2 text-gray-700">
                Home Type
              </label>
              <div className="space-y-2 border rounded-md p-3">
                {[
                  "Houses",
                  "Townhomes",
                  "Multi-family",
                  "Condos/Co-ops",
                  "Lots/Land",
                  "Apartments",
                  "Manufactured",
                ].map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <input
                      type="checkbox"
                      className="accent-blue-500 w-4 h-4"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t flex justify-between bg-gray-50">
            <Button
              variant="outline"
              className="text-sm"
              onClick={() => {
                setSelectedBeds("Any");
                setSelectedBaths("Any");
                setOpen(false);
              }}
            >
              Reset All Filters
            </Button>
            <Button
              className="bg-blue-500 text-white px-6"
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
