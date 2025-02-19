import { RootState } from "@/lib/store";
import { dateFormatFromISO, dateFormatToISO, isValidDate } from "@/lib/utils/date";
import { RoutesSettings, SortValues } from "@/types/dto";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: RoutesSettings = {
  from_city_id: '',
  to_city_id: '',
  limit: 5,
  offset: 0,
  sort: 'date',
};

type RoutesSettingsKeys = keyof RoutesSettings;

export type CitiesKeys = Extract<RoutesSettingsKeys, `${string}_city_id`>;

type CitiesParams = Pick<RoutesSettings, CitiesKeys>;

export type DateKeys = Extract<RoutesSettingsKeys, `date_${string}`>;

export type BooleanKeys = Extract<RoutesSettingsKeys, `have_${string}`>;

export type Range = [number, number];

export type RangeKeys = Extract<RoutesSettingsKeys, `${string}_from` | `${string}_to`>;

type RangePayloadMap = {
  [K in RangeKeys as K extends `${infer Prefix}_from`
  ? `${Prefix}_to` extends RangeKeys
  ? K
  : never
  : never]: {
    keyFrom: K extends `${infer Prefix}_from` ? `${Prefix}_from` : never;
    keyTo: K extends `${infer Prefix}_from` ? `${Prefix}_to` : never;
    value: Range;
  }
};

export type RangePayload = RangePayloadMap[keyof RangePayloadMap];

const createDateHandlers = <K extends DateKeys>(stateKey: K) => ({
  reducer: {
    reducer(state: RoutesSettings, action: PayloadAction<string>) {
      state[stateKey] = action.payload as RoutesSettings[K];
    },
    prepare(date: Date | null) {
      return { payload: isValidDate(date) ? dateFormatToISO(date) : '' };
    }
  },
  selector: createSelector(
    (state) => state["routes-settings"][stateKey],
    (dateString: string | undefined) => {
      if (!dateString) return null;

      const date = dateFormatFromISO(dateString);

      return isValidDate(date) ? date : null;
    }
  )
});


const dateStartHandlers = createDateHandlers('date_start');
const dateEndHandlers = createDateHandlers('date_end');
const dateStartArrivalHandlers = createDateHandlers('date_start_arrival');
const dateEndArrivalHandlers = createDateHandlers('date_end_arrival');

export const routesSettingsSlice = createSlice({
  name: 'routes-settings',
  initialState,
  reducers: {
    cityChanged: (state, action: PayloadAction<{ key: CitiesKeys, value: string; }>) => {
      state[action.payload.key] = action.payload.value;
    },
    citiesChanged: (state, action: PayloadAction<CitiesParams>) => {
      state.from_city_id = action.payload.from_city_id;
      state.to_city_id = action.payload.to_city_id;
    },

    datesChanged: (state, action: PayloadAction<{ key: DateKeys, value: string; }>) => {
      state[action.payload.key] = action.payload.value;
    },
    dateStartChanged: dateStartHandlers.reducer,
    dateEndChanged: dateEndHandlers.reducer,
    dateStartArrivalChanged: dateStartArrivalHandlers.reducer,
    dateEndArrivalChanged: dateEndArrivalHandlers.reducer,

    booleansSettingToggled: (state, action: PayloadAction<BooleanKeys>) => {
      state[action.payload] = !state[action.payload];
    },
    booleansSettingsChanged: (state, action: PayloadAction<{ key: BooleanKeys, value: boolean; }>) => {
      state[action.payload.key] = action.payload.value;
    },

    rangeSettingsChanged: (
      state: RoutesSettings,
      action: PayloadAction<RangePayload>
    ) => {
      state[action.payload.keyFrom] = action.payload.value[0];
      state[action.payload.keyTo] = action.payload.value[1];
    },
    rangeOneSettingChanged: (state, action: PayloadAction<{ key: RangeKeys, value: number | undefined; }>) => {
      state[action.payload.key] = action.payload.value;
    },

    offsetChanged: (state, action: PayloadAction<number>) => {
      state.offset = action.payload;
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
    sortChanged: (state, action: PayloadAction<SortValues>) => {
      state.sort = action.payload;
    },
  },
});

export const {
  cityChanged,
  citiesChanged,
  dateStartChanged,
  dateEndChanged,
  dateStartArrivalChanged,
  dateEndArrivalChanged,
  datesChanged,
  booleansSettingToggled,
  booleansSettingsChanged,
  rangeSettingsChanged,
  rangeOneSettingChanged,
  limitChanged,
  sortChanged,
  pageChanged,
  offsetChanged,
} = routesSettingsSlice.actions;

export default routesSettingsSlice;

export const selectAllRoutesSettings = (state: RootState) => state["routes-settings"];

export const selectDefinedRoutesSettings = createSelector(
  [selectAllRoutesSettings],
  ({ from_city_id, to_city_id, ...otherSettings }) => {
    if (!from_city_id || !to_city_id) return undefined;

    return {
      from_city_id,
      to_city_id,
      ...Object.fromEntries(
        Object.entries(otherSettings).filter(([, value]) => value !== false && value !== undefined)
      )
    } as RoutesSettings;
  }
);

export const selectQueryString = createSelector(
  [selectDefinedRoutesSettings],
  (routesSettings) => routesSettings ? new URLSearchParams(Object.entries(routesSettings)).toString() : '',
);

export const selectDateStart = dateStartHandlers.selector;
export const selectDateEnd = dateEndHandlers.selector;
export const selectDateStartArrival = dateStartArrivalHandlers.selector;
export const selectDateEndArrival = dateEndArrivalHandlers.selector;

export const selectBooleanSettings = (state: RootState) =>
  state["routes-settings"] as { [K in BooleanKeys]: boolean | undefined };
