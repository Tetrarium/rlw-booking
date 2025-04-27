import React from "react";

import s from "./ticketCounter.module.sass";

const TicketCounter = () => {
  return (
    <div className={s.ticketCounter}>
      <h3 className={s.ticketCounter__title}>Количество билетов</h3>
      <div className={s.ticketCounter__grid}>
        <div className={s.ticketCounter__item}>
          <div className={s.ticketCounter__count}>
            Взрослых - 2
          </div>
          <div className={s.ticketCounter__hint}>
            Можно добавить еще 3 пассажиров
          </div>
        </div>
        <div className={s.ticketCounter__item}>
          <div className={s.ticketCounter__count}>
            Детских - 1
          </div>
          <div className={s.ticketCounter__hint}>
            Можно добавить еще 2 детей до 10 лет.
            Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%
          </div>
        </div>
        <div className={s.ticketCounter__item}>
          <div className={s.ticketCounter__count}>
            Детских &quot;без места&quot; - 0
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCounter;