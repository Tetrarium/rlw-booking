import React, { FC, useCallback, useState } from "react";

import { useDebounce } from "@/hooks/useDebounce";
import { ICity } from "@/types/city";
import styled from "@emotion/styled";
import PlaceIcon from "@mui/icons-material/Place";
import { AutocompleteGroupedOption, useAutocomplete } from "@mui/material";

interface FieldProps {
  label?: string;
  // onSelect: (value: string) => void;
}

type Option = { label: string; id: string; };

function isOption(option: Option | AutocompleteGroupedOption<Option>): option is Option {
  return 'label' in option;
}

const Content = styled('div')({
  position: 'relative',
  color: '#E5E5E5'
});

// const Icon = styled('div')({
//   position: "absolute",
//   right: 5,
//   top: 0,
//   height: '100%',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// });

const Input = styled('input')({
  display: 'block',
  width: '100%',
  fontSize: '18px',
  padding: '9px 13px',
  borderRadius: '4px',
  textTransform: 'capitalize',
  border: 'none',
  '&::placeholder': {
    color: '#E5E5E5',
  }
});

const List = styled('ul')({
  listStyle: 'none',
  position: 'absolute',
  width: '300px',
  backgroundColor: '#F5F4F6',
  color: '#292929',
  margin: '10px 0',
  zIndex: 1000,
  borderRadius: '4px',
  maxHeight: '300px',
  overflowY: 'auto',
});

const Item = styled('li')({
  fontSize: '18px',
  padding: '10px 15px',
  textTransform: 'uppercase',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#d5d1da',

  }
});

const CitySearchField: FC<FieldProps> = ({ label = '' }) => {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState<Option | null>(null);
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

  const {
    getRootProps,
    // getInputLabelProps,
    getInputProps,
    groupedOptions,
    getListboxProps,
    getOptionProps,
    // inputValue,
    getPopupIndicatorProps,
  } = useAutocomplete({
    options,
    getOptionLabel: (option) => option.label,
    onChange: (evt, value) => setValue(value),
    onInputChange: (evt, value) => setInputValue(value),
    inputValue,
    value,
  });

  return (
    // <Autocomplete
    //   disablePortal
    //   options={options}
    //   fullWidth
    //   slotProps={{
    //     paper: {
    //       elevation: 4,
    //       sx: {
    //         color: '#292929',
    //         fontSize: '18px',
    //         textTransform: 'uppercase',
    //         my: '5px',
    //         backgroundColor: '#F5F4F6'
    //       }
    //     },
    //   }}
    //   renderInput={(params) => (
    //     // <TextField
    //     //   {...params}
    //     //   label={label}
    //     //   value={value}
    //     //   onChange={e => setValue(e.target.value)}
    //     //   slotProps={{
    //     //     input: {
    //     //       ...params.InputProps,
    //     //       size: 'small',
    //     //       sx: {
    //     //         fontSize: '18px',
    //     //         textTransform: 'capitalize',
    //     //         backgroundColor: '#fff',
    //     //         width: '100%'
    //     //       },
    //     //       // hiddenLabel: true,
    //     //     },
    //     //     inputLabel: {
    //     //       sx: {
    //     //         padding: 0,
    //     //         margin: 0,
    //     //         fontSize: '1.8rem'
    //     //       }
    //     //     },
    //     //   }}
    //     // />
    //     // <input
    //     //   {...params}
    //     // />
    //     <Input
    //       {...params}
    //       size="small"
    //       placeholder={label}
    //       disableUnderline
    //       value={value}
    //       onChange={e => setValue(e.target.value)}
    //       sx={{
    //         backgroundColor: '#fff',
    //         fontSize: '1.8rem',
    //         lineHeight: '1',
    //         px: '10px',
    //         py: '5px',
    //         borderRadius: 1
    //       }}
    //     />
    //   )}
    // />

    <div>
      <Content {...getRootProps()}>
        {/* <label {...getInputLabelProps()}>{label}</label> */}
        <Input
          {...getInputProps()}
          placeholder={label}
        // value={inputValue}
        // onChange={handleChange}
        />
        {/* <Icon>
          <PlaceIcon fontSize="large" color="inherit" />
        </Icon> */}
        <button
          {...getPopupIndicatorProps()}
        >
          <PlaceIcon fontSize="large" color="inherit" />
        </button>
      </Content>
      {groupedOptions.length > 0
        ?
        <List {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            if (!isOption(option)) return null;

            const { key, ...optionProps } = getOptionProps({ option, index });

            return (
              <Item
                key={key}
                {...optionProps}
              >
                {option.label}
              </Item>
            );
          })}
        </List>
        : null
      }
    </div>
  );
};

export default CitySearchField;