import { SERVER_URLS } from "@/setting";
import { GetRoutesDTO } from "@/types/dto";
import { CitiesResponse, RoutesResponse } from "@/types/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URLS.ROUTES,
  }),
  endpoints: (builder) => ({
    getRoutes: builder.query<RoutesResponse, GetRoutesDTO>({
      query: (data) => ({
        url: 'routes',
        params: data,
      }),
    }),
    getCities: builder.query<CitiesResponse, string>({
      query: (name) => `cities?name=${name}`,
    }),
  }),
});

export const { useGetRoutesQuery, useGetCitiesQuery } = appApi;