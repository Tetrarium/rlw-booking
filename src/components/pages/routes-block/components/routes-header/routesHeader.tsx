import React, { FC } from "react";

import { SortValues } from "@/types/dto";

import s from "./routesHeader.module.sass";

type SortOptions = {
  [key in SortValues]: string;
};

const sortOptions: SortOptions = {
  date: 'времени',
  price: 'цене',
  duration: 'длительности',
};

const renderedOptions = Object.entries(sortOptions).map(([key, value]) => {
  return (
    <option className={s.option} key={key} value={key}>{value}</option>
  );
});

interface RoutesHeaderProps {
  count: number;
}

const RoutesHeader: FC<RoutesHeaderProps> = ({ count }) => {
  return (
    <header className={s.container}>
      <div className={s.finded}>
        найдено: {count}
      </div>
      <div className={s.sort}>
        сортировать по <select className={s.select}>{renderedOptions}</select>
      </div>
      <div className={s.showed}>
        показывать по <span className={s.showedNums}>
          <label className={s.showedNum}>
            <input type="radio" name="showed-num" value={5} />
            <span>5</span>
          </label>
          <label className={s.showedNum}>
            <input type="radio" name="showed-num" value={10} />
            <span>10</span>
          </label>
          <label className={s.showedNum}>
            <input type="radio" name="showed-num" value={20} />
            <span>20</span>
          </label>
        </span>
      </div>
    </header>
  );
};

export default RoutesHeader;