"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/dashboard/DataTable";
import PromotionModal from "@/components/dashboard/PromotionModal";
import type { Promotion } from "@/types/promotion";

const sample: Promotion[] = [
  {
    id: "pr-1",
    sellerId: "u-1",
    title: "Fall Sale",
    description: "Up to 20% on select listings",
    discountType: "percentage",
    discountValue: 20,
    startDate: "2025-09-20",
    endDate: "2025-09-30",
    listingIds: ["ls-1", "ls-3"],
    status: "active",
  },
];

export default function SellerPromotionsPage() {
  const [open, setOpen] = useState(false);

  function handleCreate(fd: FormData) {
    // TODO: call API
    // const body = Object.fromEntries(fd.entries());
    setOpen(false);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-secondary">Promotions</h1>
        <Button
          className="bg-primary text-white hover:bg-primary-dark"
          onClick={() => setOpen(true)}
        >
          + Create Promotion
        </Button>
      </div>

      <DataTable<Promotion>
        columns={[
          { key: "title", header: "Title" },
          { key: "discountType", header: "Type" },
          { key: "discountValue", header: "Value" },
          {
            key: "status",
            header: "Status",
            render: (row) => <span className="text-sm">{row.status}</span>,
          },
          { key: "startDate", header: "Start" },
          { key: "endDate", header: "End" },
        ]}
        data={sample}
        empty="No promotions yet."
      />

      <PromotionModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleCreate}
      />
    </div>
  );
}
