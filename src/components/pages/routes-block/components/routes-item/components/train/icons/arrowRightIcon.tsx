import React from "react";

import { SvgIcon } from "@mui/material";

const ArrowRightIcon = () => {
  return (
    <SvgIcon sx={{ display: 'block', width: '30px', height: '30px' }}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 27C20 24.588 20 24.5 20 19C13.066 19 6.89687 19 0 19C0 17.0266 0 14.9734 0 13C6.74855 13 12.9549 13 20 13C20 10.0764 20 7.66778 20 5C32 16.073 20 5 32 16.073C20 27 32 16.073 20 27Z" fill="#FFA800" fillOpacity="0.79" />
      </svg>

    </SvgIcon>
  );
};

export default ArrowRightIcon;