import { FC } from "react";

import { TrainDeatails } from "@/types/models";

import Station from "../station/station";
import s from "./train.module.sass";

interface TrainProps {
  details: TrainDeatails;
  backward?: boolean;
}

const Train: FC<TrainProps> = ({ details }) => {
  const {
    from,
    to,
    duration,
  } = details;

  return (
    <div className={s.details}>
      <Station station={from} />
      <div className={s.direct}>
        Arrow
        <div className={s.duration}>
          {duration}
        </div>
      </div>
      <Station station={to} />
    </div>
  );
};

export default Train;
