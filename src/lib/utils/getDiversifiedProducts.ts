import { NormalizedProduct } from "@/lib/normalizeProducts";

/**
 * Diversified product loader:
 * - Groups products by category (based on slug prefix).
 * - Returns items in round-robin order across categories.
 * - Supports pagination (page * count).
 */
export function getDiversifiedProducts(
  products: NormalizedProduct[],
  count = 12,
  page = 0
): NormalizedProduct[] {
  const categoryGroups: Record<string, NormalizedProduct[]> = {};

  for (const p of products) {
    const category = p.slug.split("-")[0]; // e.g. "clothes-1" -> "clothes"
    if (!categoryGroups[category]) {
      categoryGroups[category] = [];
    }
    categoryGroups[category].push(p);
  }

  const categories = Object.keys(categoryGroups);
  const diversified: NormalizedProduct[] = [];

  // Round robin until all products are consumed
  while (Object.values(categoryGroups).some((arr) => arr.length > 0)) {
    for (const category of categories) {
      if (categoryGroups[category]?.length > 0) {
        diversified.push(categoryGroups[category].pop()!);
      }
    }
  }

  // Paginated slice
  const start = page * count;
  return diversified.slice(start, start + count);
}
