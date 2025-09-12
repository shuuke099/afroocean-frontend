"use client";

import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product: any) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="mt-2 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
