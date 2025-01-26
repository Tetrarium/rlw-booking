import { useRouter } from "next/router";
import { ParsedUrlQueryInput } from "querystring";
import React, { useCallback } from "react";

import { changeDepartureCity, changeDestinationCity } from "@/lib/features/routes/locationsSlice";
import {
    dateEndChanged, dateStartChanged, selectDateEnd, selectDateStart, selectDefinedRoutesSettings
} from "@/lib/features/routes/routesSettingsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import FindButton from "@/UI/buttons/findButton";
import SwapLocationsButton from "@/UI/buttons/swapLocationsButton";
import Calendar from "@/UI/calendar/calendar";

import CitySearchField from "../../shared/CitySearchField/CitySearchField";
import s from "./searchForm.module.sass";

const SearchForm = () => {
  const { departure, destination } = useAppSelector(state => state.locations);
  const dateStart = useAppSelector(selectDateStart);
  const dateEnd = useAppSelector(selectDateEnd);
  const dispatch = useAppDispatch();

  const router = useRouter();

  const routesSettings = useAppSelector(selectDefinedRoutesSettings);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!routesSettings) return;

    router.push({
      pathname: "/routes",
      query: routesSettings as unknown as ParsedUrlQueryInput
    });
  }, [router, routesSettings]);

  const handleChangeDateStart = useCallback((date: Date | null) => {
    dispatch(dateStartChanged(date));
  }, [dispatch]);

  const handleChangeDateEnd = useCallback((date: Date | null) => {
    dispatch(dateEndChanged(date));
  }, [dispatch]);

  return (
    <form className={s.search} onSubmit={handleSubmit}>
      <div className={s.row}>
        <div className={s.label}>
          Направление
        </div>
        <div className={s.fields}>
          <div className={s.field}>
            <CitySearchField
              key={departure._id}
              label="Откуда"
              city={departure}
              onSelect={(_id, name) => dispatch(changeDepartureCity({ _id, name }))}
            />
          </div>
          <div className={s.btn__place}>
            <SwapLocationsButton />
          </div>
          <div className={s.field}>
            <CitySearchField
              key={destination._id}
              label="Куда"
              city={destination}
              onSelect={(_id, name) => dispatch(changeDestinationCity({ _id, name }))}
            />
          </div>
        </div>
      </div>
      <div className={s.row}>
        <div className={s.label}>
          Дата
        </div>
        <div className={s.fields}>
          <div className={s.field}>
            <Calendar
              value={dateStart}
              onChange={handleChangeDateStart}
              maxDate={dateEnd || undefined}
            />
          </div>
          <div className={s.btn__place} />
          <div className={s.field}>
            <Calendar
              value={dateEnd}
              onChange={handleChangeDateEnd}
              minDate={dateStart || undefined}
            />
          </div>
        </div>
      </div>
      <div className={s.row}>
        <div className={s.sendForm}>
          <div className={s.field}>
            <FindButton disabled={!routesSettings} type="submit" sx={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
