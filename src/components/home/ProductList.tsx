// components/ProductGrid.tsx

import ProductCard from "./ProductCard";

const products = [
  {
    image: "https://picsum.photos/seed/product1/400/400",
    title: "Men's Chelsea Boots Lightweight Casual",
    price: 25.64,
    originalPrice: 44.21,
    discount: "$3.16 extra",
    countdown: "11:59:37",
    sold: 320,
    isLocal: true,
    rating: 5,
    fastDelivery: true,
  },
  {
    image: "https://picsum.photos/seed/product2/400/400",
    title: "9-in-1 Electric Pressure Cooker Smart Touch",
    price: 39.78,
    originalPrice: 87.79,
    discount: "$4.42 extra",
    countdown: "11:59:31",
    sold: 71,
    isLocal: true,
    rating: 5,
    fastDelivery: true,
  },
  {
    image: "https://picsum.photos/seed/product3/400/400",
    title: "2pcs - Men's Navy Blue Flat Cap",
    price: 8.24,
    originalPrice: 10.58,
    discount: "$0.81 extra",
    countdown: "11:59:31",
    sold: 68,
    isLocal: true,
    rating: 4,
    fastDelivery: false,
  },
  {
    image: "https://picsum.photos/seed/product4/400/400",
    title: "Beet powder with reishi for energy",
    price: 14.46,
    originalPrice: 17.99,
    sold: 135,
    rating: 4,
    isLocal: true,
    fastDelivery: true,
  },
  {
    image: "https://picsum.photos/seed/product5/400/400",
    title: "Single-sided Sponge Shoe Wipe",
    price: 2.58,
    originalPrice: 3.33,
    sold: 2700,
    rating: 5,
    isLocal: false,
    fastDelivery: false,
  },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
      {products.map((product, i) => (
        <ProductCard key={i} {...product} />
      ))}
    </div>
  );
}
