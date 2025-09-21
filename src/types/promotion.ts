export type DiscountType = "fixed" | "percentage";

export interface Promotion {
  id: string;
  sellerId: string;
  title: string;
  description?: string;
  discountType: DiscountType;
  discountValue: number;
  startDate: string; // ISO
  endDate: string; // ISO
  listingIds: string[];
  status: "upcoming" | "active" | "expired";
}
