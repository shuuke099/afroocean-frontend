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
