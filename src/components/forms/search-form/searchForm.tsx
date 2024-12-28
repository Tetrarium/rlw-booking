import React from "react";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
    changeDepartureCity, changeDestinationCity, reverseLocations
} from "@/lib/reducers/locationsSlice";
import FindButton from "@/UI/buttons/findButton";
import Calendar from "@/UI/calendar/calendar";
import { Cached } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import CitySearchField from "./CitySearchField/CitySearchField";
import s from "./searchForm.module.sass";

const SearchForm = () => {
  const { departure, destination } = useAppSelector(state => state.locations);
  const dispatch = useAppDispatch();

  return (
    <form className={s.search}>
      <div className={s.row}>
        <div className={s.label}>
          Направление
        </div>
        <div className={s.fields}>
          <div className={s.field}>
            <CitySearchField
              key={departure._id}
              label="Откуда"
              city={departure}
              onSelect={(_id, name) => dispatch(changeDepartureCity({ _id, name }))}
            />
          </div>
          <div className={s.btn__place}>
            <IconButton color="inherit" onClick={() => dispatch(reverseLocations())}>
              <Cached />
            </IconButton>
          </div>
          <div className={s.field}>
            <CitySearchField
              key={destination._id}
              label="Куда"
              city={destination}
              onSelect={(_id, name) => dispatch(changeDestinationCity({ _id, name }))}
            />
          </div>
        </div>
      </div>
      <div className={s.row}>
        <div className={s.label}>
          Дата
        </div>
        <div className={s.fields}>
          <div className={s.field}>
            <Calendar />
          </div>
          <div className={s.btn__place} />
          <div className={s.field}>
            <Calendar />
          </div>
        </div>
      </div>
      <div className={s.row}>
        <div className={s.sendForm}>
          <div className={s.field}>
            <FindButton sx={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
