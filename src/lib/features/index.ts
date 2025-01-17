import { appApi } from "@/API/API";
import { combineReducers } from "@reduxjs/toolkit";

import datesSlice from "./routes/datesSlice";
import locationsSlice from "./routes/locationsSlice";
import routesSlice from "./routes/routesSlice";

const reducers = {
  [locationsSlice.name]: locationsSlice.reducer,
  [datesSlice.name]: datesSlice.reducer,
  [routesSlice.name]: routesSlice.reducer,
  [appApi.reducerPath]: appApi.reducer,
};

export const reducer = combineReducers(reducers);