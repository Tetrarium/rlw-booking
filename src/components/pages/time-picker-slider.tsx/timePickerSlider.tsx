import classNames from "classnames";
import React, { FC, useState } from "react";

import { Slider } from "@mui/material";

import { getMinutesRange, getTimeRange } from "./time.Service";
import s from "./timePickerSlider.module.sass";

interface TimePickerSliderProps {
  title: string;
  values?: [string, string];
  onChange?: (values: [string, string]) => void;
  arrival?: boolean;
}

const min = 0;
const max = 1440;
const TimePickerSlider: FC<TimePickerSliderProps> = ({
  title,
  arrival = false,
  onChange = () => { },
  values = ['0:00', '24:00'],
}) => {
  const minutes = getMinutesRange(values);
  const [value, setValue] = useState<[number, number]>(minutes);
  const titleClass = classNames(
    s.title,
    { [s.arrival]: arrival }
  );

  const [startTime, endTime] = getTimeRange(value);

  const handleEndChange = () => {
    onChange([startTime, endTime]);
  };

  return (
    <div className={s.timePicker}>
      <div className={titleClass}>{title}</div>
      <Slider
        value={value}
        min={min}
        max={max}
        step={5}
        onChange={(e, newValue) => setValue(newValue as [number, number])}
        onChangeCommitted={handleEndChange}
        getAriaLabel={() => "Time range"}
        sx={{
          '& .MuiSlider-thumb': {
            width: '1.125rem',
            height: '1.125rem',
            backgroundColor: '#FFFFFF'
          },
          '& .MuiSlider-track': {
            backgroundColor: '#FFA800',
            opacity: 1,
            height: '0.625rem'
          },
          '& .MuiSlider-rail': {
            backgroundColor: 'transparent',
            border: '1px solid #FFFFFF',
            height: '0.625rem'
          }
        }}
      />
      <div className={s.values}>
        <span className={s.min}>{value[0] > max / 6 ? '0:00' : ''}</span>
        <span
          className={s.value}
          style={{ left: `${((value[0] - min) / (max - min)) * 100}%` }}
        >{startTime}</span>
        <span
          className={s.value}
          style={{ left: `${((value[1] - min) / (max - min)) * 100}%` }}
        >{endTime}</span>
        <span className={s.max}>{value[1] < max - max / 5 ? '24:00' : ''}</span>
      </div>
    </div>
  );
};

export default TimePickerSlider;