import classNames from "classnames";
import React, { FC, memo, useCallback, useMemo, useState } from "react";

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

let HoursPickerSlider: FC<HoursPickerSliderProps> = ({
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
    onChange(value);
  }, [onChange, value]);

  const handleChange = useCallback((_: Event, newValue: number | number[]) => {
    setValue(newValue as HoursRange);
  }, []);

  const calculatePosition = (val: number) => `${((val - min) / (max - min)) * 100}%`;

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
        classes={{
          thumb: s.thumb,
          track: s.track,
          rail: s.rail,
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