export type Category =
  | "home"
  | "vehicle"
  | "part"
  | "Car"
  | "Truck"
  | "Motorcycle"
  | "SparePart"
  | "Accessory"
  | "Service";

export interface BaseListing {
  id: number | string;
  title: string;
  price: string | number;
  images: string[];
  category: Category;
  condition?: string;
  location?: string;
}

export interface VehicleListing extends BaseListing {
  category: "Car" | "Truck" | "Motorcycle" | "vehicle";
  make?: string;
  model?: string;
  year?: number;
  mileage?: number;
  transmission?: string;
  fuel?: string;
}

export interface PartListing extends BaseListing {
  category: "SparePart" | "Accessory" | "part";
  partType?: string;
  compatibility?: string[];
}

export interface ServiceListing extends BaseListing {
  category: "Service";
  serviceType?: string;
  provider?: string;
}

export type ListingItem = BaseListing | VehicleListing | PartListing | ServiceListing;
