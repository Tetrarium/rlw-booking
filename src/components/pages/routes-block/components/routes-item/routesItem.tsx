import React, { FC } from "react";

import { TrainItem } from "@/types/models";

import TrainCarClasses from "./components/train-car-classes/trainCarClasses";
import Train from "./components/train/train";
import TrainIcon from "./icons/trainIcon";
import s from "./routesItem.module.sass";

interface RoutesItemProps {
  item: TrainItem;
}

const RoutesItem: FC<RoutesItemProps> = ({ item }) => {
  return (
    <div className={s.container}>
      <div className={s.left}>
        <div className={s.logo}>
          <TrainIcon />
        </div>
        <div className={s.name}>
          {item.departure.train.name}
        </div>
        <div className={s.path}>
          {item.departure.from.city.name} {'->'}<br />{item.departure.to.city.name}
          {item.arrival &&
            '->\n' + item.arrival.from.city.name + '->' + item.departure.from.city.name
          }
        </div>
      </div>
      <div className={s.right}>
        <div className={s.trains}>
          <Train details={item.departure} />
          {item.arrival && <Train details={item.arrival} backward />}
        </div>
        <div className={s.info}>
          <div className={s.classes}>
            <TrainCarClasses train={item} />
          </div>
          <div className={s.options}></div>
          <div className={s.control}></div>
        </div>
      </div>
    </div>
  );
};

export default RoutesItem;
