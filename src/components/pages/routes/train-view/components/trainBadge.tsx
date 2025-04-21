import React, { FC } from "react";

import { TrainDetails } from "@/types/models";

import s from "./trainBadge.module.sass";

interface Props {
  train: TrainDetails;
}

const TrainBadge: FC<Props> = ({ train }) => {


  return (
    <div className={s.container}>
      <div className={s.logo}></div>
      <div className={s.details}>{train.train.name}</div>
      <div className={s.timings}></div>
      <div className={s.duration}></div>
    </div>
  );
};

export default TrainBadge;