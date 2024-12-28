import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DateRangeState {
  date_start: number | null;
  date_end: number | null;
  date_start_arrival: number | null;
  date_end_arrival: number | null;
}

const initialState: DateRangeState = {
  date_start: null,
  date_end: null,
  date_start_arrival: null,
  date_end_arrival: null,
};

export const datesSlice = createSlice({
  name: "dates",
  initialState,
  reducers: {
    setDateStart: (state, action: PayloadAction<number | null>) => {
      state.date_start = action.payload;
    },
    setDateEnd: (state, action: PayloadAction<number | null>) => {
      state.date_end = action.payload;
    },
    setDateStartArrival: (state, action: PayloadAction<number | null>) => {
      state.date_start_arrival = action.payload;
    },
    setDateEndArrival: (state, action: PayloadAction<number | null>) => {
      state.date_end_arrival = action.payload;
    },
  },
});

export const { setDateStart, setDateEnd, setDateStartArrival, setDateEndArrival } = datesSlice.actions;
export default datesSlice;
