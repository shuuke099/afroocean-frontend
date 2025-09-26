"use client";

import { useParams } from "next/navigation";
import productsData from "@/data/productsData.json";
import type { ProductInterface } from "@/data/ProductInterface";

export default function ProductDetailPage() {
  const { id } = useParams(); // grab ID from URL
  const products = productsData as unknown as ProductInterface[];

  // Find product by ID
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold text-red-600">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        {product.translations.en.name}
      </h1>

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: image */}
        <div>
          {product.media?.[0] ? (
            <img
              src={product.media[0].url}
              alt={product.translations.en.name}
              className="w-full rounded-lg shadow-md"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">No image available</span>
            </div>
          )}
        </div>

        {/* Right: details */}
        <div className="space-y-3">
          <p>
            <span className="font-semibold">Category:</span>{" "}
            {product.translations.en.category}
          </p>
          <p>
            <span className="font-semibold">Price:</span> $
            {product.price.amount} {product.price.currency}
          </p>
          <p>
            <span className="font-semibold">Stock:</span>{" "}
            {product.inventory.quantity} (
            {product.inventory.stockStatus.replace("_", " ")})
          </p>
          <p>
            <span className="font-semibold">Seller:</span> {product.seller.name}{" "}
            ({product.seller.region})
          </p>
          <p>
            <span className="font-semibold">Status:</span>{" "}
            {product.workflow?.status ?? "draft"}
          </p>
          <p>
            <span className="font-semibold">Created:</span>{" "}
            {new Date(product.audit.createdAt).toLocaleDateString()}
          </p>
          {product.audit.updatedAt && (
            <p>
              <span className="font-semibold">Updated:</span>{" "}
              {new Date(product.audit.updatedAt).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Description</h2>
        <p className="text-gray-700 dark:text-gray-300">
          {product.translations.en.description}
        </p>
      </div>

      {/* Analytics */}
      {product.analytics && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Analytics</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Views: {product.analytics.views ?? 0}</li>
            <li>Inquiries: {product.analytics.inquiries ?? 0}</li>
            <li>Sales: {product.analytics.sales ?? 0}</li>
            <li>Wishlist Adds: {product.analytics.wishlistCount ?? 0}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
