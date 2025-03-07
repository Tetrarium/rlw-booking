import React, { FC, useState } from "react";

import { Range } from "@/lib/features/routes/routesSettingsSlice";
import Slider from "@mui/material/Slider";

import s from "./priceRange.module.sass";

interface PriceRangeProps {
  values?: Range;
  onChange?: (values: Range) => void;
  min?: number;
  max?: number;
}

const PriceRange: FC<PriceRangeProps> = ({
  values = [0, 100],
  onChange = () => { },
  min = 0,
  max = 100,
}) => {
  const [value, setValue] = useState<Range>(values);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue) && newValue.length === 2) {
      setValue(newValue as Range);
    }
  };

  const handleEndChange = () => {
    onChange(value);
  };

  return (
    <div className={s.container}>
      <div className={s.title}>
        <span>от</span>
        <span>до</span>
      </div>
      <Slider
        min={min}
        max={max}
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        onChangeCommitted={handleEndChange}
        sx={{
          '& .MuiSlider-thumb': {
            width: '1.5rem',
            height: '1.5rem',
            backgroundColor: '#FFFFFF'
          },
          '& .MuiSlider-track': {
            backgroundColor: '#FFA800',
            opacity: 1,
            height: '1rem',
            border: 'none',
          },
          '& .MuiSlider-rail': {
            backgroundColor: 'transparent',
            border: '1px solid #FFFFFF',
            height: '1rem'
          }
        }}
      />
      <div className={s.values}>
        <span>{value[0] > max / 8 ? min : ''}</span>
        <span
          className={s.value}
          style={{ left: `${((value[0] - min) / (max - min)) * 100}%` }}
        >{value[0]}</span>
        <span
          className={s.value}
          style={{ left: `${((value[1] - min) / (max - min)) * 100}%` }}
        >{value[1]}</span>
        <span>{value[1] < max - max / 5 ? max : ''}</span>
      </div>
    </div>
  );
};

export default PriceRange;