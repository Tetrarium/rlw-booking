import React from "react";

import Carousel from "./carousel/carousel";
import s from "./feedbacks.module.sass";

const Feedbacks = () => {
  return (
    <div className={s.container}>
      <div className="wrapper">
        <div className={s.inner}>
          <h2 className={s.title}>Отзывы</h2>
          <div className={s.content}>
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;