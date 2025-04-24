import classNames from "classnames";
import React from "react";

import s from "./carType.module.sass";
import { carTypes } from "./carTypes";

const CarType = () => {
  const selectedType = 'second';

  return (
    <div className={s.carType}>
      <h3 className={s.carType__title}>Тип вагона</h3>
      <ul className={s.carType__types}>
        {Object.entries(carTypes).map(([type, info]) => {
          const { icon: Icon, label } = info;

          const carTypeClass = classNames(s.carType__type, {
            [s.selected]: selectedType === type
          });

          const labelClass = classNames(s.carType__label, {
            [s.selected]: selectedType === type
          });

          return (
            <li key={type} className={carTypeClass}>
              <Icon
                size="3.5rem"
              />
              <span className={labelClass}>{label}</span>
            </li>
          );
        })
        }
      </ul>
    </div>
  );
};

export default CarType;