import { NextResponse } from "next/server";
import categories from "@/app/data/categories_full.json";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  // Find category by slug
  const category = categories.find((cat: any) => cat.slug === slug);

  if (!category) {
    return NextResponse.json(
      { error: `Category '${slug}' not found` },
      { status: 404 }
    );
  }

  return NextResponse.json(category);
}
