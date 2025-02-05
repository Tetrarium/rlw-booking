import classNames from "classnames";
import React, { FC, useCallback, useState } from "react";

import { Slider } from "@mui/material";

import s from "./hoursPickerSlider.module.sass";

export type HoursRange = [number, number];

interface HoursPickerSliderProps {
  title: string;
  values?: HoursRange;
  onChange?: (values: HoursRange) => void;
  arrival?: boolean;
}

const min = 0;
const max = 24;
const HoursPickerSlider: FC<HoursPickerSliderProps> = ({
  title,
  arrival = false,
  onChange = () => { },
  values = [0, 24],
}) => {
  const [value, setValue] = useState<HoursRange>(values);
  const titleClass = classNames(
    s.title,
    { [s.arrival]: arrival }
  );

  const handleEndChange = useCallback(() => {
    onChange(values);
  }, [onChange, values]);

  const calculatePosition = (val: number) => `${((val - min) / (max - min)) * 100}%`;

  return (
    <div className={s.timePicker}>
      <div className={titleClass}>{title}</div>
      <Slider
        value={value}
        min={min}
        max={max}
        step={1}
        onChange={(e, newValue) => setValue(newValue as HoursRange)}
        onChangeCommitted={handleEndChange}
        getAriaLabel={(index) => index === 0 ? "Start time" : "End time"}
        sx={{
          '& .MuiSlider-thumb': {
            width: '1.125rem',
            height: '1.125rem',
            backgroundColor: '#FFFFFF'
          },
          '& .MuiSlider-track': {
            backgroundColor: '#FFA800',
            opacity: 1,
            height: '0.625rem',
            border: 'none',
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
          style={{ left: calculatePosition(value[0]) }}
        >{value[0]}:00</span>
        <span
          className={s.value}
          style={{ left: calculatePosition(value[1]) }}
        >{value[1]}:00</span>
        <span className={s.max}>{value[1] < max - max / 5 ? '24:00' : ''}</span>
      </div>
    </div>
  );
};

export default HoursPickerSlider;