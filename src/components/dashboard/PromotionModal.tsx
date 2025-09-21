"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function PromotionModal({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}) {
  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />
      <div className="relative w-full max-w-lg rounded-xl border bg-white p-6 shadow-xl">
        <h3 className="text-lg font-semibold text-secondary">Create Promotion</h3>
        <p className="text-sm text-gray-600 mt-1">Set a discount or schedule a sales event.</p>

        <form
          className="mt-4 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget as HTMLFormElement);
            onSubmit(fd);
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-neutral">Title</label>
              <input name="title" required className="mt-1 w-full rounded border px-3 py-2" placeholder="Spring Clearance" />
            </div>
            <div>
              <label className="text-sm text-neutral">Discount Type</label>
              <select name="discountType" className="mt-1 w-full rounded border px-3 py-2">
                <option value="percentage">Percentage (%)</option>
                <option value="fixed">Fixed (USD)</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-neutral">Discount Value</label>
              <input name="discountValue" type="number" step="0.01" required className="mt-1 w-full rounded border px-3 py-2" placeholder="20" />
            </div>
            <div>
              <label className="text-sm text-neutral">Listings (IDs, comma separated)</label>
              <input name="listingIds" className="mt-1 w-full rounded border px-3 py-2" placeholder="abc123, def456" />
            </div>
            <div>
              <label className="text-sm text-neutral">Start Date</label>
              <input name="startDate" type="date" required className="mt-1 w-full rounded border px-3 py-2" />
            </div>
            <div>
              <label className="text-sm text-neutral">End Date</label>
              <input name="endDate" type="date" required className="mt-1 w-full rounded border px-3 py-2" />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" className="text-neutral border-neutral" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button className="bg-accent text-white hover:bg-accent-dark" type="submit">
              Create
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
