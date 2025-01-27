import React, { FC, ReactNode } from "react";

import Calendar from "@/UI/calendar/calendar";

import s from "./filterRoutesForm.module.sass";

const FilterRoutesForm = () => {
  return (
    <form className={s.form}>
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
          icon={<div />}
          name="Кровать"
          value={true}
          onChange={() => { }}
        />
        <ComfortRow
          icon={<div />}
          name="Кровать"
          value={true}
          onChange={() => { }}
        />
        <ComfortRow
          icon={<div />}
          name="Кровать"
          value={true}
          onChange={() => { }}
        />
        <ComfortRow
          icon={<div />}
          name="Кровать"
          value={true}
          onChange={() => { }}
        />
        <ComfortRow
          icon={<div />}
          name="Кровать"
          value={true}
          onChange={() => { }}
        />
        <ComfortRow
          icon={<div />}
          name="Кровать"
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

const ComfortRow: FC<ComfortRowProps> = ({ icon, name, value, onChange }) => {
  return (
    <div className={s.comfortRow}>
      <div className={s.comfortRow__icon}>
        {icon}
      </div>
      <div className={s.comfortRow__name}>
        {name}
      </div>
      <div className={s.comfortRow__checkbox}>
        <input type="checkbox" checked={value} onChange={onChange} />
      </div>
    </div>
  );
};