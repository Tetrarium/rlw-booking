import { toast } from "react-toastify";

import { RootState } from "@/lib/store";
import { BASE_SERVER_URL } from "@/setting";
import { CitiesResponse, RoutesSummary } from "@/types/models";
import { createSelector } from "@reduxjs/toolkit";
import {
    BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_SERVER_URL,
});

const baseQueryWithErrorHandling: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  const data = result.data;

  if (data !== null && typeof data === 'object' && 'error' in data) {
    console.error(data.error);
    const error = data.error as string;

    toast.error(error);

    return {
      error: {
        status: 400,
        data: error,
      }
    };
  }

  if (result.error) {
    let errMsg = 'Something went wrong';

    if ('error' in result.error) {
      errMsg = result.error.status + ': ' + result.error.error;
    }
    console.error();

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

export const selectCountActiveRequests = createSelector(
  (state: RootState) => state.appApi.queries,
  (queries) => {
    return Object.values(queries).filter(q => q?.status === 'pending').length;
  }
);
