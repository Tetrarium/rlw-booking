import React, { FC } from "react";

import { Button, ButtonProps, SxProps } from "@mui/material";

const CancelTrainButton: FC<ButtonProps> = ({ sx = {}, ...other }) => {
  const sxProps: SxProps = {
    fontSize: '1.5rem',
    fontWeight: 700,
    textTransform: 'none',
    color: '#292929',
    height: '3.75rem',
    border: '1px solid #292929',
    px: 5,
    ":hover": {
      color: '#FFA800',
      boxShadow: '0 4px 4px rgba(0, 0, 0, .25)',
    },
    ":active": {
      color: '#292929',
      backgroundColor: '#FFA800',
      borderColor: '#FFA800',
    },
    ...sx,
  };

  return (
    <Button
      variant="outlined"
      disableRipple
      sx={sxProps}
      {...other}
    >
      Выбрать другой поезд
    </Button>
  );
};

export default CancelTrainButton;