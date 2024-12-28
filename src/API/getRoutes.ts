import { SERVER_URLS } from "@/setting";
import { GetRoutesDTO } from "@/types/dto";
import { RoutesResponse } from "@/types/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const routesApi = createApi({
  reducerPath: "routesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URLS.ROUTES,
  }),
  endpoints: (builder) => ({
    getRoutes: builder.query<RoutesResponse, GetRoutesDTO>({
      query: (data) => ({
        url: '/',
        params: data,
      }),
    }),
  }),
});

export const { useGetRoutesQuery } = routesApi;