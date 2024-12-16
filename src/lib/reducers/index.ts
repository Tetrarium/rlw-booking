import { combineReducers } from "@reduxjs/toolkit";

import locationsSlice from "./locationsSlice";

const reducers = {
  [locationsSlice.name]: locationsSlice.reducer,
};

export const reducer = combineReducers(reducers);