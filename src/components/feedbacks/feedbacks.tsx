import React from "react";

// import Carousel from "./carousel/carousel";
import s from "./feedbacks.module.sass";
import Slider from "./slider/Slider";

const slides = [
  1,
  2,
  3,
  4,
  5,
  6,
  7
];

const Feedbacks = () => {
  return (
    <div className={s.container}>
      <div className="wrapper">
        <div className={s.inner}>
          <h2 className={s.title}>Отзывы</h2>
          <div className={s.content}>
            {/* <Carousel /> */}
            <Slider slides={slides} slidesPerPage={2} slotsProps={{
              slides: {
                sx: {
                  mb: 3
                }
              },
              slide: {
                sx: {
                  border: '2px dashed gray',
                  padding: '10px',
                  fontSize: '30px'
                }
              },
              dot: {
                size: 30
              }
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;