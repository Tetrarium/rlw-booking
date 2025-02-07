import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

import { selectQueryString } from "@/lib/features/routes/routesSettingsSlice";
import { useAppSelector } from "@/lib/hooks";

import FilterComfort from "./components/filter-comfort/filterComfort";
import FilterDates from "./components/filter-dates/filter-dates";
import FilterHoursEnd from "./components/filter-hours/filterHoursEnd";
import FilterHoursStart from "./components/filter-hours/filterHoursStart";
import FilterPrice from "./components/filter-price/filterPrice";
import s from "./filterRoutes.module.sass";

const FilterRoutes = () => {
  const router = useRouter();
  const params = useSearchParams();
  const queryString = useAppSelector(selectQueryString);

  const ref = useRef(params.toString());

  useEffect(() => {
    if (ref.current !== queryString) {
      router.push({
        pathname: router.pathname,
        query: queryString
      }, undefined, { shallow: true });

      ref.current = queryString;
    }

  }, [queryString, router]);

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
