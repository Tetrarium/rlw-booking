import React, { useCallback, useMemo } from "react";

import { rangeSettingsChanged } from "@/lib/features/routes/routesSettingsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import FilterHours from "./filterHours";
import HoursPickerAccordion from "./hours-picker-accordion/hoursPickerAccordion";
import ForwardIcon from "./icons/forwardIcon";

type Range = [number, number];

const FilterHoursStart = () => {
  const dispatch = useAppDispatch();

  const {
    start_departure_hour_from: departureFrom,
    start_departure_hour_to: departureTo,
    start_arrival_hour_from: arrivalFrom,
    start_arrival_hour_to: arrivalTo,
  } = useAppSelector(state => state["routes-settings"]);

  const departureRange = useMemo(
    () => [departureFrom ?? 0, departureTo ?? 24] as Range,
    [departureFrom, departureTo]
  );

  const arrivalRange = useMemo(
    () => [arrivalFrom ?? 0, arrivalTo ?? 24] as Range,
    [arrivalFrom, arrivalTo]
  );

  const handleDepartureHoursRangeChanged = useCallback(
    (value: [number, number]) => {
      dispatch(rangeSettingsChanged({
        keyFrom: "start_departure_hour_from",
        keyTo: "start_departure_hour_to",
        value: value
      }));
    },
    [dispatch]
  );

  const handleArrivalHoursRangeChanged = useCallback(
    (value: [number, number]) => {
      dispatch(rangeSettingsChanged({
        keyFrom: "start_arrival_hour_from",
        keyTo: "start_arrival_hour_to",
        value: value
      }));
    },
    [dispatch]
  );

  return (
    <FilterHours>
      <HoursPickerAccordion
        icon={<ForwardIcon />}
        title='Туда'
        departureHoursRange={departureRange}
        arrivalHoursRange={arrivalRange}
        onChangeDepartureHoursRange={handleDepartureHoursRangeChanged}
        onChangeArrivalHoursRange={handleArrivalHoursRangeChanged}
      />
    </FilterHours>
  );
};

export default FilterHoursStart;