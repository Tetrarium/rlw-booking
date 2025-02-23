import { SeatsInfo } from "@/types/models";

export type TrainCarClassesMap = {
  [key in keyof Required<SeatsInfo>]: {
    title: string;
  };
};

export const classesMap: TrainCarClassesMap = {
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
  },
};