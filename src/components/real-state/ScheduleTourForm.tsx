"use client";

import { Button } from "@/components/ui/button";

export default function ScheduleTourForm({
  onSubmit,
}: {
  onSubmit?: () => void;
}) {
  return (
    <div className="space-y-4">
      {/* Dates */}
      <div className="grid grid-cols-3 gap-2">
        {["Wed 17", "Thu 18", "Fri 19"].map((day, i) => (
          <button
            key={i}
            className={`border rounded-lg p-2 text-center ${
              i === 0
                ? "bg-primary text-white"
                : "hover:bg-primary-light hover:text-white"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <input
        type="email"
        placeholder="Email*"
        className="w-full border rounded p-2 text-sm"
      />
      <input
        type="tel"
        placeholder="Phone*"
        className="w-full border rounded p-2 text-sm"
      />

      {/* CTA */}
      <Button
        className="w-full bg-accent text-white hover:bg-accent-dark"
        onClick={onSubmit}
      >
        Request Tour
      </Button>
    </div>
  );
}
