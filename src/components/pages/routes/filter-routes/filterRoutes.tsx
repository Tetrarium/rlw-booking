import React from "react";

import Divider from "./components/divider/divider";
import FilterComfort from "./components/filter-comfort/filterComfort";
import FilterDates from "./components/filter-dates/filter-dates";
import FilterHoursEnd from "./components/filter-hours/filterHoursEnd";
import FilterHoursStart from "./components/filter-hours/filterHoursStart";
import FilterPrice from "./components/filter-price/filterPrice";
import s from "./filterRoutes.module.sass";

const FilterRoutes = () => {

  return (
    <div className={s.container}>
      <FilterDates />
      <Divider />
      <FilterComfort />
      <Divider />
      <FilterPrice />
      <Divider />
      <FilterHoursStart />
      <Divider />
      <FilterHoursEnd />
    </div>
  );
};

export default FilterRoutes;
