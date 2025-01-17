import React, { useEffect, useState } from "react";

import Slider from "../../../UI/slider/Slider";
import FeedbackCard, { FeedbackCardProps } from "./feedbackCard";
import s from "./feedbacks.module.sass";

const Feedbacks = () => {
  const [windowWidth, setWindowWidth] = useState<number>(1000);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={s.container}>
      <div className="wrapper">
        <div className={s.inner}>
          <h2 className={s.title}>Отзывы</h2>
          <div className={s.content}>
            <Slider
              slides={feedbackCards}
              slidesPerPage={windowWidth > 900 ? 2 : 1}
              slotsProps={{
                slides: {
                  sx: {
                    mb: 3
                  }
                },
                slide: {
                  sx: {
                    padding: 1.25,
                  }
                },
                dot: {
                  size: 20,
                  gap: 10,
                  hoverColor: '#C4C4C4',
                  activeColor: '#C4C4C4',
                  defaultColor: '#E5E5E5',
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;

const feedbacks: FeedbackCardProps[] = [
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

const feedbackCards = feedbacks.map(feedback => <FeedbackCard
  key={feedback.id}
  {...feedback}
/>);