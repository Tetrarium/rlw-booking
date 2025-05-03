import { appApi } from "@/API/API";
import { combineReducers } from "@reduxjs/toolkit";

import coachServicesSlice from "./order/coachServicesSlice";
import currentRouteSlice from "./routes/currentRouteSlice";
import datesSlice from "./routes/datesSlice";
import locationsSlice from "./routes/locationsSlice";
import routesSettingsSlice from "./routes/routesSettingsSlice";

const reducers = {
  [locationsSlice.name]: locationsSlice.reducer,
  [datesSlice.name]: datesSlice.reducer,
  [routesSettingsSlice.name]: routesSettingsSlice.reducer,
  [currentRouteSlice.name]: currentRouteSlice.reducer,
  [coachServicesSlice.name]: coachServicesSlice.reducer,
  [appApi.reducerPath]: appApi.reducer,
};

export const reducer = combineReducers(reducers);