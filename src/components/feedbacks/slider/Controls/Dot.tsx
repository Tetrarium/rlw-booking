import React, { FC, useContext } from "react";

import styled from "@emotion/styled";
import { Box } from "@mui/material";

import { SliderContext } from "../Slider";

const StyledDot = styled(Box)<{
  $isActive: boolean;
  $size?: number;
  $activeColor?: string;
  $defaultColor?: string;
  $hoverColor?: string;
}>(({
  $isActive,
  $size = 20,
  $activeColor = '#aaa',
  $defaultColor = '#ccc',
  $hoverColor = '#aaa',
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

  const size = slotsProps?.dot?.size;
  const defaultColor = slotsProps?.dot?.defaultColor;
  const activeColor = slotsProps?.dot?.activeColor;
  const hoverColor = slotsProps?.dot?.hoverColor;

  return (
    <StyledDot
      $isActive={number === page}
      onClick={() => goToSlide(number)}
      {...slotsProps?.dot}
      $size={size}
      $defaultColor={defaultColor}
      $activeColor={activeColor}
      $hoverColor={hoverColor}
    />
  );
};

export default Dot;