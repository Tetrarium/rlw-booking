import React from "react";

import { TrainClassIconProps } from "@/components/shared/icons/trainClassIcon";
import TrainFirstClassIcon from "@/components/shared/icons/trainFirstClassIcon";
import TrainFourthClassIcon from "@/components/shared/icons/trainFourthClassIcon";
import TrainSecondIcon from "@/components/shared/icons/trainSecondClassIcon";
import TrainThirdClassIcon from "@/components/shared/icons/trainThirdClassIcon";

interface CarType {
  label: string;
  icon: React.FunctionComponent<TrainClassIconProps>;
}

export const carTypes: Record<string, CarType> = {
  fourth: {
    label: 'Сидячий',
    icon: TrainFourthClassIcon,
  },
  third: {
    label: 'Плацкарт',
    icon: TrainThirdClassIcon,
  },
  second: {
    label: 'Купе',
    icon: TrainSecondIcon,
  },
  first: {
    label: 'Люкс',
    icon: TrainFirstClassIcon,
  },
};
