import React, { FC } from "react";

import s from "./carousel.module.sass";
import Slide, { ISlide } from "./slide";

const slides: ISlide[] = [
  {
    id: 1,
    avatar: '/images/avatars/ava1.png',
    name: 'Екатерина Вальнова',
    text: 'Доброжелательные подсказки \nна всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.',
  },
  {
    id: 2,
    avatar: '/images/avatars/ava2.png',
    name: 'Евгений Стрыкало',
    text: 'СМС-сопровождение до посадки. Сразу после оплаты ж / д билетов и за 3 часа до отправления мы пришлем вам СМС - напоминание о поездке.',
  },
];

const Carousel: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.slides}>
        {slides.map(slide => <Slide key={slide.id} {...slide} />)}
      </div>
      <div className={s.control}>Controls</div>
    </div>
  );
};

export default Carousel;

