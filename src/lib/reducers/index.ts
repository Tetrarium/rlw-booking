import { appApi } from "@/API/API";
import { combineReducers } from "@reduxjs/toolkit";

import datesSlice from "./datesSlice";
import locationsSlice from "./locationsSlice";

const reducers = {
  [locationsSlice.name]: locationsSlice.reducer,
  [datesSlice.name]: datesSlice.reducer,
  [appApi.reducerPath]: appApi.reducer,
};

export const reducer = combineReducers(reducers);