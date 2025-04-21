import { RootState } from "@/lib/store";
import { TrainDetails } from "@/types/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrentRouteState {
  departure: TrainDetails | null;
  arrival: TrainDetails | null;
}

const initialState: CurrentRouteState = {
  departure: null,
  arrival: null,
};

const currentRouteSlice = createSlice({
  name: 'current-route',
  initialState,
  reducers: {
    setCurrentDeparture: (state, action: PayloadAction<TrainDetails>) => {
      state.departure = action.payload;
    },
    setCurrentArrival: (state, action: PayloadAction<TrainDetails>) => {
      state.arrival = action.payload;
    },
    resetCurrentRoute: () => initialState,
  }
});

export default currentRouteSlice;

export const { resetCurrentRoute, setCurrentDeparture, setCurrentArrival } = currentRouteSlice.actions;

export const selectCurrentDeparture = (state: RootState) => state['current-route'].departure;
export const selectCurrentArrival = (state: RootState) => state['current-route'].arrival;
