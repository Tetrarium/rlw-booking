import React, { FC, useCallback } from "react";

import { setDateEnd, setDateStart } from "@/lib/features/routes/datesSlice";
import {
    changeDepartureCity, changeDestinationCity, reverseLocations
} from "@/lib/features/routes/locationsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import FindButton from "@/UI/buttons/findButton";
import Calendar from "@/UI/calendar/calendar";
import { Cached } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import CitySearchField from "./CitySearchField/CitySearchField";
import s from "./searchForm.module.sass";

interface SearchFormProps {
  onSubmit: () => void,
}

const SearchForm: FC<SearchFormProps> = ({ onSubmit }) => {
  const { departure, destination } = useAppSelector(state => state.locations);
  const { date_start, date_end } = useAppSelector(state => state.dates);
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  }, [onSubmit]);

  return (
    <form className={s.search} onSubmit={handleSubmit}>
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
            <Calendar
              value={date_start ? new Date(date_start) : null}
              onChange={date => dispatch(setDateStart(date ? date.valueOf() : null))}
              maxDate={date_end ? new Date(date_end) : undefined}
            />
          </div>
          <div className={s.btn__place} />
          <div className={s.field}>
            <Calendar
              value={date_end ? new Date(date_end) : null}
              onChange={date => dispatch(setDateEnd(date ? date.valueOf() : null))}
              minDate={date_start ? new Date(date_start) : undefined}
            />
          </div>
        </div>
      </div>
      <div className={s.row}>
        <div className={s.sendForm}>
          <div className={s.field}>
            <FindButton type="submit" sx={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
