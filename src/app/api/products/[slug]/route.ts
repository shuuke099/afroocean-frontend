import { NextResponse } from "next/server";
import data from "@/app/data/categories_full.json";
import { normalizeProducts } from "@/lib/normalizeProducts";

// recursive product finder
function findProduct(categories: any[], slug: string): any | null {
  for (const cat of categories) {
    if (cat.products) {
      const found = cat.products.find((p: any) => p.slug === slug);
      if (found) return found;
    }
    if (cat.children) {
      const found = findProduct(cat.children, slug);
      if (found) return found;
    }
  }
  return null;
}

export async function GET(
  req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const rawProduct = findProduct(data, slug);
  if (!rawProduct) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  // ✅ normalize to add fields like sold, rating, originalPrice, etc.
  const normalized = normalizeProducts([rawProduct])[0];
  return NextResponse.json(normalized);
}
