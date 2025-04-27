import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

import { useGetTrainItemQuery } from "@/API/API";
import { selectCurrentDeparture } from "@/lib/features/routes/currentRouteSlice";
import { useAppSelector } from "@/lib/hooks";
import { ROUTES } from "@/setting";
import CancelTrainButton from "@/UI/buttons/cancelTrainButton";

import CarInfo from "./components/car-info/carInfo";
import CarPicker from "./components/car-picker/carPicker";
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

  const [pickedCoachId, setPickedCoachId] = useState<string>();

  useEffect(() => {
    if (coaches) {
      setPickedCoachId(coaches[0].coach._id);
    }
  }, [coaches]);

  const pickedCoach = useMemo(() => {
    return coaches?.find(coach => coach.coach._id === pickedCoachId);
  }, [pickedCoachId, coaches]);

  const cars = useMemo(() => {
    return coaches?.map(coach => coach.coach);
  }, [coaches]);

  const pickCoach = (id: string) => {
    setPickedCoachId(id);
  };

  console.log('coaches:', coaches);
  console.log('pickedCoachId:', pickedCoachId);
  console.log('pickedCoach:', pickedCoach);

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
      <CarType selectedType={pickedCoach?.coach.class_type} />
      <CarPicker cars={cars} pickedCarId={pickedCoachId} pickCar={pickCoach} />
      <CarInfo />
    </div>
  );
};

export default TrainView;