import React, { FC } from "react";

import TrainDirection from "@/components/shared/train-direction/trainDirection";
import { TrainDetails as TrainDetailsType } from "@/types/models";

import DurationPath from "./components/duration-path/durationPath";
import TrainDetails from "./components/train-details/trainDetails";
import TrainIcon from "./icons/trainIcon";
import s from "./trainBadge.module.sass";

interface Props {
  train: TrainDetailsType;
}

const TrainBadge: FC<Props> = ({ train }) => {


  return (
    <div className={s.trainBadge}>
      <div className={s.logo}>
        <TrainIcon />
      </div>
      <div className={s.details}>
        <TrainDetails
          name={train.train.name}
          from={train.from.city.name}
          to={train.to.city.name}
        />
      </div>
      <div className={s.stations}>
        <TrainDirection details={train} />
      </div>
      <div className={s.duration}>
        <DurationPath duration={train.duration} />
      </div>
    </div>
  );
};

export default TrainBadge;