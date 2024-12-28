import { routesApi } from "@/API/getRoutes";
import { combineReducers } from "@reduxjs/toolkit";

import datesSlice from "./datesSlice";
import locationsSlice from "./locationsSlice";

const reducers = {
  [locationsSlice.name]: locationsSlice.reducer,
  [datesSlice.name]: datesSlice.reducer,
  [routesApi.reducerPath]: routesApi.reducer,
};

export const reducer = combineReducers(reducers);