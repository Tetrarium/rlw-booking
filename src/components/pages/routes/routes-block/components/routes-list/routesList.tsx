import React, { FC } from "react";

import { TrainItem } from "@/types/models";

import RoutesItem from "../routes-item/routesItem";
import s from "./routesList.module.sass";

interface RoutesListProps {
  items: TrainItem[];
}

const RoutesList: FC<RoutesListProps> = ({ items }) => {
  console.log(items);

  return (
    <div className={s.container}>
      {items.map(item => (
        <RoutesItem key={item.departure._id} item={item} />
      ))}
    </div>
  );
};

export default RoutesList;