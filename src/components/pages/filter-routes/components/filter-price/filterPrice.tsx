import React, { FC } from "react";

import PriceRange from "@/components/pages/price-range/priceRange";

import s from "./filterPrice.module.sass";

interface FilterPriceProps {
  values: [number, number];
  onChange: (values: [number, number]) => void;
}

const FilterPrice: FC<FilterPriceProps> = (props) => {
  return (
    <div className={s.prices}>
      <label className={s.label}>Стоимость</label>
      <PriceRange
        min={0}
        max={10000}
        {...props}
      />
    </div>
  );
};

export default FilterPrice;