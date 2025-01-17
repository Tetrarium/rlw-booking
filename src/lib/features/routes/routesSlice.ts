import { RoutesParams } from "@/types/dto";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: RoutesParams = {
  from_city_id: '',
  to_city_id: '',
};

type CitiesParams = Pick<RoutesParams, 'from_city_id' | 'to_city_id'>;

export const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    citiesChanged: (state, action: PayloadAction<CitiesParams>) => {
      state.from_city_id = action.payload.from_city_id;
      state.to_city_id = action.payload.to_city_id;
    }
  },
});

export const { citiesChanged } = routesSlice.actions;

export default routesSlice;