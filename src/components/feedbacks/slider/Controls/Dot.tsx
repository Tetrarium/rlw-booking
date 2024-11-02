import classNames from "classnames";
import React, { FC, useContext } from "react";

import { SliderContext } from "../Slider";
import s from "../Slider.module.sass";

interface DotProps {
  number: number;
}

const Dot: FC<DotProps> = ({ number }) => {
  const context = useContext(SliderContext);

  if (!context) return null;

  const { goToSlide, page } = context;

  const dotClass = classNames(s.dot, {
    [s.dot__active]: number === page,
  });

  return (
    <div
      className={dotClass}
      onClick={() => goToSlide(number)}
    />
  );
};

export default Dot;