import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LocationData {
  ip: string;
  city: string;
  region: string;
  country: string;
  country_code: string;
}

export const locationApi = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ipapi.co/" }),
  endpoints: (builder) => ({
    getLocation: builder.query<LocationData, void>({
      query: () => "json/",
    }),
  }),
});

export const { useGetLocationQuery } = locationApi;
