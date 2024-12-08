import React, { FC, PropsWithChildren } from "react";

import { Button, ButtonProps } from "@mui/material";

const LearnMoreButton: FC<ButtonProps & PropsWithChildren> = ({ children, ...props }) => {
  return (
    <Button
      variant="outlined"
      disableRipple
      {...props}
      sx={{
        border: '1px solid #fff',
        px: 8.5,
        height: 60,
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#fff',
        textTransform: 'none',
        borderRadius: 1.25,
        ":hover": {
          color: '#2D2B2F',
          borderColor: '#FFCA62',
          backgroundColor: '#FFCA62',
        },
        ":active": {
          color: '#2D2B2F',
          borderColor: '#FFFFFF',
          backgroundColor: '#FFFFFF',
        },

        ...props.sx,
      }}
    >
      {children || 'Узнать больше'}
    </Button>
  );
};

export default LearnMoreButton;