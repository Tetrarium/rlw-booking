import React, { FC } from "react";

import { formatTravelDuration } from "@/lib/utils/date";

import ClockIcon from "./clockIcon";
import s from "./durationPath.module.sass";

interface Props {
  duration: number;
}

const DurationPath: FC<Props> = ({ duration }) => {
  return (
    <div className={s.durationPath}>
      <div className={s.durationPath__icon}>
        <ClockIcon />
      </div>
      <div className={s.durationPath__duration}>
        {formatTravelDuration(duration)}
      </div>
    </div >
  );
};

export default DurationPath;