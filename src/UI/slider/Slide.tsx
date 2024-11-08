import React, { FC, useContext } from "react";

import styled from "@emotion/styled";
import { Box } from "@mui/material";

import { SliderContext, TSlide } from "./Slider";

interface SlideProps {
  data: TSlide;
}

const StyledSlide = styled(Box)<{ $width: number; }>(({ $width }) => ({
  flex: `1 0 ${$width}%`,
}));

const Slide: FC<SlideProps> = ({ data }) => {
  const context = useContext(SliderContext);
  if (!context) return;

  const { slideWidth, slotsProps } = context;

  return (
    <StyledSlide $width={slideWidth} {...slotsProps?.slide}>
      {data}
    </StyledSlide>
  );
};

export default Slide;