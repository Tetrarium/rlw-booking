import { FC } from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, IconButton } from "@mui/material";
import {
    DatePicker, DatePickerProps, PickersCalendarHeaderProps, PickerValidDate
} from "@mui/x-date-pickers";
import { useUtils } from "@mui/x-date-pickers/internals";

const Calendar: FC<DatePickerProps<Date>> = (props) => {

  return (
    <DatePicker
      {...props}
      showDaysOutsideCurrentMonth
      slots={{
        calendarHeader: CalendarHeader,
      }}
      slotProps={{
        layout: {
          sx: {
            backgroundColor: '#fff',
            '& .MuiDateCalendar-root': {
              width: '300px',
              height: '260px'
            },
            '& .MuiDayCalendar-header': {
              display: 'none'
            },
            '& .MuiDayCalendar-monthContainer': {
              padding: 2
            },
            '& .MuiDayCalendar-weekContainer': {
              margin: '4px 0'
            },
          },
        },
        day: {
          sx: {
            fontSize: 16,
            fontWeight: 500,
            borderRadius: "6px",
            border: "3px solid",
            borderColor: "transparent",
            height: "25px",
            width: "35px"
          }
        },
        textField: {
          size: "small",
          // variant: "filled",
          hiddenLabel: true,
          fullWidth: true,
          sx: {
            backgroundColor: '#fff',
          },
          slotProps: {
            input: {
              sx: {
                fontSize: '18px'
              }
            },
            formHelperText: {
              sx: {
                fontSize: '18px'
              }
            }
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