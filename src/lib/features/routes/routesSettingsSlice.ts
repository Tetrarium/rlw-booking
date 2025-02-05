import { RootState } from "@/lib/store";
import { dateFormatFromISO, dateFormatToISO, isValidDate } from "@/lib/utils/date";
import { RoutesSettings } from "@/types/dto";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: RoutesSettings = {
  from_city_id: '',
  to_city_id: '',
  limit: 5,
};

type RoutesSettingsKeys = keyof RoutesSettings;

type CitiesParams = Pick<RoutesSettings, 'from_city_id' | 'to_city_id'>;

type DateKeys = Extract<keyof RoutesSettings, 'date_start' | 'date_end' | 'date_start_arrival' | 'date_end_arrival'>;

type BooleanKeys = Extract<
  RoutesSettingsKeys,
  'have_first_class'
  | 'have_second_class'
  | 'have_third_class'
  | 'have_fourth_class'
  | 'have_wifi'
  | 'have_air_conditioning'
>;

type FromKeys<T extends string> = T extends `${string}_from` ? T : never;

type RangeKeysMap = {
  [K in FromKeys<RoutesSettingsKeys>]: `${K extends `${infer Prefix}_from` ? `${Prefix}_to` : never}`
};

// type ValidRangeKeyFrom<T extends string> = T extends keyof RangeKeysMap ? T : never;
// type ValidRangeKeyTo<T extends string> = T extends keyof RangeKeysMap ? RangeKeysMap[T] : never;

type RangeKeyFrom = keyof RangeKeysMap;
type RangeKeyTo<T extends RangeKeyFrom> = RangeKeysMap[T];
// type RangeKeyFrom = ValidRangeKeyFrom<RoutesSettingsKeys>;
// type RangeKeyTo<T extends RangeKeyFrom> = ValidRangeKeyTo<T>;

const createDateReducer = <K extends DateKeys>(stateKey: K) => ({
  reducer(state: RoutesSettings, action: PayloadAction<string>) {
    state[stateKey] = action.payload as RoutesSettings[K];
  },
  prepare(date: Date | null) {

    const dateISO = isValidDate(date)
      ? dateFormatToISO(date)
      : '';

    return { payload: dateISO };
  },
});

const createDateSelector = <K extends DateKeys>(stateKey: K) =>
  createSelector(
    (state: RootState) => state["routes-settings"][stateKey],
    (dateString: string | undefined) => {
      if (!dateString) return null;

      const date = dateFormatFromISO(dateString);

      return isValidDate(date) ? date : null;
    }
  );

export const routesSettingsSlice = createSlice({
  name: 'routes-settings',
  initialState,
  reducers: {
    citiesChanged: (state, action: PayloadAction<CitiesParams>) => {
      state.from_city_id = action.payload.from_city_id;
      state.to_city_id = action.payload.to_city_id;
    },
    dateStartChanged: createDateReducer('date_start'),
    dateEndChanged: createDateReducer('date_end'),
    dateStartArrivalChanged: createDateReducer('date_start_arrival'),
    dateEndArrivalChanged: createDateReducer('date_end_arrival'),

    // booleans
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

    booleansSettingChanged: (state, action: PayloadAction<{ key: BooleanKeys, value: boolean; }>) => {
      state[action.payload.key] = action.payload.value;
    },

    // range
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

    rangeSettingsChanged: <T extends RangeKeyFrom>(
      state: RoutesSettings,
      action: PayloadAction<{ keyFrom: T; keyTo: RangeKeyTo<T>; value: [number, number]; }>
    ) => {
      state[action.payload.keyFrom] = action.payload.value[0];
      state[action.payload.keyTo] = action.payload.value[1];
    },

    // pagination
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
  rangeSettingsChanged,
  limitChanged,
  sortChanged,
} = routesSettingsSlice.actions;

export default routesSettingsSlice;

export const selectAllRoutesSettings = (state: RootState) => state["routes-settings"];

export const selectDefinedRoutesSettings = createSelector(
  [selectAllRoutesSettings],
  (allRoutesSettings) => {
    const { from_city_id, to_city_id, ...otherSettings } = allRoutesSettings;

    if (from_city_id === '' || to_city_id === '') {
      return undefined;
    }

    type Value = string | number | boolean | null | undefined;

    const definedSettings = (Object.entries(otherSettings) as [string, Value][])
      .reduce((acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }

        return acc;
      }, { from_city_id, to_city_id } as { [key: string]: Value; });

    return definedSettings as unknown as RoutesSettings;
  }
);

export const selectDateStart = createDateSelector('date_start');
export const selectDateEnd = createDateSelector('date_end');
export const selectDateStartArrival = createDateSelector('date_start_arrival');
export const selectDateEndArrival = createDateSelector('date_end_arrival');
