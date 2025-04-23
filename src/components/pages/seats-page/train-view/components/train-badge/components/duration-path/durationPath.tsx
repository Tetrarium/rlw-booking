import React, { FC } from "react";

import { getFormatTravelDurationParts } from "@/lib/utils/date";

import ClockIcon from "./clockIcon";
import s from "./durationPath.module.sass";

interface Props {
  duration: number;
}

const DurationPath: FC<Props> = ({ duration }) => {
  return (
    <div className={s.durationPath}>
      <ClockIcon />
      <div className={s.durationPath__duration}>
        {getFormatTravelDurationParts(duration)
          .map(part => <span key={part} className={s.durationPath__part}>{part}</span>)
        }
      </div>
    </div >
  );
};

export default DurationPath;