import React from "react";

import ExpressIcon from "@/components/shared/icons/expressIcon";
import TrainFirstClassIcon from "@/components/shared/icons/trainFirstClassIcon";
import TrainFourthClassIcon from "@/components/shared/icons/trainFourthClassIcon";
import TrainSecondIcon from "@/components/shared/icons/trainSecondClassIcon";
import TrainThirdClassIcon from "@/components/shared/icons/trainThirdClassIcon";
import WiFiIcon from "@/components/shared/icons/wifiIcon";
import {
    booleansSettingToggled, dateEndArrivalChanged, dateStartArrivalChanged, rangeSettingsChanged,
    selectBooleanSettings, selectDateEndArrival, selectDateStartArrival
} from "@/lib/features/routes/routesSettingsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Calendar from "@/UI/calendar/calendar";

import HoursPickerAccordion from "../hours-picker-accordion/hoursPickerAccordion";
import PriceRange from "../price-range/priceRange";
import FilterComfortItem from "./filterComfortItem";
import s from "./filterRoutes.module.sass";
import BackwardIcon from "./icons/backwardIcon";
import ForwardIcon from "./icons/forwardIcon";

const FilterRoutes = () => {
  const dispatch = useAppDispatch();
  const dateStartArrival = useAppSelector(selectDateStartArrival);
  const dateEndArrival = useAppSelector(selectDateEndArrival);
  const booleanSettings = useAppSelector(selectBooleanSettings);
  const priceFrom = useAppSelector(state => state["routes-settings"].price_from);
  const priceTo = useAppSelector(state => state["routes-settings"].price_to);
  const startDepartureHoursFrom = useAppSelector(state => state["routes-settings"].start_departure_hour_from);
  const startDepartureHoursTo = useAppSelector(state => state["routes-settings"].start_departure_hour_to);
  const startArrivalHoursFrom = useAppSelector(state => state["routes-settings"].start_arrival_hour_from);
  const startArrivalHoursTo = useAppSelector(state => state["routes-settings"].start_arrival_hour_to);
  const endDepartureHoursFrom = useAppSelector(state => state["routes-settings"].end_departure_hour_from);
  const endDepartureHoursTo = useAppSelector(state => state["routes-settings"].end_departure_hour_to);
  const endArrivalHoursFrom = useAppSelector(state => state["routes-settings"].end_arrival_hour_from);
  const endArrivalHoursTo = useAppSelector(state => state["routes-settings"].end_arrival_hour_to);


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
      <div className={s.comfort}>
        <div className={s.comfortRow}>
          <FilterComfortItem
            icon={<TrainSecondIcon />}
            name="Купе"
            checked={booleanSettings.have_second_class}
            onChange={() => dispatch(booleansSettingToggled("have_second_class"))}
          />
        </div>
        <div className={s.comfortRow}>
          <FilterComfortItem
            icon={<TrainThirdClassIcon />}
            name="Плацкарт"
            checked={booleanSettings.have_third_class}
            onChange={() => dispatch(booleansSettingToggled("have_third_class"))}
          />
        </div>
        <div className={s.comfortRow}>
          <FilterComfortItem
            icon={<TrainFourthClassIcon />}
            name="Сидячий"
            checked={booleanSettings.have_fourth_class}
            onChange={() => dispatch(booleansSettingToggled("have_fourth_class"))}
          />
        </div>
        <div className={s.comfortRow}>
          <FilterComfortItem
            icon={<TrainFirstClassIcon />}
            name="Люкс"
            checked={booleanSettings.have_first_class}
            onChange={() => dispatch(booleansSettingToggled("have_first_class"))}
          />
        </div>
        <div className={s.comfortRow}>
          <FilterComfortItem
            icon={<WiFiIcon />}
            name="Wi-Fi"
            checked={booleanSettings.have_wifi}
            onChange={() => dispatch(booleansSettingToggled("have_wifi"))}
          />
        </div>
        <div className={s.comfortRow}>
          <FilterComfortItem
            icon={<ExpressIcon />}
            name="Экспресс"
            checked={booleanSettings.have_express}
            onChange={() => dispatch(booleansSettingToggled("have_express"))}
          />
        </div>
      </div>
      <div className={s.pricesRange}>
        <label className={s.label}>Стоимость</label>
        <div className={s.priceRange}>
          <PriceRange
            values={[priceFrom ?? 0, priceTo ?? 10000]}
            min={0}
            max={10000}
            onChange={(values) => {
              dispatch(
                rangeSettingsChanged({
                  keyFrom: "price_from",
                  keyTo: "price_to",
                  value: values
                })
              );
            }}
          />
        </div>
      </div>
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
