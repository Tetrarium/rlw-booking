import React, { FC } from "react";

import { limitChanged, sortChanged } from "@/lib/features/routes/routesSettingsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
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

const limits = [5, 10, 20];

const RoutesHeader: FC<RoutesHeaderProps> = ({ count }) => {
  const dispatch = useAppDispatch();
  const sortBy = useAppSelector(state => state["routes-settings"].sort);

  return (
    <header className={s.container}>
      <div className={s.finded}>
        найдено: {count}
      </div>
      <div className={s.sort}>
        сортировать по
        {' '}
        <select
          className={s.select}
          name="sort"
          value={sortBy}
          onChange={e => dispatch(sortChanged(e.target.value as SortValues))}
        >{renderedOptions}</select>
      </div>
      <div className={s.showed}>
        показывать по <span className={s.showedNums}>
          {limits.map(limit => <LimitRadio key={limit} limit={limit} />)}
        </span>
      </div>
    </header>
  );
};

export default RoutesHeader;

const LimitRadio: FC<{ limit: number; }> = ({ limit }) => {
  const dispatch = useAppDispatch();
  const current = useAppSelector(state => state["routes-settings"].limit);

  return (
    <label className={s.showedNum}>
      <input
        type="radio"
        name="limit"
        value={limit}
        checked={current === limit}
        onChange={e => {
          if (e.target.checked) {
            dispatch(limitChanged(limit));
          }
        }}
      />
      <span>{limit}</span>
    </label>
  );
};