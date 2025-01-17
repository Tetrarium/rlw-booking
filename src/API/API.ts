import { BASE_SERVER_URL } from "@/setting";
import { RoutesParams } from "@/types/dto";
import { CitiesResponse, RoutesResponse } from "@/types/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_SERVER_URL,
  }),
  endpoints: (builder) => ({
    getRoutes: builder.query<RoutesResponse, RoutesParams>({
      query: (data) => ({
        url: 'routes',
        params: data,
      }),
    }),
    getCities: builder.query<CitiesResponse, string>({
      query: (name) => ({
        url: 'routes/cities',
        params: { name },
      }),
    }),
  }),
});

export const { useGetRoutesQuery, useGetCitiesQuery } = appApi;