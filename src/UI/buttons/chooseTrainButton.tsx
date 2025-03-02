import React, { FC } from "react";

import { Button, ButtonProps, SxProps } from "@mui/material";

const ChooseTrainButton: FC<ButtonProps> = ({ sx = {}, ...other }) => {
  const sxProps: SxProps = {
    fontSize: '1.5rem',
    color: '#fff',
    borderColor: '#FFA800',
    backgroundColor: '#FFA800',
    textTransform: 'none',
    fontWeight: 700,
    width: '14.25rem',
    height: '2.5rem',
    ":hover": {
      color: '#fff',
      backgroundColor: '#FFA800',
      boxShadow: '0 4px 4px rgba(0, 0, 0, .25)',
    },
    ":active": {
      color: '#FFA800',
      backgroundColor: 'transparent',
      boxShadow: '0 4px 4px rgba(0, 0, 0, .25)',
    },
    ":disabled": {
      backgroundColor: '#C4C4C4',
      borderColor: '#C4C4C4',
      color: '#FFFFFF',
    },
    ...sx,
  };

  return (
    <Button
      variant="outlined"
      disableRipple
      sx={sxProps}
      {...other}
    >Выбрать места</Button>
  );
};

export default ChooseTrainButton;