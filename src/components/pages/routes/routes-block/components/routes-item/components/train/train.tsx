import { FC } from "react";

import { formatDuration } from "@/lib/utils/date";
import { TrainDetails } from "@/types/models";

import Station from "../station/station";
import ArrowLeftIcon from "./icons/arrowLeftIcon";
import ArrowRightIcon from "./icons/arrowRightIcon";
import s from "./train.module.sass";

interface TrainProps {
  details: TrainDetails;
  backward?: boolean;
}

const Train: FC<TrainProps> = ({ details, backward }) => {
  const {
    from,
    to,
    duration,
  } = details;

  return (
    <div className={s.details}>
      <Station station={from} />
      <div className={s.direct}>
        {backward
          ? <ArrowLeftIcon />
          : <ArrowRightIcon />
        }
        <div className={s.duration}>
          {formatDuration(duration)}
        </div>
      </div>
      <Station station={to} />
    </div>
  );
};

export default Train;
