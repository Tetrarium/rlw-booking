import React, { FC } from "react";

import { SeatCoords } from "../seatsCoordsMaps";
import s from "./seat.module.sass";

interface Props {
  coords: SeatCoords;
  available: boolean;
  seatNumber: number;
}

const Seat: FC<Props> = ({ coords, seatNumber }) => {
  return (
    <g
      key={seatNumber}
      className={s.seat}
    >
      <rect
        {...coords}
        stroke="white"
        strokeWidth={1}
        className={s.rect}
        fill="white"
      />
      <text
        x={coords.x + coords.width / 2}
        y={coords.y + coords.height / 2}
        fontSize={12}

        textAnchor="middle"
        dominantBaseline="middle"

        fill="black"
        className={s.text}
      >{seatNumber}</text>
    </g>
  );
};

export default Seat;