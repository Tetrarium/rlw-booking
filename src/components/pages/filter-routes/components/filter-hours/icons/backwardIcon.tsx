import React from "react";

import { SvgIcon } from "@mui/material";

const BackwardIcon = () => {
  return (
    <SvgIcon
      sx={{
        width: '2rem',
        height: '1.625rem',
        display: 'block'
      }}
    >
      <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M27 0C29.7612 0 32 2.23859 32 5V21C32 23.7615 29.7612 26 27 26H5C2.23877 26 0 23.7615 0 21V5C0 2.23859 2.23877 0 5 0H27ZM14.1631 14.2236V17.3333C12.6558 15.8793 11.1333 14.4108 9.68457 13.0288C11.1479 11.6035 12.6558 10.135 14.1777 8.66663V11.949H22.3159V14.2236H14.1631Z" fill="#FFA800" />
      </svg>
    </SvgIcon>
  );
};

export default BackwardIcon;