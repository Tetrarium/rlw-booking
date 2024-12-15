import { GetRoutesDTO } from "@/types/dto";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: GetRoutesDTO = {
  from_city_id: '',
  to_city_id: '',
};

export const queryRoutesParamsSlice = createSlice({
  name: 'queryRoutesParams',
  initialState,
  reducers: {
    addCityFrom(state, action: PayloadAction<string>) {
      state.from_city_id = action.payload;
    },
    addCityTo(state, action: PayloadAction<string>) {
      state.to_city_id = action.payload;
    }
  }
});