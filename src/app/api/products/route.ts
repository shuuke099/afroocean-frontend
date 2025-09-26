import { NextResponse } from "next/server";
import data from "@/data/categories_full.json";
import { normalizeProducts } from "@/lib/normalizeProducts";

// recursive to flatten
function extractProducts(categories: any[]): any[] {
  let all: any[] = [];
  for (const cat of categories) {
    if (cat.products) {
      all = [...all, ...cat.products];
    }
    if (cat.children) {
      all = [...all, ...extractProducts(cat.children)];
    }
  }
  return all;
}

export async function GET() {
  const categories = Array.isArray(data) ? data : [data];
  const rawProducts = extractProducts(categories);
  const products = normalizeProducts(rawProducts);
  return NextResponse.json(products);
}
