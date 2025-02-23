import React, { FC } from "react";

import { mapEntries } from "@/lib/utils/shared";
import { PriceInfo, SeatsInfo } from "@/types/models";

import { classesMap } from "./trainCarClasses.map";
import s from "./trainCarClasses.module.sass";

interface TrainProps {
  seatsInfo: SeatsInfo;
  pricesInfo: PriceInfo;
}

const TrainCarClasses: FC<TrainProps> = ({ seatsInfo, pricesInfo }) => {
  return (
    <>
      {
        mapEntries(seatsInfo, ([key, value]) => (
          <div className={s.seat} key={key} >
            <div className={s.name}>{classesMap[key].title}</div>
            <div className={s.count}>{value}</div>
            <div className={s.price}>
              от
              {' '}
              <span className={s.sum}>
                {pricesInfo[key]?.bottom_price.toLocaleString('ru-RU')}
              </span>
              {' '}
              <span className={s.currency}>₽</span>
            </div>
          </div>
        ))
      }
    </>
  );
};

export default TrainCarClasses;
