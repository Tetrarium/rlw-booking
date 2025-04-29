import { FC } from "react";

import AirConditionIcon from "./icons/airConditionIcon";
import FeedIcon from "./icons/feedIcon";
import LinensIcon from "./icons/linensIcon";
import WiFiIcon from "./icons/wifiIcon";

export const coachServicesMap: Record<string, {
  tooltip: string,
  icon: FC;
}> = {
  airCondition: {
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