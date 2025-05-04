import classNames from "classnames";
import React, { FC } from "react";

import { mapEntries } from "@/lib/utils/shared";

import s from "./coachType.module.sass";
import { coachTypesMap } from "./coachTypesMap";

interface Props {
  selectedType?: string;
}

const CoachType: FC<Props> = ({ selectedType }) => {
  return (
    <div className={s.coachType}>
      <h3 className={s.coachType__title}>Тип вагона</h3>
      <ul className={s.coachType__types}>
        {
          mapEntries(coachTypesMap, ([type, { icon: Icon, label }]) => {
            const coachTypeClass = classNames(s.coachType__type, {
              [s.selected]: selectedType === type
            });

            const labelClass = classNames(s.coachType__label, {
              [s.selected]: selectedType === type
            });

            return (
              <li key={type} className={coachTypeClass}>
                <Icon
                  size="3.5rem"
                />
                <span className={labelClass}>{label}</span>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default CoachType;