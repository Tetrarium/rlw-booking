import React, { useCallback } from "react";

import PriceRange from "@/components/pages/filter-routes/components/filter-price/price-range/priceRange";
import { Range, rangeSettingsChanged } from "@/lib/features/routes/routesSettingsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import s from "./filterPrice.module.sass";

const FilterPrice = () => {
  const from = useAppSelector(state => state["routes-settings"].price_from);
  const to = useAppSelector(state => state["routes-settings"].price_to);
  const dispatch = useAppDispatch();

  const handlePriceRangeChanged = useCallback((values: Range) => {
    dispatch(rangeSettingsChanged({
      keyFrom: "price_from",
      keyTo: "price_to",
      value: values,
    }));
  }, [dispatch]);

  return (
    <div className={s.prices}>
      <label className={s.label}>Стоимость</label>
      <PriceRange
        min={0}
        max={10000}
        values={[from ?? 0, to ?? 10000]}
        onChange={handlePriceRangeChanged}
      />
    </div>
  );
};

export default FilterPrice;