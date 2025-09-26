"use client";

import ProductsTable from "@/components/dashboard/tables/ProductTable";
import productsData from "@/data/productsData.json";
import type { ProductInterface } from "@/data/ProductInterface";
import { DashProduct } from "@/types/product";

export default function ProductManagementPage() {
  const mappedProducts: DashProduct[] = (
    productsData as unknown as ProductInterface[]
  ).map((p) => ({
    id: p.id,
    name: p.translations.en.name,
    sellerId: p.seller.id,
    sellerName: p.seller.name,
    category: p.translations.en.category,
    price: p.price.amount,
    quantity: p.inventory.quantity,
    status:
      p.workflow?.status === "approved"
        ? "approved"
        : p.workflow?.status === "rejected"
        ? "rejected"
        : p.workflow?.status === "draft"
        ? "draft"
        : p.inventory.stockStatus === "out_of_stock"
        ? "out-of-stock"
        : "pending",
    inquiries: p.analytics?.inquiries ?? 0,
    region: p.seller.region,
    createdAt: p.audit.createdAt,
    updatedAt: p.audit.updatedAt,
  }));

  return (
    <main className="w-full">
      <ProductsTable
        title="Product Management"
        filters={[
          "All Products",
          "Pending",
          "Approved",
          "Rejected",
          "Out of Stock",
          "Flagged",
        ]}
        defaultFilter="All Products"
        fullWidth
        products={mappedProducts} // 👈 now using real JSON data
      />
    </main>
  );
}
