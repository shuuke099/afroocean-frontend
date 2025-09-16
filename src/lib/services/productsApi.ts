import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
  id: number;
  slug: string;
  name: string;
  title: string;
  img: string;
  price: number;
  originalPrice: number;
  discount?: string;
  countdown?: string;
  sold: number;
  isLocal: boolean;
  rating: number;
  fastDelivery: boolean;
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
    }),
    getProductBySlug: builder.query<Product, string>({
      query: (slug) => `/products/${slug}`,
    }),
    searchProducts: builder.query<Product[], string>({
      query: (q) => `/products?search=${encodeURIComponent(q)}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductBySlugQuery,
  useSearchProductsQuery,
} = productsApi;
