import classNames from "classnames";
import React, { FC } from "react";

import { TCoach } from "@/types/models";

import s from "./coachPicker.module.sass";

interface Props {
  coaches?: TCoach[],
  pickedCoachId?: string,
  onPickCoach: (id: string) => void;
}

const CoachPicker: FC<Props> = ({ coaches = [], pickedCoachId, onPickCoach }) => {
  return (
    <div className={s.coachPicker}>
      <h3 className={s.coachPicker__title}>Вагоны</h3>
      <span className={s.coachPicker__cars}>
        {coaches.map(({ _id, name }) => {
          const coachClass = classNames(s.coachPicker__car, {
            [s.selected]: pickedCoachId === _id
          });

          return (
            <button
              className={coachClass}
              key={_id}
              onClick={() => onPickCoach(_id)}
            >{name}</button>
          );
        })}
      </span>
      <span className={s.coachPicker__hint}>
        Нумерация вагонов начинается с головы поезда
      </span>
    </div>
  );
};

export default CoachPicker;