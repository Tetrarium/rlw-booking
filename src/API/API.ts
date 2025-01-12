import { SERVER_URLS } from "@/setting";
import { GetRoutesDTO } from "@/types/dto";
import { RoutesResponse } from "@/types/models";
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
  }),
});

export const { useGetRoutesQuery } = appApi;