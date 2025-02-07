import React, { useCallback } from "react";

import {
    dateEndArrivalChanged, dateStartArrivalChanged, selectDateEndArrival, selectDateStartArrival
} from "@/lib/features/routes/routesSettingsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Calendar from "@/UI/calendar/calendar";

import s from "./filter-dates.module.sass";

const FilterDates = () => {
  const dispatch = useAppDispatch();

  const dateStartArrival = useAppSelector(selectDateStartArrival);
  const dateEndArrival = useAppSelector(selectDateEndArrival);

  const handleDateStartChange = useCallback((date: Date | null) => {
    dispatch(dateStartArrivalChanged(date));
  }, [dispatch]);

  const handleDateEndChange = useCallback((date: Date | null) => {
    dispatch(dateEndArrivalChanged(date));
  }, [dispatch]);

  return (
    <div className={s.dates}>
      <div className={s.row}>
        <h3 className={s.label}>Дата поездки</h3>
        <Calendar
          value={dateStartArrival}
          onChange={handleDateStartChange}
        />
      </div>
      <div className={s.row}>
        <h3 className={s.label}>Дата возвращения</h3>
        <Calendar
          value={dateEndArrival}
          onChange={handleDateEndChange}
        />
      </div>
    </div>
  );
};

export default FilterDates;