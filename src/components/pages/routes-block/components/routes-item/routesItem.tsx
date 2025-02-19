import React, { FC } from "react";

import { TrainItem } from "@/types/models";

import s from "./routesItem.module.sass";

interface RoutesItemProps {
  item: TrainItem;
}

const RoutesItem: FC<RoutesItemProps> = ({ item }) => {
  return (
    <div className={s.container}>
      <div className={s.left}>
        <div className={s.logo}>Logo</div>
        <div className={s.name}>
          {item.departure.train.name}
        </div>
        <div className={s.path}>
          {item.departure.from.city.name} {'->'} {item.departure.to.city.name}
          {item.arrival &&
            '->' + item.arrival.from.city.name + '->' + item.departure.from.city.name
          }
        </div>
      </div>
      <div className={s.right}>
        <div className={s.content}>
          <div className={s.directions}>
          </div>
          <div className={s.info}>
            <div className={s.classes}></div>
            <div className={s.options}></div>
          </div>
        </div>
        <div className={s.control}></div>
      </div>
    </div>
  );
};

export default RoutesItem;