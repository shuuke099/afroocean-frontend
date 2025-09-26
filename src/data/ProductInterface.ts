export interface ProductInterface {
  id: string;
  slug: string;
  translations: {
    [lang: string]: { category: string; name: string; description: string };
  };
  price: { amount: number; currency: string; originalPrice?: number };
  inventory: {
    quantity: number;
    sku: string;
    stockStatus: "in_stock" | "low" | "out_of_stock";
  };
  seller: {
    id: string;
    name: string;
    logoUrl?: string;
    region: string;
    rating?: number;
    status: "active" | "pending" | "suspended" | "banned";
  };
  media: { url: string; type: "image" | "video" | "3d"; primary?: boolean }[];
  marketing?: {
    discount?: number;
    promotion?: string;
    clearance?: boolean;
    startDate?: string;
    endDate?: string;
    featured?: boolean;
  };
  analytics?: {
    views?: number;
    inquiries?: number;
    sales?: number;
    flags?: number;
    ratings?: number;
    wishlistCount?: number;
    cartAdds?: number;
  };
  reviews?: {
    average: number;
    count: number;
    breakdown?: { [stars: number]: number };
  };
  workflow?: {
    status: "draft" | "pending" | "approved" | "rejected";
    moderation?: { by: string; reason?: string; timestamp: string };
  };
  audit: {
    createdAt: string;
    updatedAt?: string;
    publishedAt?: string;
    deletedAt?: string;
  };
  shipping?: {
    weight?: string;
    dimensions?: string;
    deliveryEstimates?: string;
    returnPolicy?: string;
  };
  location?: { country: string; city?: string; coordinates?: [number, number] };
  attributes?: { [key: string]: string | number | boolean };
  seo?: {
    seoTitle: string;
    seoDescription: string;
    searchKeywords: string[];
    tags?: string[];
  };
}
