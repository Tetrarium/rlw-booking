import classNames from "classnames";
import React, { useState } from "react";

import s from "./carPicker.module.sass";

const cars: Record<number, string> = {
  7: '07',
  9: '09',
};

const CarPicker = () => {
  const [pickedCar, setPickedCar] = useState<keyof typeof cars>(7);

  const pickCar = (key: keyof typeof cars) => {
    setPickedCar(key);
  };
  return (
    <div className={s.carPicker}>
      <h3 className={s.carPicker__title}>Вагоны</h3>
      <span className={s.carPicker__cars}>
        {Object.entries(cars).map(([key, value]) => {
          const carClass = classNames(s.carPicker__car, {
            [s.selected]: pickedCar === +key
          });

          return (
            <button
              className={carClass}
              key={key}
              onClick={() => pickCar(+key)}
            >{value}</button>
          );
        })}
      </span>
      <span className={s.carPicker__hint}>
        Нумерация вагонов начинается с головы поезда
      </span>
    </div>
  );
};

export default CarPicker;