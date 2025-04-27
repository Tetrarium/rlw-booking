import classNames from "classnames";
import React, { FC } from "react";

import { TCoach } from "@/types/models";

import s from "./carPicker.module.sass";

interface Props {
  cars?: TCoach[],
  pickedCarId?: string,
  pickCar?: (id: string) => void;
}

const CarPicker: FC<Props> = ({ cars = [], pickedCarId, pickCar = () => { } }) => {
  return (
    <div className={s.carPicker}>
      <h3 className={s.carPicker__title}>Вагоны</h3>
      <span className={s.carPicker__cars}>
        {cars.map(({ _id, name }) => {
          const carClass = classNames(s.carPicker__car, {
            [s.selected]: pickedCarId === _id
          });

          return (
            <button
              className={carClass}
              key={_id}
              onClick={() => pickCar(_id)}
            >{name}</button>
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