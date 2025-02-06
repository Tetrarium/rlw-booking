import React, { FC } from "react";

import { Switch } from "@mui/material";

interface FilterSwitchProps {
  checked?: boolean;
  onChange?: () => void;
}
const FilterSwitch: FC<FilterSwitchProps> = ({ checked, onChange }) => {
  return (
    <Switch
      checked={checked || false}
      onChange={onChange}
      sx={{
        '&.MuiSwitch-root': {
          padding: '0.25rem 0.0625rem',
          width: '4.5rem',
          height: '1.75rem'
        },

        '& .MuiSwitch-switchBase': {
          padding: '0',
          '& + .MuiSwitch-track': {
            backgroundColor: '#FFFFFF',
            width: '4.5rem',
            opacity: 1,
            borderRadius: '0.875rem'
          },
          '& .MuiSwitch-thumb': {
            backgroundColor: '#C4C4C4',
            width: '1.75rem',
            height: '1.75rem',
          },

          '&.Mui-checked': {
            transform: 'translateX(2.75rem)',
            '& .MuiSwitch-thumb': {
              backgroundColor: '#FFA800'
            },
            '& + .MuiSwitch-track': {
              backgroundColor: '#FCDC9D',
            }
          },
        },
      }}
    />
  );
};

export default FilterSwitch;