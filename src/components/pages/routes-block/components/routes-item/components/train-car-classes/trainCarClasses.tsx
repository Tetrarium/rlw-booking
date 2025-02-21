import React, { FC } from "react";

import { RoutesSettingsKeys } from "@/lib/features/routes/routesSettingsSlice";
import { TrainItem } from "@/types/models";

import s from "./trainCarClasses.module.sass";

type TrainCarClassesMap = {
  [K in RoutesSettingsKeys as K extends `have_${infer Prefix}_class`
  ? Prefix
  : never
  ]: {
    name: K,
    title: string,
  }
};

const classesMap: TrainCarClassesMap = {
  first: {
    name: 'have_first_class',
    title: 'Люкс',
  },
  second: {
    name: 'have_second_class',
    title: 'Купе',
  },
  third: {
    name: 'have_third_class',
    title: 'Плацкарт'
  },
  fourth: {
    name: 'have_fourth_class',
    title: 'Сидячий',
  }
};

interface TrainProps {
  train: TrainItem;
}

const TrainCarClasses: FC<TrainProps> = ({ train }) => {
  const {
    available_seats_info: availableSeats,
  } = train;

  return (
    <div className={s.container}>
      {Object.entries(availableSeats).map(([key, value]) => (
        <div key={key}>{classesMap[key as keyof TrainCarClassesMap].title}: {value}</div>
      ))}
    </div>
  );
};

export default TrainCarClasses;