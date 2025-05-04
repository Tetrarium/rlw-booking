import React, { FC } from "react";

import { mapEntries } from "@/lib/utils/shared";
import { CoachInfo as TCoachInfo } from "@/types/models";

import s from "./coachInfo.module.sass";
import { coachServicesMap } from "./coachServicesMap";
import ServiceCheckbox from "./components/service-checkbox/serviceCheckbox";

interface Props {
  coachInfo: TCoachInfo | undefined;
}

const CoachInfo: FC<Props> = ({ coachInfo }) => {
  if (!coachInfo) {
    return <div>Данные по вагону не подгрузились</div>;
  }

  const { coach, seats } = coachInfo;

  console.log(coach);
  console.log(seats);

  return (
    <div className={s.coachInfo}>
      <div className={s.coachInfo__header}>
        <h3 className={s.coachInfo__title}>{coach.name.split('-')[1]}</h3>
        <div className={s.coachInfo__subtitle}>Вагон</div>
      </div>
      <div className={s.coachInfo__content}>
        <div className={s.coachInfo__places}>
          <div className={s.label}>
            Места <span className={s.count}>{coach.available_seats}</span>
          </div>
          <div className={s.label}>Стоимость</div>
          <div className={s.coachInfo__place}>
            Верхние <span className={s.count}>3</span>
          </div>
          <div className={s.coachInfo__place}>
            <span className={s.price}>{coach.top_price}</span>
            {' '}
            <span className={s.currency}>₽</span>
          </div>
          <div className={s.coachInfo__place}>
            Нижние <span className={s.count}>8</span>
          </div>
          <div className={s.coachInfo__place}>
            <span className={s.price}>{coach.bottom_price}</span>
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