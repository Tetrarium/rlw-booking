import React, { FC } from "react";

import s from "./trainDetails.module.sass";

interface Props {
  name: string,
  from: string,
  to: string,
}

const TrainDetails: FC<Props> = ({ name, from, to }) => {
  return (
    <div className={s.trainDetails}>
      <div className={s.trainDetails__name}>{name}</div>
      <div className={s.trainDetails__city}>{from} {'->'}</div>
      <div className={s.trainDetails__city}>{to}</div>
    </div>
  );
};

export default TrainDetails;