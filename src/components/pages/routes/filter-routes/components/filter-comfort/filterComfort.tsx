import React, { useCallback } from "react";

import {
    BooleanKeys, booleansSettingToggled, selectBooleanSettings
} from "@/lib/features/routes/routesSettingsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import { comfortOptions } from "./comfortOptions";
import FilterComfortItem from "./filter-comfort-item/filterComfortItem";
import s from "./filterComfort.module.sass";

const FilterComfort = () => {
  const dispatch = useAppDispatch();
  const booleanSettings = useAppSelector(selectBooleanSettings);

  const handleToggle = useCallback(
    (key: BooleanKeys) => () => dispatch(booleansSettingToggled(key)),
    [dispatch],
  );

  return (
    <div className={s.comfort}>
      {comfortOptions.map(({ key, name, icon }) => (
        <FilterComfortItem
          key={key}
          name={name}
          icon={icon}
          checked={booleanSettings[key]}
          onChange={handleToggle(key)}
        />
      ))}
    </div>
  );
};

export default FilterComfort;