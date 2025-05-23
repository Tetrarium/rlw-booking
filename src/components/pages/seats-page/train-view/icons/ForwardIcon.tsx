import React from "react";

import { SvgIcon } from "@mui/material";

const ForwardIcon = () => {
  return (
    <SvgIcon
      sx={{
        width: '4.75rem',
        height: '3.75rem',
        display: 'block'
      }}
    >
      <svg width="76" height="60" viewBox="0 0 76 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23877 0 0 2.23859 0 5V55C0 57.7614 2.23877 60 5 60H71C73.7612 60 76 57.7614 76 55V5C76 2.23859 73.7612 0 71 0H5ZM42.3628 32.8239V40C45.9434 36.6445 49.5586 33.2558 53 30.0664C49.5239 26.7774 45.9434 23.3887 42.3281 20V27.5747H23V32.8239H42.3628Z" fill="#FFA800" />
      </svg>
    </SvgIcon>
  );
};

export default ForwardIcon;