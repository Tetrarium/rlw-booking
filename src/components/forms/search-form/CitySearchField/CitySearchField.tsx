import React, { FC, useCallback, useState } from "react";

import { fetchData } from "@/API/fetchData";
import { useDebounce } from "@/hooks/useDebounce";
import { SERVER_URLS } from "@/setting";
import { City } from "@/types/models";
import PlaceIcon from "@mui/icons-material/Place";
import { Autocomplete, TextField } from "@mui/material";

interface FieldProps {
  label?: string;
  // onSelect: (value: string) => void;
}

type Option = { label: string; id: string; };

const CitySearchField: FC<FieldProps> = ({ label = '' }) => {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState<Option | null>(null);
  const [cities, setCities] = useState<City[]>([]);

  const fetchCities = useCallback((value: string) => {
    fetchData<City[]>(SERVER_URLS.CITIES + `?name=${value}`)
      .then(data => setCities(data || []));
  }, []);

  useDebounce(() => {
    if (inputValue.length > 0) {
      fetchCities(inputValue);
    }
  }, inputValue, 300);

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
      autoComplete
      fullWidth
      inputValue={inputValue}
      onInputChange={(e, v) => setInputValue(v)}
      value={value}
      onChange={(e, v) => setValue(v)}
      aria-placeholder={label}
      popupIcon={<PlaceIcon fontSize="large" />}
      slotProps={{
        paper: {
          elevation: 4,
          sx: {
            color: '#292929',
            fontSize: '1.125rem',
            textTransform: 'uppercase',
            my: '5px',
            backgroundColor: '#F5F4F6'
          }
        },
        popupIndicator: {
          sx: {
            transform: 'none',
          }
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label=""
          placeholder={label}
          sx={{
            '*': {
              textTransform: 'capitalize',
              fontSize: '1.125rem',
            }
          }}
          slotProps={{
            input: {
              ...params.InputProps,
              sx: {
                backgroundColor: '#fff',
              },
            },
          }}
        />
      )}
    />
  );
};

export default CitySearchField;