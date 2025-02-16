import classNames from "classnames";
import React, { FC, memo, useCallback, useMemo, useState } from "react";

import { Range } from "@/lib/features/routes/routesSettingsSlice";
import { Slider } from "@mui/material";

import s from "./hoursPickerSlider.module.sass";

interface HoursPickerSliderProps {
  title: string;
  values?: Range;
  onChange?: (values: Range) => void;
  arrival?: boolean;
}

const min = 0;
const max = 24;

const calculatePosition = (val: number) => `${((val - min) / (max - min)) * 100}%`;

let HoursPickerSlider: FC<HoursPickerSliderProps> = ({
  title,
  arrival = false,
  onChange = () => { },
  values = [min, max],
}) => {
  const [value, setValue] = useState<Range>(values);
  const titleClass = classNames(
    s.title,
    { [s.arrival]: arrival }
  );

  const handleEndChange = useCallback(() => {
    onChange(value);
  }, [onChange, value]);

  const handleChange = useCallback((_: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue) && newValue.length === 2) {
      setValue(newValue as Range);
    }
  }, []);



  const positions = useMemo(() => ({
    start: calculatePosition(value[0]),
    end: calculatePosition(value[1]),
  }), [value]);

  const titleId = useMemo(
    () => `hours-picker-title-${title.replace(/\s+/g, '-').toLowerCase()}`,
    [title]
  );

  return (
    <div className={s.timePicker}>
      <div className={titleClass}>{title}</div>
      <Slider
        value={value}
        min={min}
        max={max}
        step={1}
        onChange={handleChange}
        onChangeCommitted={handleEndChange}
        aria-labelledby={titleId}
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
          style={{ left: positions.start }}
        >{value[0]}:00</span>
        <span
          className={s.value}
          style={{ left: positions.end }}
        >{value[1]}:00</span>
        <span className={s.max}>{value[1] < max - max / 5 ? '24:00' : ''}</span>
      </div>
    </div>
  );
};

HoursPickerSlider = memo(HoursPickerSlider);

export default HoursPickerSlider;