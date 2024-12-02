import Image from "next/image";
import { FC } from "react";

import s from "./feedbackCard.module.sass";

export interface FeedbackCardProps {
  id: number;
  avatar: string;
  name: string;
  text: string;
}

const FeedbackCard: FC<FeedbackCardProps> = ({ avatar, name, text }) => {
  return (
    <div className={s.container}>
      <div className={s.avatar}>
        <Image src={avatar} alt={name} width={205} height={205} />
      </div>
      <div className={s.comment}>
        <h3 className={s.title}>{name}</h3>
        <p className={s.text}>{text}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;