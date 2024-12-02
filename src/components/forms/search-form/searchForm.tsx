import React from "react";

import Calendar from "@/UI/calendar/calendar";
import { Cached } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import CitySearchField from "./CitySearchField/CitySearchField";
import s from "./searchForm.module.sass";

const SearchForm = () => {
  return (
    <form className={s.search}>
      <div className={s.row}>
        <div className={s.label}>
          Направление
        </div>
        <div className={s.fields}>
          <div className={s.field}>
            <CitySearchField
              label="Откуда"
            />
          </div>
          <div className={s.btn__place}>
            <IconButton color="inherit">
              <Cached fontSize="large" />
            </IconButton>
          </div>
          <div className={s.field}>
            <CitySearchField
              label="Откуда"
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
    </form>
  );
};

export default SearchForm;
