import { useRouter } from "next/router";
import React, { FC } from "react";

import TrainDirection from "@/components/shared/train-direction/trainDirection";
import { setCurrentDeparture } from "@/lib/features/routes/currentRouteSlice";
import { useAppDispatch } from "@/lib/hooks";
import { TrainItem } from "@/types/models";
import ChooseTrainButton from "@/UI/buttons/chooseTrainButton";

import TrainCarClasses from "./components/train-car-classes/trainCarClasses";
import TrainOptions from "./components/train-options/trainOptions";
import TrainIcon from "./icons/trainIcon";
import s from "./routesItem.module.sass";

interface RoutesItemProps {
  item: TrainItem;
}

const RoutesItem: FC<RoutesItemProps> = ({ item }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  console.log(item);

  const handleChooseTrain = () => {
    sessionStorage.setItem("trainData", JSON.stringify(item));
    dispatch(setCurrentDeparture(item.departure));
    router.push(`/routes/${item.departure._id}`, "", {
      scroll: false,
    });
  };

  return (
    <div className={s.container}>
      <div className={s.left}>
        <div className={s.logo}>
          <TrainIcon />
        </div>
        <div className={s.name}>
          {item.departure.train.name}
        </div>
        <div className={s.path}>
          {item.departure.from.city.name} {'->'}<br />{item.departure.to.city.name}
          {item.arrival &&
            '->\n' + item.arrival.from.city.name + '->' + item.departure.from.city.name
          }
        </div>
      </div>
      <div className={s.right}>
        <div className={s.trains}>
          <TrainDirection details={item.departure} showDuration />
          {item.arrival && <TrainDirection details={item.arrival} backward showDuration />}
        </div>
        <div className={s.info}>
          <div className={s.classes}>
            <TrainCarClasses
              seatsInfo={item.available_seats_info}
              pricesInfo={item.departure.price_info}
            />
          </div>
          <div className={s.options}>
            <TrainOptions />
          </div>
          <div className={s.control}>
            <ChooseTrainButton onClick={handleChooseTrain} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutesItem;
