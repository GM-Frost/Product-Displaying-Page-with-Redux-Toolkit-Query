import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productAPI = createApi({
  reducerPath: "restProductAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/products`,
    }),
  }),
});

export const { useGetAllProductsQuery } = productAPI;
