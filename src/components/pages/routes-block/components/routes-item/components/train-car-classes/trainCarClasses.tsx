import React, { FC } from "react";

import { SeatsInfo, TrainItem } from "@/types/models";

import s from "./trainCarClasses.module.sass";

type TrainCarClassesMap = {
  [key in keyof Required<SeatsInfo>]: {
    title: string;
  };
};

const classesMap: TrainCarClassesMap = {
  first: {
    title: 'Люкс',
  },
  second: {
    title: 'Купе',
  },
  third: {
    title: 'Плацкарт'
  },
  fourth: {
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
      {/* 1. Исходный */}
      {/* {(Object.entries(availableSeats) as [
        keyof typeof availableSeats,
        number
      ][])
        .map(([key, value]) => (
        <div key={key}>{classesMap[key].title}: {value}</div>
      ))} */}

      {/* 2. Типизированный Entries */}
      {/* {typedEntries(availableSeats).map(([key, value]) => (
        <div key={key}>{classesMap[key].title}: {value}</div>
      ))} */}

      {/* 3. Универсальный маппинг  */}
      {
        mapEntries(availableSeats, ([key, value]) => (
          <div key={key}>{classesMap[key].title}: {value}</div>
        ))
      }
    </div>
  );
};

export default TrainCarClasses;

function typedEntries<T extends object>(obj: T): Array<[keyof T, T[keyof T]]> {
  return Object.entries(obj) as Array<[keyof T, T[keyof T]]>;
}

function mapEntries<T extends object, V>(
  obj: T,
  cb: (
    entry: [keyof T, T[keyof T]],
    index: number,
    arr: Array<[keyof T, T[keyof T]]>
  ) => V
): V[] {
  return typedEntries(obj).map(cb);
}