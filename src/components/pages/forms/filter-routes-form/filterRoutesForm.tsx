import React from "react";

import ExpressIcon from "@/components/shared/icons/expressIcon";
import TrainFirstClassIcon from "@/components/shared/icons/trainFirstClassIcon";
import TrainFourthClassIcon from "@/components/shared/icons/trainFourthClassIcon";
import TrainSecondIcon from "@/components/shared/icons/trainSecondClassIcon";
import TrainThirdClassIcon from "@/components/shared/icons/trainThirdClassIcon";
import WiFiIcon from "@/components/shared/icons/wifiIcon";
import Calendar from "@/UI/calendar/calendar";

import HoursPickerAccordion from "../../hours-picker-accordion/hoursPickerAccordion";
import PriceRange from "../../price-range/priceRange";
import FilterComfortItem from "./filterComfortItem";
import s from "./filterRoutesForm.module.sass";
import BackwardIcon from "./icons/backwardIcon";
import ForwardIcon from "./icons/forwardIcon";

const FilterRoutesForm = () => {
  return (
    <form className={s.container}>
      <div className={s.dates}>
        <div className={s.datesRow}>
          <h3 className={s.label}>Дата поездки</h3>
          <Calendar />
        </div>
        <div className={s.datesRow}>
          <h3 className={s.label}>Дата возвращения</h3>
          <Calendar />
        </div>
      </div>
      <div className={s.comfort}>
        <div className={s.comfortRow}>
          <FilterComfortItem
            icon={<TrainSecondIcon />}
            name="Купе"
          />
        </div>
        <div className={s.comfortRow}>
          <FilterComfortItem
            icon={<TrainThirdClassIcon />}
            name="Плацкарт"
          />
        </div>
        <div className={s.comfortRow}>
          <FilterComfortItem
            icon={<TrainFourthClassIcon />}
            name="Сидячий"
          />
        </div>
        <div className={s.comfortRow}>
          <FilterComfortItem
            icon={<TrainFirstClassIcon />}
            name="Люкс"
          />
        </div>
        <div className={s.comfortRow}>
          <FilterComfortItem
            icon={<WiFiIcon />}
            name="Wi-Fi"
          />
        </div>
        <div className={s.comfortRow}>
          <FilterComfortItem
            icon={<ExpressIcon />}
            name="Экспресс"
          />
        </div>
      </div>
      <div className={s.pricesRange}>
        <label className={s.label}>Стоимость</label>
        <div className={s.priceRange}>
          <PriceRange />
        </div>
      </div>
      <div className={s.timePicker}>
        <HoursPickerAccordion
          icon={<ForwardIcon />}
          title="Туда"
        />
      </div>
      <div className={s.timePicker}>
        <HoursPickerAccordion
          icon={<BackwardIcon />}
          title="Обратно"
        />
      </div>
    </form>
  );
};

export default FilterRoutesForm;
