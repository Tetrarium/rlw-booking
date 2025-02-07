import React from "react";

import { SvgIcon } from "@mui/material";

const ExpandIcon = () => {
  return (
    <SvgIcon
      sx={{
        width: '1.25rem',
        height: '1.25rem',
        display: 'block'
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="18" height="18" rx="4" stroke="#C4C4C4" strokeWidth="2" />
        <line x1="5.61523" y1="9.76929" x2="14.3845" y2="9.76929" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </SvgIcon>
  );
};

export default ExpandIcon;