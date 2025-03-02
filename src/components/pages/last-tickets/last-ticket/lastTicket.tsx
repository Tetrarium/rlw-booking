import React, { FC } from "react";

import { TrainItem } from "@/types/models";

import s from "./lastTicket.module.sass";

interface LastTicketProps {
  item: TrainItem;
}

const LastTicket: FC<LastTicketProps> = ({ item }) => {
  return (
    <div className={s.container}>
      <div className={s.locations}>
        <div className={s.location}>
          <div className={s.city}>{item.departure.from.city.name}</div>
          <div className={s.station}>{item.departure.from.railway_station_name}</div>
        </div>
        <div className={s.location}>
          <div className={s.city}>{item.departure.to.city.name}</div>
          <div className={s.station}>{item.departure.to.railway_station_name}</div>
        </div>
      </div>
      <div className={s.price}>
        от
        {' '}
        <span className={s.sum}>
          {item.min_price.toLocaleString()}
        </span>
        {' '}
        <span className={s.currency}>₽</span>
      </div>
    </div>
  );
};

export default LastTicket;