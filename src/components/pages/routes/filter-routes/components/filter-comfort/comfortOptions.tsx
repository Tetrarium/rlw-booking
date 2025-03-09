import { ReactNode } from "react";

import ExpressIcon from "@/components/shared/icons/expressIcon";
import TrainFirstClassIcon from "@/components/shared/icons/trainFirstClassIcon";
import TrainFourthClassIcon from "@/components/shared/icons/trainFourthClassIcon";
import TrainSecondClassIcon from "@/components/shared/icons/trainSecondClassIcon";
import TrainThirdClassIcon from "@/components/shared/icons/trainThirdClassIcon";
import WiFiIcon from "@/components/shared/icons/wifiIcon";
import { BooleanKeys } from "@/lib/features/routes/routesSettingsSlice";

export interface ComfortOption {
  key: BooleanKeys;
  name: string;
  icon: ReactNode;
}

export const comfortOptions: ComfortOption[] = [
  { key: "have_second_class", name: "Купе", icon: <TrainSecondClassIcon /> },
  { key: "have_third_class", name: "Плацкарт", icon: <TrainThirdClassIcon /> },
  { key: "have_fourth_class", name: "Сидячий", icon: <TrainFourthClassIcon /> },
  { key: "have_first_class", name: "Люкс", icon: <TrainFirstClassIcon /> },
  { key: "have_wifi", name: "Wi-Fi", icon: <WiFiIcon /> },
  { key: "have_express", name: "Экспресс", icon: <ExpressIcon /> },
];