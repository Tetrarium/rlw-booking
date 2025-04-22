import { FC } from "react";

import { extractTime } from "@/lib/utils/date";
import { StationDetails } from "@/types/models";

import s from "./station.module.sass";

interface StationProps {
  station: StationDetails;
}
const Station: FC<StationProps> = ({ station }) => {
  return (
    <div className={s.station}>
      <div className={s.time}>{extractTime(station.datetime)}</div>
      <div className={s.city}>{station.city.name}</div>
      <div className={s.name}>{station.railway_station_name}</div>
    </div>
  );
};

export default Station;