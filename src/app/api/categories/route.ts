import { NextResponse } from "next/server";
import categories from "@/app/data/categories_full.json";


export async function GET() {
  return NextResponse.json(categories);
}
