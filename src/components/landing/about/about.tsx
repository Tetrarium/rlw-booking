import React, { FC } from "react";

import s from "./about.module.sass";

const About: FC = () => {
  return (
    <div className='wrapper' id="about-us">
      <div className={s.container}>
        <h2 className={s.title}>О нас</h2>
        <div className={s.content}>
          <p className={s.text}>Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем
            все больше людей заказывают жд билеты через интернет.</p>
          <p className={s.text}>
            Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать?
            Мы расскажем о преимуществах заказа через интернет.</p>
          <p className={`${s.text} ${s.text_bold}`}>
            Покупать жд билеты дешево можно за 90 суток до отправления поезда.<br />
            Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;