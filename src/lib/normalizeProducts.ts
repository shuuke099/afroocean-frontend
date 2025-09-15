// src/lib/normalizeProducts.ts
export interface RawProduct {
  id: number;
  slug: string;
  name: string;
  price: number;
  img: string;
}

export interface NormalizedProduct {
  id: number;
  slug: string;
  name: string; // keep "name" ✅
  title: string; // alias if you prefer using title in UI
  img: string;
  price: number;
  originalPrice: number;
  discount?: string;
  countdown?: string;
  sold: number;
  isLocal: boolean;
  rating: number;
  fastDelivery: boolean;
}

export function normalizeProducts(
  rawProducts: RawProduct[]
): NormalizedProduct[] {
  return rawProducts.map((p) => {
    const originalPrice = +(p.price * (1 + Math.random() * 0.5 + 0.1)).toFixed(
      2
    ); // 10–60% higher
    const discount = `$${(originalPrice - p.price).toFixed(2)} extra`;
    const countdown = "11:59:37"; // fake timer (could be randomized)
    const sold = Math.floor(Math.random() * 5000); // fake sold count
    const rating = Math.floor(Math.random() * 2) + 4; // 4 or 5 stars
    const isLocal = Math.random() > 0.5;
    const fastDelivery = Math.random() > 0.5;

    return {
      ...p,
      title: p.name, // alias
      originalPrice,
      discount,
      countdown,
      sold,
      rating,
      isLocal,
      fastDelivery,
    };
  });
}
