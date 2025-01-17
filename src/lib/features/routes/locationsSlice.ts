import { AppStartListening } from "@/lib/listenerMiddleware";
import { City } from "@/types/models";
import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";

import { citiesChanged } from "./routesSettingsSlice";

interface LocationState {
  departure: City;
  destination: City;
}

const initialCity: City = {
  _id: '',
  name: '',
};

const initialState: LocationState = {
  departure: initialCity,
  destination: initialCity,
};

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    changeDepartureCity(state, action: PayloadAction<City>) {
      state.departure = action.payload;
      return state;
    },
    changeDestinationCity(state, action: PayloadAction<City>) {
      state.destination = action.payload;
      return state;
    },
    reverseLocations(state) {
      [state.departure, state.destination] = [state.destination, state.departure];
      return state;
    }
  },
});

export default locationsSlice;

export const { changeDepartureCity, changeDestinationCity, reverseLocations } = locationsSlice.actions;

export const addLocationsListeners = (startAppListening: AppStartListening) => {
  startAppListening({
    matcher: isAnyOf(changeDepartureCity, changeDestinationCity, reverseLocations),
    effect: (_action, listenerApi) => {
      const { departure, destination } = listenerApi.getState().locations;

      listenerApi.dispatch(citiesChanged({ from_city_id: departure._id, to_city_id: destination._id }));
    }
  });
};