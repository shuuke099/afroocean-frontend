export type DashProduct = {
  id: string;
  name: string;
  sellerId: string;
  sellerName: string;
  category: string;
  price: number;
  quantity: number;
  status:
    | "pending"
    | "approved"
    | "rejected"
    | "out-of-stock"
    | "flagged"
    | "draft";
  inquiries?: number;
  createdAt: string;
  updatedAt?: string;
  region?: string;
};
