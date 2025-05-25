import React, { FC } from "react";

import { CoachTypeKeys, TSeat } from "@/types/models";

import CoachTypeSelector from "./coachTypeSelector/coachTypeSelector";
import s from "./seatsPicker.module.sass";

interface Props {
  name: string;
  coachId: string;
  seats: TSeat[];
  coachType: CoachTypeKeys | undefined;
}

const SeatsPicker: FC<Props> = ({ name, coachType, coachId, seats }) => {
  const coachNumber = name.split('-')[1];

  return (
    <div className={s.container}>
      {coachType ? <CoachTypeSelector coachNumber={coachNumber} coachType={coachType} coachId={coachId} seats={seats} /> : <div>Данные по вагону не подгрузились</div>}
    </div>
  );
};

export default SeatsPicker;