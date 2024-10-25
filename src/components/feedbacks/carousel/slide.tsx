import { FC } from "react";

import s from "./slide.module.sass";

export interface ISlide {
  id: number;
  avatar: string;
  name: string;
  text: string;
}

const Slide: FC<ISlide> = ({ avatar, name, text }) => {
  return (
    <div className={s.container}>
      <div className={s.avatar}>
        <img src={avatar} alt={name} />
      </div>
      <div className={s.comment}>
        <h3 className={s.title}>{name}</h3>
        <p className={s.text}>{text}</p>
      </div>
    </div>
  );
};

export default Slide;