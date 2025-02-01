import React, { FC, ReactNode } from "react";

import ExpressIcon from "@/components/shared/icons/expressIcon";
import TrainFirstClassIcon from "@/components/shared/icons/trainFirstClassIcon";
import TrainFourthClassIcon from "@/components/shared/icons/trainFourthClassIcon";
import TrainSecondIcon from "@/components/shared/icons/trainSecondClassIcon";
import TrainThirdClassIcon from "@/components/shared/icons/trainThirdClassIcon";
import WiFiIcon from "@/components/shared/icons/wifiIcon";
import Calendar from "@/UI/calendar/calendar";
import FilterSwitch from "@/UI/switchers/filterSwitch";

import s from "./filterRoutesForm.module.sass";

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
        <ComfortRow
          icon={<TrainSecondIcon />}
          name="Купе"
          value={true}
          onChange={() => { }}
        />
        <ComfortRow
          icon={<TrainThirdClassIcon />}
          name="Плацкарт"
          value={true}
          onChange={() => { }}
        />
        <ComfortRow
          icon={<TrainFourthClassIcon />}
          name="Сидячий"
          value={true}
          onChange={() => { }}
        />
        <ComfortRow
          icon={<TrainFirstClassIcon />}
          name="Люкс"
          value={true}
          onChange={() => { }}
        />
        <ComfortRow
          icon={<WiFiIcon />}
          name="Wi-Fi"
          value={true}
          onChange={() => { }}
        />
        <ComfortRow
          icon={<ExpressIcon />}
          name="Экспресс"
          value={true}
          onChange={() => { }}
        />
      </div>
      <div className={s.pricesRange}>
        <label className={s.label}>Стоимость</label>
        <div>price range component</div>
      </div>
      <div className={s.direction}>
        <div className={s.directionHeader}>
          <div className={s.directionIcon}>Icon</div>
          <h3 className={s.directionTitle}>Туда</h3>
          <button className={s.directionToggle}>Toggle</button>
        </div>
        <div className={s.directionBody}>
          <div className={s.directionRow}>
            <h4 className={s.directionLabelLeave}>Время отбытия</h4>
            <div>time range component</div>
          </div>
          <div className={s.directionRow}>
            <h4 className={s.directionLabelArrive}>Время отбытия</h4>
            <div>time range component</div>
          </div>
        </div>
      </div>
      <div className={s.direction}>
        <div className={s.directionHeader}>
          <div className={s.directionIcon}>Icon</div>
          <h3 className={s.directionTitle}>Обратно</h3>
          <button className={s.directionToggle}>Toggle</button>
        </div>
        <div className={s.directionBody}>
          <div className={s.directionRow}>
            <h4 className={s.directionLabelLeave}>Время отбытия</h4>
            <div>time range component</div>
          </div>
          <div className={s.directionRow}>
            <h4 className={s.directionLabelArrive}>Время отбытия</h4>
            <div>time range component</div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FilterRoutesForm;

interface ComfortRowProps {
  icon: ReactNode;
  name: string;
  value: boolean;
  onChange: () => void;
}

const ComfortRow: FC<ComfortRowProps> = ({ icon, name }) => {
  return (
    <div className={s.comfortRow}>
      <div className={s.comfortRowIcon}>
        {icon}
      </div>
      <div className={s.comfortRowName}>
        {name}
      </div>
      <div className={s.comfortRowCheckbox}>
        <FilterSwitch />
      </div>
    </div>
  );
};