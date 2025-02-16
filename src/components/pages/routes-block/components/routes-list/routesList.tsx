import React, { FC } from "react";

import { TrainItem } from "@/types/models";

import s from "./routesList.module.sass";

interface RoutesListProps {
  items: TrainItem[];
}

const RoutesList: FC<RoutesListProps> = ({ items }) => {
  console.log(items);

  return (
    <div className={s.container}>
      Routes List
    </div>
  );
};

export default RoutesList;