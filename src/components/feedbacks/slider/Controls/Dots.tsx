import React, { useContext } from "react";

import { SliderContext } from "../Slider";
import s from "../Slider.module.sass";
import Dot from "./Dot";

const Dots = () => {
  const context = useContext(SliderContext);
  if (!context) return null;

  const { pages } = context;
  console.log(pages);


  return (
    <div className={s.dots}>
      {renderDots(pages)}
    </div>
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