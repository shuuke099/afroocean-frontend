"use client";

import { Button } from "@/components/ui/button";
import DataTable from "@/components/dashboard/DataTable";
import Badge from "@/components/dashboard/Badge";
import type { Listing } from "@/types/listing";

const rows: Listing[] = Array.from({ length: 6 }).map((_, i) => ({
  id: `ls-${i + 1}`,
  title: i % 2 === 0 ? "Charming Craftsman" : "Honda Civic 2019",
  category: i % 2 === 0 ? "real-estate" : "automotive",
  price: i % 2 === 0 ? 515000 : 14500,
  currency: "USD",
  status: (["active", "pending", "draft"] as const)[i % 3],
  views: 100 + i * 15,
  inquiries: 3 + (i % 5),
  thumbnail: `https://picsum.photos/seed/item${i}/120/80`,
  createdAt: "2025-09-01",
  updatedAt: "2025-09-10",
}));

export default function SellerListingsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-secondary">My Listings</h1>
        <Button className="bg-accent text-white hover:bg-accent-dark">
          + Add New Listing
        </Button>
      </div>

      <DataTable<Listing>
        columns={[
          {
            key: "title",
            header: "Listing",
            render: (row) => (
              <div className="flex items-center gap-3">
                <img
                  src={row.thumbnail}
                  className="h-12 w-16 rounded object-cover"
                  alt=""
                />
                <div>
                  <div className="font-medium text-secondary">{row.title}</div>
                  <div className="text-xs text-gray-500">{row.category}</div>
                </div>
              </div>
            ),
          },
          {
            key: "price",
            header: "Price",
            render: (row) => (
              <span className="text-secondary">
                {row.currency} {row.price.toLocaleString()}
              </span>
            ),
          },
          {
            key: "status",
            header: "Status",
            render: (row) => {
              const color =
                row.status === "active"
                  ? "green"
                  : row.status === "pending"
                  ? "yellow"
                  : row.status === "rejected"
                  ? "red"
                  : row.status === "sold"
                  ? "blue"
                  : "gray";
              return <Badge color={color as any}>{row.status}</Badge>;
            },
          },
          { key: "views", header: "Views" },
          { key: "inquiries", header: "Inquiries" },
          {
            key: "actions",
            header: "Actions",
            render: (row) => (
              <div className="flex items-center gap-2">
                <Button variant="outline" className="text-xs">
                  Edit
                </Button>
                <Button variant="outline" className="text-xs">
                  Discount
                </Button>
                <Button variant="outline" className="text-xs">
                  Mark Sold
                </Button>
                <Button
                  variant="outline"
                  className="text-xs border-red-300 text-red-600"
                >
                  Delete
                </Button>
              </div>
            ),
          },
        ]}
        data={rows}
      />
    </div>
  );
}
