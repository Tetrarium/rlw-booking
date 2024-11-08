import React, { useContext } from "react";

import styled from "@emotion/styled";
import { Box } from "@mui/material";

import Slide from "./Slide";
import { SliderContext } from "./Slider";

const Container = styled(Box, {
  shouldForwardProp: (prop) => !prop.startsWith('$'),
})<{ $shift: number; }>(({ $shift }) => ({
  display: "flex",
  height: "100%",
  width: "100%",
  transition: "transform 0.5s ease-in-out",
  transform: `translateX(-${$shift}%)`,
}));


const SlidesList = () => {
  const context = useContext(SliderContext);

  if (!context) return null;

  const { items, shift, slotsProps } = context;


  return (
    <Container
      $shift={shift}
      {...slotsProps?.slides}
    >
      {items.map((s, i) => (
        <Slide key={i} data={s} />
      ))}
    </Container>
  );
};

export default SlidesList;