import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

import { useGetTrainItemQuery } from "@/API/API";
import { selectCurrentDeparture } from "@/lib/features/routes/currentRouteSlice";
import { useAppSelector } from "@/lib/hooks";
import { ROUTES } from "@/setting";
import CancelTrainButton from "@/UI/buttons/cancelTrainButton";

import CarType from "./components/car-type/carType";
import TicketCounter from "./components/ticket-counter/ticketCounter";
import TrainBadge from "./components/train-badge/trainBadge";
import ForwardIcon from "./icons/ForwardIcon";
import s from "./trainView.module.sass";

const TrainView = () => {
  const params = useParams();
  const router = useRouter();
  const trainId = params ? Array.isArray(params.trainId) ? params.trainId[0] : params.trainId : '';

  const { data: coaches } = useGetTrainItemQuery(trainId, {
    skip: !trainId,
  });

  console.log('coaches:', coaches);

  const trainData = useAppSelector(selectCurrentDeparture);
  console.log('trainData:', trainData);


  useEffect(() => {
    if (!trainData) {
      router.push(ROUTES.home);
    }
  }, [trainData, router]);

  if (!trainData) return null;

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className={s.trainView}>
      <div className={s.trainView__control}>
        <ForwardIcon />
        <CancelTrainButton onClick={handleGoBack} />
      </div>
      <TrainBadge train={trainData} />
      <TicketCounter />
      <CarType />
    </div>
  );
};

export default TrainView;