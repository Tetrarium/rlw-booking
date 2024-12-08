import React, { FC } from "react";

import { Button, ButtonProps, SxProps } from "@mui/material";

const SendButton: FC<ButtonProps> = ({ sx = {}, ...other }) => {
  const sxProps: SxProps = {
    fontSize: '1.5rem',
    height: '60px',
    color: '#fff',
    borderColor: '#fff',
    fontWeight: 400,
    ":hover": {
      color: '#2D2B2F',
      borderColor: '#FFCA62',
      backgroundColor: '#FFCA62',
    },
    ":active": {
      borderColor: '#FFFFFF',
      backgroundColor: '#FFFFFF',
    },
    ...sx,
  };

  return (
    <Button
      variant="outlined"
      disableRipple
      sx={sxProps}
      {...other}
    />
  );
};

export default SendButton;