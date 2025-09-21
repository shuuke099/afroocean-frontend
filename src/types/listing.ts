// src/types/listing.ts

export type BaseListing = {
  id: number;
  title: string;
  price: string;
  address?: string; // some categories may not need it
  images: string[];
  description?: string;
  contactNumber?: string;
  category:
    | "realestate"
    | "automotive"
    | "spareparts"
    | "electronics"
    | "other";
};
export type ListingStatus =
  | "active"
  | "pending"
  | "draft"
  | "rejected"
  | "sold";

export type ListingCategory = "real-estate" | "automotive" | "product";

export interface Listing {
  id: string;
  title: string;
  category: ListingCategory;
  price: number;
  currency: string; // "USD"
  status: ListingStatus;
  views: number;
  inquiries: number;
  thumbnail: string;
  createdAt: string; // ISO
  updatedAt: string; // ISO
}
