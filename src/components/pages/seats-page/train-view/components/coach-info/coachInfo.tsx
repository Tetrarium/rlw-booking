import React from "react";

import { mapEntries } from "@/lib/utils/shared";

import s from "./coachInfo.module.sass";
import { coachServicesMap } from "./coachServicesMap";
import ServiceCheckbox from "./components/service-checkbox/serviceCheckbox";

const CoachInfo = () => {
  return (
    <div className={s.coachInfo}>
      <div className={s.coachInfo__header}>
        <h3 className={s.coachInfo__title}>07</h3>
        <div className={s.coachInfo__subtitle}>Вагон</div>
      </div>
      <div className={s.coachInfo__content}>
        <div className={s.coachInfo__places}>
          <div className={s.label}>
            Места <span className={s.count}>11</span>
          </div>
          <div className={s.label}>Стоимость</div>
          <div className={s.coachInfo__place}>
            Верхние <span className={s.count}>3</span>
          </div>
          <div className={s.coachInfo__place}>
            <span className={s.price}>2 920</span>
            {' '}
            <span className={s.currency}>₽</span>
          </div>
          <div className={s.coachInfo__place}>
            Нижние <span className={s.count}>8</span>
          </div>
          <div className={s.coachInfo__place}>
            <span className={s.price}>3 530</span>
            {' '}
            <span className={s.currency}>₽</span>
          </div>
        </div>
        <div className={s.coachInfo__services}>
          <div className={s.coachInfo__label}>
            <span className={s.label}>Обслуживание</span>
            {' '}
            <span className={s.serviceType}>фпк</span>
          </div>
          <ul className={s.servicesList}>
            {
              mapEntries(coachServicesMap, ([name, { icon: Icon, tooltip }]) => {
                return (
                  <li key={name} className={s.servicesList__item}>
                    <ServiceCheckbox tooltip={tooltip} name={name}>
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

export default CoachInfo;