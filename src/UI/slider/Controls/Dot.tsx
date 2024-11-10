import React, { FC, useContext } from "react";

import styled from "@emotion/styled";
import { Box } from "@mui/material";

import { SliderContext } from "../Slider";

const defaultProps = {
  size: 20,
  activeColor: '#aaa',
  defaultColor: '#ccc',
  hoverColor: '#aaa',
};

const StyledDot = styled(Box, {
  shouldForwardProp: (prop) => !prop.startsWith('$')
})<{
  $isActive: boolean;
  $size: number;
  $activeColor: string;
  $defaultColor: string;
  $hoverColor: string;
}>(({
  $isActive,
  $size,
  $activeColor,
  $defaultColor,
  $hoverColor,
}) => ({
  width: `${$size}px`,
  height: `${$size}px`,
  borderRadius: '50%',
  backgroundColor: $isActive ? $activeColor : $defaultColor,
  transition: 'background-color .2s linear',
  cursor: $isActive ? 'default' : 'pointer',
  pointerEvents: $isActive ? 'none' : 'auto',

  ":hover": {
    backgroundColor: $hoverColor,
  }
}));

interface DotProps {
  number: number;
}

const Dot: FC<DotProps> = ({ number }) => {
  const context = useContext(SliderContext);

  if (!context) return null;

  const { goToSlide, page, slotsProps } = context;

  const { size, defaultColor, activeColor, hoverColor, ...other } = {
    ...defaultProps,
    ...slotsProps?.dot
  };

  return (
    <StyledDot
      $isActive={number === page}
      $size={size}
      $defaultColor={defaultColor}
      $activeColor={activeColor}
      $hoverColor={hoverColor}
      onClick={() => goToSlide(number)}
      {...other}
    />
  );
};

export default Dot;