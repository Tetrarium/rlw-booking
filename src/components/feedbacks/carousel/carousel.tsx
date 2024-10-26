import React, { FC } from "react";

import s from "./carousel.module.sass";
import Control from "./control";
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
  {
    id: 3,
    avatar: '/images/avatars/ava2.png',
    name: 'Вася Пупкин',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quia, voluptas, architecto laborum, qui sapiente pariatur voluptate vel et ut aperiam rerum accusantium molestiae hic repellat excepturi reprehenderit perferendis? Aspernatur?',
  },
  {
    id: 4,
    avatar: '/images/avatars/ava2.png',
    name: 'Пупка Васькин',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quia, voluptas, architecto laborum, qui sapiente pariatur voluptate vel et ut aperiam rerum accusantium molestiae hic repellat excepturi reprehenderit perferendis? Aspernatur?',
  },
  {
    id: 5,
    avatar: '/images/avatars/ava2.png',
    name: 'Боба Абоба',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quia, voluptas, architecto laborum, qui sapiente pariatur voluptate vel et ut aperiam rerum accusantium molestiae hic repellat excepturi reprehenderit perferendis? Aspernatur?',
  },
  {
    id: 6,
    avatar: '/images/avatars/ava2.png',
    name: 'Тама Татама',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quia, voluptas, architecto laborum, qui sapiente pariatur voluptate vel et ut aperiam rerum accusantium molestiae hic repellat excepturi reprehenderit perferendis? Aspernatur?',
  },
  {
    id: 7,
    avatar: '/images/avatars/ava2.png',
    name: 'Анкновн Андефайнович',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quia, voluptas, architecto laborum, qui sapiente pariatur voluptate vel et ut aperiam rerum accusantium molestiae hic repellat excepturi reprehenderit perferendis? Aspernatur?',
  },
];

const Carousel: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.slides}>
        {slides.map(slide => <Slide key={slide.id} {...slide} />)}
      </div>
      <div className={s.controls}>
        <Control />
      </div>
    </div>
  );
};

export default Carousel;

