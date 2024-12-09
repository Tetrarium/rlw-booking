import React, { FC } from "react";

import { Button, ButtonProps, SxProps } from "@mui/material";

const FindButton: FC<ButtonProps> = ({ sx = {}, ...other }) => {
  const sxProps: SxProps = {
    fontSize: '1.5rem',
    height: '3.75rem',
    color: '#292929',
    borderColor: '#FFA800',
    backgroundColor: '#FFA800',
    fontWeight: 700,
    ":hover": {
      color: '#292929',
      backgroundColor: '#FFA800',
      boxShadow: '0 4px 4px rgba(0, 0, 0, .25)',
    },
    ":active": {
      color: '#FFA800',
      backgroundColor: 'transparent',
      boxShadow: '0 4px 4px rgba(0, 0, 0, .25)',
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
      Найти билеты
    </Button>
  );
};

export default FindButton;