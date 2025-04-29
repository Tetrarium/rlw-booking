import React from "react";

import s from "./carInfo.module.sass";
import { coachServicesMap } from "./coachServicesMap";
import ServiceCheckbox from "./components/service-checkbox/serviceCheckbox";

const CarInfo = () => {
  return (
    <div className={s.carInfo}>
      <div className={s.carInfo__header}>
        <h3 className={s.carInfo__title}>07</h3>
        <div className={s.carInfo__subtitle}>Вагон</div>
      </div>
      <div className={s.carInfo__content}>
        <div className={s.carInfo__places}>
          <div className={s.label}>
            Места <span className={s.count}>11</span>
          </div>
          <div className={s.label}>Стоимость</div>
          <div className={s.carInfo__place}>
            Верхние <span className={s.count}>3</span>
          </div>
          <div className={s.carInfo__place}>
            <span className={s.price}>2 920</span>
            {' '}
            <span className={s.currency}>₽</span>
          </div>
          <div className={s.carInfo__place}>
            Нижние <span className={s.count}>8</span>
          </div>
          <div className={s.carInfo__place}>
            <span className={s.price}>3 530</span>
            {' '}
            <span className={s.currency}>₽</span>
          </div>
        </div>
        <div className={s.carInfo__services}>
          <div className={s.carInfo__label}>
            <span className={s.label}>Обслуживание</span>
            {' '}
            <span className={s.serviceType}>фпк</span>
          </div>
          <ul className={s.servicesList}>
            {/* <li className={s.servicesList__item}>Item</li> */}
            {
              Object.entries(coachServicesMap).map(([type, { icon: Icon, tooltip }]) => {
                return (
                  <li key={type} className={s.servicesList__item}>
                    <ServiceCheckbox tooltip={tooltip}>
                      <Icon />
                    </ServiceCheckbox>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;