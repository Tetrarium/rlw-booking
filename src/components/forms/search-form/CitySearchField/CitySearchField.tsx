import React, { FC, useCallback, useState } from "react";

import { useDebounce } from "@/hooks/useDebounce";
import { ICity } from "@/types/city";
import { Autocomplete, TextField } from "@mui/material";

interface FieldProps {
  label?: string;
  // onSelect: (value: string) => void;
}

const CitySearchField: FC<FieldProps> = ({ label = '' }) => {
  const [value, setValue] = useState('');
  const [cities, setCities] = useState<ICity[]>([]);

  const fetchCities = useCallback((value: string) => {
    fetch(`https://students.netoservices.ru/fe-diplom/routes/cities?name=${value}`)
      .then(response => response.json())
      .then((data: ICity[] & { error: string; }) => {
        if (data.error) throw new Error(data.error);

        setCities(data);
      })
      .catch(e => console.log(e));
  }, []);

  useDebounce(() => {
    if (value.length > 0) {
      fetchCities(value);
    }
  }, value, 300);

  const options = cities
    ? cities.map(({ name, _id }) => ({
      label: name,
      id: _id,
    }))
    : [];

  return (
    <Autocomplete
      disablePortal
      options={options}
      fullWidth
      slotProps={{
        paper: {
          elevation: 4,
          sx: {
            color: '#292929',
            fontSize: '18px',
            textTransform: 'uppercase',
            my: '5px',
            backgroundColor: '#F5F4F6'
          }
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          // fullWidth
          label={label}
          value={value}
          onChange={e => setValue(e.target.value)}
          slotProps={{
            input: {
              ...params.InputProps,
              size: 'small',
              sx: {
                fontSize: '18px',
                textTransform: 'capitalize',
                backgroundColor: '#fff',
                width: '100%'
              },
            }
          }}
        />
      )}
    />
  );
};

export default CitySearchField;