import { RoutesSettings } from "@/types/dto";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: RoutesSettings = {
  from_city_id: '',
  to_city_id: '',
};

type CitiesParams = Pick<RoutesSettings, 'from_city_id' | 'to_city_id'>;

export const routesSettingsSlice = createSlice({
  name: 'routes-settings',
  initialState,
  reducers: {
    citiesChanged: (state, action: PayloadAction<CitiesParams>) => {
      state.from_city_id = action.payload.from_city_id;
      state.to_city_id = action.payload.to_city_id;
    },
    dateStartChanged: (state, action: PayloadAction<string>) => {
      state.date_start = action.payload;
    },
    dateEndChanged: (state, action: PayloadAction<string>) => {
      state.date_end = action.payload;
    },
    dateStartArrivalChanged: (state, action: PayloadAction<string>) => {
      state.date_start_arrival = action.payload;
    },
    dateEndArrivalChanged: (state, action: PayloadAction<string>) => {
      state.date_end_arrival = action.payload;
    },
    haveFirstClassChanged: (state, action: PayloadAction<boolean>) => {
      state.have_first_class = action.payload;
    },
    haveSecondClassChanged: (state, action: PayloadAction<boolean>) => {
      state.have_second_class = action.payload;
    },
    haveThirdClassChanged: (state, action: PayloadAction<boolean>) => {
      state.have_third_class = action.payload;
    },
    haveFourthClassChanged: (state, action: PayloadAction<boolean>) => {
      state.have_fourth_class = action.payload;
    },
    haveWifiChanged: (state, action: PayloadAction<boolean>) => {
      state.have_wifi = action.payload;
    },
    haveAirConditioningChanged: (state, action: PayloadAction<boolean>) => {
      state.have_air_conditioning = action.payload;
    },
    priceFromChanged: (state, action: PayloadAction<number>) => {
      state.price_from = action.payload;
    },
    priceToChanged: (state, action: PayloadAction<number>) => {
      state.price_to = action.payload;
    },
    startDepartureHourFromChanged: (state, action: PayloadAction<number>) => {
      state.start_departure_hour_from = action.payload;
    },
    startDepartureHourToChanged: (state, action: PayloadAction<number>) => {
      state.start_departure_hour_to = action.payload;
    },
    startArrivalHourFromChanged: (state, action: PayloadAction<number>) => {
      state.start_arrival_hour_from = action.payload;
    },
    startArrivalHourToChanged: (state, action: PayloadAction<number>) => {
      state.start_arrival_hour_to = action.payload;
    },
    endDepartureHourFromChanged: (state, action: PayloadAction<number>) => {
      state.end_departure_hour_from = action.payload;
    },
    endDepartureHourToChanged: (state, action: PayloadAction<number>) => {
      state.end_departure_hour_to = action.payload;
    },
    endArrivalHourFromChanged: (state, action: PayloadAction<number>) => {
      state.end_arrival_hour_from = action.payload;
    },
    endArrivalHourToChanged: (state, action: PayloadAction<number>) => {
      state.end_arrival_hour_to = action.payload;
    },
    pageChanged: (state, action: PayloadAction<number>) => {
      const page = action.payload;

      if (state.limit) {
        state.offset = (page - 1) * state.limit;
      }
    },
    limitChanged: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    sortChanged: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
  },
});

export const {
  citiesChanged,
  dateStartChanged,
  dateEndChanged,
  dateStartArrivalChanged,
  dateEndArrivalChanged,
  endArrivalHourFromChanged,
  endArrivalHourToChanged,
  endDepartureHourFromChanged,
  endDepartureHourToChanged,
  haveAirConditioningChanged,
  haveFirstClassChanged,
  haveFourthClassChanged,
  haveSecondClassChanged,
  haveThirdClassChanged,
  haveWifiChanged,
  pageChanged,
  priceFromChanged,
  priceToChanged,
  startArrivalHourFromChanged,
  startArrivalHourToChanged,
  startDepartureHourFromChanged,
  startDepartureHourToChanged,
  limitChanged,
  sortChanged,
} = routesSettingsSlice.actions;

export default routesSettingsSlice;