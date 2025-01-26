import React from "react";

import CitySearchField from "@/components/shared/CitySearchField/CitySearchField";
import { useAppSelector } from "@/lib/hooks";
import SwapLocationsButton from "@/UI/buttons/swapLocationsButton";

import s from "./searchRoutesForm.module.sass";

const SearchRoutesForm = () => {
  const { departure, destination } = useAppSelector(state => state.locations);

  return (
    <form className={s.form}>
      <div className={s.field}>
        <div className={s.label}>Направление</div>
        <div className={s.directionInputs}>
          <div className={s.directionInput}>
            <CitySearchField
              key={departure._id}
              label='Откуда'
              city={departure}
              onSelect={() => { }}
            />
          </div>
          <div className={s.swapLocations}>
            <SwapLocationsButton />
          </div>
          <div className={s.directionInput}>
            <CitySearchField
              key={destination._id}
              label='Куда'
              city={destination}
              onSelect={() => { }}
            />
          </div>
        </div>

      </div>
    </form>
  );
};

export default SearchRoutesForm;