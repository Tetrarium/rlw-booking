import React, { useContext } from "react";

import styled from "@emotion/styled";
import { Box } from "@mui/material";

import { SliderContext } from "../Slider";
import Dot from "./Dot";

const StyledDots = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 2,
  gap: '10px',
});

const Dots = () => {
  const context = useContext(SliderContext);
  if (!context) return null;

  const { pages, slotsProps } = context;
  console.log(pages);

  return (
    <StyledDots {...slotsProps?.dots}>
      {renderDots(pages)}
    </StyledDots>
  );
};

export default Dots;


const renderDots = (count: number) => {
  const dots = [];

  for (let i = 0; i < count; i++) {
    dots.push(<Dot key={`dot-${i}`} number={i} />);
  }

  return dots;
};