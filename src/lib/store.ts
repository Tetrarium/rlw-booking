import { createWrapper } from "next-redux-wrapper";

import { routesApi } from "@/API/getRoutes";
import { configureStore } from "@reduxjs/toolkit";

import { reducer } from "./reducers";

export const makeStore = () => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routesApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper(makeStore, { debug: true });