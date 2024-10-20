import React from "react";

import Calendar from "@/UI/calendar/calendar";
import { Cached } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

import s from "./searchForm.module.sass";

const SearchForm = () => {
  return (
    <form className={s.search}>
      <div className={s.row}>
        <div className={s.label}>
          Направление
        </div>
        <div className={s.fields}>
          <TextField
            className={s.field}
            label="Откуда"
          />
          <div className={s.btn__place}>
            <IconButton color="inherit">
              <Cached fontSize="large" />
            </IconButton>
          </div>
          <TextField
            className={s.field}
            label="Куда"
          />
        </div>
      </div>
      <div className={s.row}>
        <div className={s.label}>
          Дата
        </div>
        <div className={s.fields}>
          <Calendar className={s.field} />
          <div className={s.btn__place} />
          <DatePicker
            className={s.field}
          // label="Uncontrolled picker"
          />
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
