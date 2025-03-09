import React, { useCallback, useMemo } from "react";

import { Range, rangeSettingsChanged } from "@/lib/features/routes/routesSettingsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import FilterHours from "./filterHours";
import HoursPickerAccordion from "./hours-picker-accordion/hoursPickerAccordion";
import BackwardIcon from "./icons/backwardIcon";

const FilterHoursEnd = () => {
  const dispatch = useAppDispatch();

  const {
    end_departure_hour_from: departureFrom,
    end_departure_hour_to: departureTo,
    end_arrival_hour_from: arrivalFrom,
    end_arrival_hour_to: arrivalTo,
  } = useAppSelector(state => state["routes-settings"]);

  const departureRange = useMemo(
    () => [departureFrom ?? 0, departureTo ?? 24] as Range,
    [departureFrom, departureTo]
  );

  const arrivalRange = useMemo(
    () => [arrivalFrom ?? 0, arrivalTo ?? 24] as Range,
    [arrivalFrom, arrivalTo]
  );

  const handleDepartureRangeChanged = useCallback(
    (value: Range) => {
      dispatch(rangeSettingsChanged({
        keyFrom: "end_departure_hour_from",
        keyTo: "end_departure_hour_to",
        value: value
      }));
    },
    [dispatch]
  );

  const handleArrivalRangeChanged = useCallback(
    (value: Range) => {
      dispatch(rangeSettingsChanged({
        keyFrom: "end_arrival_hour_from",
        keyTo: "end_arrival_hour_to",
        value: value
      }));
    },
    [dispatch],
  );

  return (
    <FilterHours>
      <HoursPickerAccordion
        icon={<BackwardIcon />}
        title='Обратно'
        departureHoursRange={departureRange}
        arrivalHoursRange={arrivalRange}
        onChangeDepartureHoursRange={handleDepartureRangeChanged}
        onChangeArrivalHoursRange={handleArrivalRangeChanged}
      />
    </FilterHours>
  );
};

export default FilterHoursEnd;