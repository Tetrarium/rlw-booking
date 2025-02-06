import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

import {
    dateEndArrivalChanged, dateStartArrivalChanged, rangeSettingsChanged, selectDateEndArrival,
    selectDateStartArrival, selectQueryString
} from "@/lib/features/routes/routesSettingsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Calendar from "@/UI/calendar/calendar";

import HoursPickerAccordion from "../hours-picker-accordion/hoursPickerAccordion";
import FilterComfort from "./components/filter-comfort/filterComfort";
import FilterPrice from "./components/filter-price/filterPrice";
import s from "./filterRoutes.module.sass";
import BackwardIcon from "./icons/backwardIcon";
import ForwardIcon from "./icons/forwardIcon";

const FilterRoutes = () => {
  const dispatch = useAppDispatch();

  const dateStartArrival = useAppSelector(selectDateStartArrival);
  const dateEndArrival = useAppSelector(selectDateEndArrival);


  const startDepartureHoursFrom = useAppSelector(state => state["routes-settings"].start_departure_hour_from);
  const startDepartureHoursTo = useAppSelector(state => state["routes-settings"].start_departure_hour_to);
  const startArrivalHoursFrom = useAppSelector(state => state["routes-settings"].start_arrival_hour_from);
  const startArrivalHoursTo = useAppSelector(state => state["routes-settings"].start_arrival_hour_to);
  const endDepartureHoursFrom = useAppSelector(state => state["routes-settings"].end_departure_hour_from);
  const endDepartureHoursTo = useAppSelector(state => state["routes-settings"].end_departure_hour_to);
  const endArrivalHoursFrom = useAppSelector(state => state["routes-settings"].end_arrival_hour_from);
  const endArrivalHoursTo = useAppSelector(state => state["routes-settings"].end_arrival_hour_to);


  const router = useRouter();
  const params = useSearchParams();
  const queryString = useAppSelector(selectQueryString);

  const ref = useRef(params.toString());

  useEffect(() => {
    if (ref.current !== queryString) {
      router.push({
        pathname: router.pathname,
        query: queryString
      }, undefined, { shallow: true });

      ref.current = queryString;
    }

  }, [queryString, router]);

  return (
    <div className={s.container}>
      <div className={s.dates}>
        <div className={s.datesRow}>
          <h3 className={s.label}>Дата поездки</h3>
          <Calendar
            value={dateStartArrival}
            onChange={(date) => dispatch(dateStartArrivalChanged(date))}
          />
        </div>
        <div className={s.datesRow}>
          <h3 className={s.label}>Дата возвращения</h3>
          <Calendar
            value={dateEndArrival}
            onChange={(date) => dispatch(dateEndArrivalChanged(date))}
          />
        </div>
      </div>
      <FilterComfort />
      <FilterPrice />
      <div className={s.timePicker}>
        <HoursPickerAccordion
          icon={<ForwardIcon />}
          title="Туда"
          departureHoursRange={[startDepartureHoursFrom ?? 0, startDepartureHoursTo ?? 24]}
          arrivalHoursRange={[startArrivalHoursFrom ?? 0, startArrivalHoursTo ?? 24]}
          onChangeDepartureHoursRange={(values) => {
            dispatch(
              rangeSettingsChanged({
                keyFrom: "start_departure_hour_from",
                keyTo: "start_departure_hour_to",
                value: values
              })
            );
          }}
          onChangeArrivalHoursRange={(values) => {
            dispatch(
              rangeSettingsChanged({
                keyFrom: "start_arrival_hour_from",
                keyTo: "start_arrival_hour_to",
                value: values
              })
            );
          }}
        />
      </div>
      <div className={s.timePicker}>
        <HoursPickerAccordion
          icon={<BackwardIcon />}
          title="Обратно"
          departureHoursRange={[endDepartureHoursFrom ?? 0, endDepartureHoursTo ?? 24]}
          arrivalHoursRange={[endArrivalHoursFrom ?? 0, endArrivalHoursTo ?? 24]}
          onChangeDepartureHoursRange={(values) => {
            dispatch(
              rangeSettingsChanged({
                keyFrom: "end_departure_hour_from",
                keyTo: "end_departure_hour_to",
                value: values
              })
            );
          }}
          onChangeArrivalHoursRange={(values) => {
            dispatch(
              rangeSettingsChanged({
                keyFrom: "end_arrival_hour_from",
                keyTo: "end_arrival_hour_to",
                value: values
              })
            );
          }}
        />
      </div>
    </div>
  );
};

export default FilterRoutes;
