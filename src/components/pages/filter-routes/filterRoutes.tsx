import React from "react";

import FilterComfort from "./components/filter-comfort/filterComfort";
import FilterDates from "./components/filter-dates/filter-dates";
import FilterHoursEnd from "./components/filter-hours/filterHoursEnd";
import FilterHoursStart from "./components/filter-hours/filterHoursStart";
import FilterPrice from "./components/filter-price/filterPrice";
import s from "./filterRoutes.module.sass";
import { useRedirectOnSettingsChanged } from "./hooks/useRedirectOnSettingsChanged";

const FilterRoutes = () => {
  useRedirectOnSettingsChanged();

  return (
    <div className={s.container}>
      <FilterDates />
      <FilterComfort />
      <FilterPrice />
      <FilterHoursStart />
      <FilterHoursEnd />
    </div>
  );
};

export default FilterRoutes;
