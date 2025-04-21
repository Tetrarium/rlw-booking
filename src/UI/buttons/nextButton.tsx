import React, { FC } from "react";

import { Button, ButtonProps, SxProps } from "@mui/material";

const NextButton: FC<ButtonProps> = ({ sx = {}, ...other }) => {
  const sxProps: SxProps = {
    fontSize: '1.5rem',
    width: '13.5rem',
    height: '3.75rem',
    color: '#FFFFFF',
    borderColor: '#FFA800',
    backgroundColor: '#FFA800',
    fontWeight: 700,
    ":hover": {
      boxShadow: '0 4px 4px rgba(0, 0, 0, .25)',
    },
    ":active": {
      color: '#FFA800',
      backgroundColor: 'transparent',
      boxShadow: '0 4px 4px rgba(0, 0, 0, .25)',
    },
    ":disabled": {
      color: '#FFFFFF',
      borderColor: '#928F94',
      backgroundColor: '#928F94',
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
      Далее
    </Button>
  );
};

export default NextButton;