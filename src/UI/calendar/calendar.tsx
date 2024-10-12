import { FC } from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, IconButton, TextField } from "@mui/material";
import {
    DatePicker, DatePickerProps, PickersCalendarHeaderProps, PickersDay, PickerValidDate
} from "@mui/x-date-pickers";
import { useUtils } from "@mui/x-date-pickers/internals";

const Calendar: FC<DatePickerProps<Date>> = (props) => {

  return (
    <DatePicker
      {...props}
      showDaysOutsideCurrentMonth
      slots={{
        calendarHeader: CalendarHeader
      }}
      // label="Uncontrolled picker"
      slotProps={{
        layout: {
          sx: {
            font: "Roboto",
            fontFamily: 'Roboto',
            fontSize: 16,
            // width: '250px',
            '& .MuiDateCalendar-root': {
              width: 'auto',
              height: 'auto'
            },
            '& .MuiDayCalendar-header': {
              display: 'none'
            },
            '& .MuiDayCalendar-slideTransition': {
              minHeight: 0,
              padding: 1,
            },
            '& .MuiDayCalendar-monthContainer': {
              position: 'relative',
              minHeight: 0,
            },
            '& .MuiDayCalendar-weekContainer': {
              margin: '4px 0'
            }
          },
        },
        day: {
          sx: {
            fontSize: 15,
            fontWeight: 500,
            borderRadius: "6px",
            border: "3px solid",
            borderColor: "transparent",
            height: "25px",
            width: "35px"
          }
        },
      }}
      minDate={props.minDate || new Date()}
    />
  );
};

export default Calendar;

const CalendarHeader = ({ currentMonth, onMonthChange }: PickersCalendarHeaderProps<PickerValidDate>) => {
  const utils = useUtils();
  const format = `${utils.formats.month} ${utils.formats.year}`;
  // console.log(props);
  const month = utils.formatByString(currentMonth, format);

  const selectNextMonth = () => onMonthChange(utils.addMonths(currentMonth, 1), "left");
  const selectPreviousMonth = () => onMonthChange(utils.addMonths(currentMonth, -1), "right");

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      fontSize={18}
      px={5}
      py={1}
      fontWeight={700}
      borderBottom={'2px solid #ccc'}
    >
      <IconButton onClick={selectPreviousMonth}>
        <ArrowBackIosIcon />
      </IconButton>
      <Box flexGrow={1} textAlign={'center'}>{month[0].toUpperCase() + month.slice(1)}</Box>
      <IconButton onClick={selectNextMonth}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};