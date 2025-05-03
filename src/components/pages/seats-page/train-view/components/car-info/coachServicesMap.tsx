import { FC } from "react";

import { CoachServicesKeys } from "@/types/models";

import AirConditionIcon from "./icons/airConditionIcon";
import FeedIcon from "./icons/feedIcon";
import LinensIcon from "./icons/linensIcon";
import WiFiIcon from "./icons/wifiIcon";

export const coachServicesMap: Record<CoachServicesKeys, {
  tooltip: string,
  icon: FC;
}> = {
  air_conditioning: {
    tooltip: 'кондиционер',
    icon: AirConditionIcon,
  },
  wifi: {
    tooltip: 'WI-FI',
    icon: WiFiIcon,
  },
  linens: {
    tooltip: 'белье',
    icon: LinensIcon,
  },
  feed: {
    tooltip: 'питание',
    icon: FeedIcon,
  }
};