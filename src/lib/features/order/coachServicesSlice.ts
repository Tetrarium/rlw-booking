import { RootState } from "@/lib/store";
import { CoachServicesKeys } from "@/types/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CoachServicesState = Record<CoachServicesKeys, boolean>;

const initialState: CoachServicesState = {
  air_conditioning: false,
  wifi: false,
  linens: false,
  feed: false
};

const coachServicesSlice = createSlice({
  name: 'coach-services',
  initialState,
  reducers: {
    toggleCoachService(state, action: PayloadAction<CoachServicesKeys>) {
      state[action.payload] = !state[action.payload];
    }
  }
});

export default coachServicesSlice;

export const { toggleCoachService } = coachServicesSlice.actions;

export const coachServiceSelector = (service: CoachServicesKeys) =>
  (state: RootState) => state['coach-services'][service]; 