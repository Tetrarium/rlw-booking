import { createContext, FC, ReactNode, useState } from "react";

import styled from "@emotion/styled";
import { Box, BoxProps } from "@mui/material";

import Dots from "./Controls/Dots";
import SlidesList from "./SlidesList";

export type TSlide = ReactNode;

type DotProps = {
  size?: number;
  activeColor?: string;
  defaultColor?: string;
  hoverColor?: string;
} & BoxProps;

export interface SliderSlots {
  container?: BoxProps;
  slides?: BoxProps;
  slide?: BoxProps;
  dots?: BoxProps;
  dot?: DotProps;
}

interface SliderProps {
  slides: TSlide[];
  slidesPerPage?: number;
  slotsProps?: SliderSlots;
}

interface SliderContextValue {
  items: TSlide[];
  page: number;
  pages: number;
  slideWidth: number;
  shift: number;
  goToSlide: (slide: number) => void;

  slotsProps?: SliderSlots;
}

export const SliderContext = createContext<SliderContextValue | undefined>(undefined);

const StyledSlider = styled(Box)({
  border: '1px solid black', // !delete Удалить после тестирования
  overflow: 'hidden',
  position: 'relative',
});

const Slider: FC<SliderProps> = ({ slides = [], slidesPerPage = 1, slotsProps }) => {
  const [page, setPage] = useState(0);

  const pages = Math.ceil(slides.length / slidesPerPage);

  const slideWidth = 100 / slidesPerPage;

  const maxShift = Math.max(slides.length * slideWidth - 100, 0);
  console.log(maxShift);

  const shift = Math.min(page * 100, maxShift);

  return (
    <StyledSlider {...slotsProps?.container}>
      <SliderContext.Provider
        value={{
          pages,
          page,
          goToSlide: (page) => setPage(page),
          items: slides,
          shift,
          slideWidth,

          slotsProps,
        }}
      >
        <SlidesList />
        <Dots />
      </SliderContext.Provider>
    </StyledSlider>
  );
};

export default Slider;