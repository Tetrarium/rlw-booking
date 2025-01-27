import { useRouter } from "next/router";
import { ParsedUrlQueryInput } from "querystring";
import React, { FormEvent, useCallback } from "react";

import CitySearchField from "@/components/shared/CitySearchField/CitySearchField";
import { changeDepartureCity, changeDestinationCity } from "@/lib/features/routes/locationsSlice";
import {
    dateEndChanged, dateStartChanged, selectDateEnd, selectDateStart, selectDefinedRoutesSettings
} from "@/lib/features/routes/routesSettingsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import FindButton from "@/UI/buttons/findButton";
import SwapLocationsButton from "@/UI/buttons/swapLocationsButton";
import Calendar from "@/UI/calendar/calendar";

import s from "./searchRoutesForm.module.sass";

const SearchRoutesForm = () => {
  const { departure, destination } = useAppSelector(state => state.locations);
  const dispatch = useAppDispatch();
  const dateStart = useAppSelector(selectDateStart);
  const dateEnd = useAppSelector(selectDateEnd);

  // TODO: Для оптимизации нужно будет добавить сравнение
  // с предыдущим запросом, чтобы не делать лишний запрос
  const routesSettings = useAppSelector(selectDefinedRoutesSettings);

  const router = useRouter();

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!routesSettings) return;

    router.push({
      pathname: "/routes",
      query: routesSettings as unknown as ParsedUrlQueryInput,
    });
  }, [router, routesSettings]);

  const handleChangeDateStart = useCallback((date: Date | null) => {
    dispatch(dateStartChanged(date));
  }, [dispatch]);

  const handleChangeDateEnd = useCallback((date: Date | null) => {
    dispatch(dateEndChanged(date));
  }, [dispatch]);

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.row}>
        <div className={s.blocks}>
          <div className={s.block}>
            <div className={s.label}>Направление</div>
            <div className={s.inputs}>
              <div className={s.input}>
                <CitySearchField
                  key={departure._id}
                  label='Откуда'
                  city={departure}
                  onSelect={(_id, name) => dispatch(changeDepartureCity({ _id, name }))}
                />
              </div>
              <div className={s.btnPlace}>
                <SwapLocationsButton />
              </div>
              <div className={s.input}>
                <CitySearchField
                  key={destination._id}
                  label='Куда'
                  city={destination}
                  onSelect={(_id, name) => dispatch(changeDestinationCity({ _id, name }))}
                />
              </div>
            </div>
            <div className={s.block}></div>
          </div>
          <div className={s.block}>
            <div className={s.label}>Дата</div>
            <div className={s.inputs}>
              <div className={s.input}>
                <Calendar
                  value={dateStart}
                  onChange={handleChangeDateStart}
                  maxDate={dateEnd || undefined}
                />
              </div>
              <div className={s.btnPlace} />
              <div className={s.input}>
                <Calendar
                  value={dateEnd}
                  onChange={handleChangeDateEnd}
                  minDate={dateStart || undefined}
                />
              </div>
            </div>
            <div className={s.block}></div>
          </div>
        </div>
      </div>
      <div className={s.row}>
        <div className={s.send}>
          <div className={s.field}>
            <FindButton type="submit" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchRoutesForm;