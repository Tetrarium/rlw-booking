import { toast } from "react-toastify";

import { BASE_SERVER_URL } from "@/setting";
import { CitiesResponse, ResponseError, RoutesResponse, RoutesSummary } from "@/types/models";
import {
    BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_SERVER_URL,
});

const baseQueryWithErrorHandling: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError | ResponseError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  const data = result.data;

  if (data !== null && typeof data === 'object' && 'error' in data) {
    const error = data.error as string;

    toast.error(error);
  }

  console.log('result', result);

  if (result.error) {
    let errMsg = 'Something went wrong';

    if ('error' in result.error) {
      errMsg = result.error.error;
    }
    console.log('toastError');

    toast.error(errMsg);
  }

  return result;
};

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: baseQueryWithErrorHandling,
  endpoints: (builder) => ({
    getRoutes: builder.query<RoutesSummary, string>({
      query: (queryString) => `/routes?${queryString}`,
      transformResponse: (response: RoutesResponse) => {
        if ("error" in response) {
          throw new Error(response.error);
        }

        return response;
      },
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