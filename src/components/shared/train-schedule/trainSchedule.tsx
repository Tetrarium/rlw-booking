import { FC } from "react";

import { formatDuration } from "@/lib/utils/date";
import { TrainDetails } from "@/types/models";

import Station from "./components/station-item/station";
import ArrowLeftIcon from "./icons/arrowLeftIcon";
import ArrowRightIcon from "./icons/arrowRightIcon";
import s from "./trainSchedule.module.sass";

interface Props {
  details: TrainDetails;
  backward?: boolean;
  showDuration?: boolean;
}

const TrainSchedule: FC<Props> = ({ details, backward, showDuration }) => {
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
        {showDuration &&
          <div className={s.duration}>
            {formatDuration(duration)}
          </div>
        }
      </div>
      <Station station={to} />
    </div>
  );
};

export default TrainSchedule;
