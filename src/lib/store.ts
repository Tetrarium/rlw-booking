import { createWrapper } from "next-redux-wrapper";

import { appApi } from "@/API/API";
import { configureStore } from "@reduxjs/toolkit";

import { reducer } from "./features";

export const makeStore = () => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(appApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper(makeStore, { debug: true });