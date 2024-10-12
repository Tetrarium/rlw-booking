import React from "react";

import Calendar from "@/UI/calendar/calendar";
import { Cached } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

// import { useUtils } from "@mui/x-date-pickers/internals";
import s from "./searchForm.module.sass";

const SearchForm = () => {
  return (
    <form className={s.search} action={e => console.log(e)}>
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

// const CalendarHeader = ({ currentMonth }: PickersCalendarHeaderProps<PickerValidDate>) => {
//   const utils = useUtils();
//   const format = `${utils.formats.month} ${utils.formats.year}`;
//   // console.log(props);
//   const month = utils.formatByString(currentMonth, format);
//   return (
//     <div>
//       <div>{month[0].toUpperCase() + month.slice(1)}</div>
//     </div>
//   );
// };