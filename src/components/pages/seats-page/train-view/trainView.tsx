import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

import { useGetTrainItemQuery } from "@/API/API";
import { selectCurrentDeparture } from "@/lib/features/routes/currentRouteSlice";
import { useAppSelector } from "@/lib/hooks";
import { ROUTES } from "@/setting";
import CancelTrainButton from "@/UI/buttons/cancelTrainButton";

import CoachInfo from "./components/coach-info/coachInfo";
import CoachPicker from "./components/coach-picker/coachPicker";
import CoachType from "./components/coach-type/coachType";
import SeatsPicker from "./components/seats-picker/seatsPicker";
import TicketCounter from "./components/ticket-counter/ticketCounter";
import TrainBadge from "./components/train-badge/trainBadge";
import ForwardIcon from "./icons/ForwardIcon";
import s from "./trainView.module.sass";

const TrainView = () => {
  const params = useParams();
  const router = useRouter();
  const trainId = params ? Array.isArray(params.trainId) ? params.trainId[0] : params.trainId : '';

  const { data: coachesInfos } = useGetTrainItemQuery(trainId, {
    skip: !trainId,
  });

  const [pickedCoachId, setPickedCoachId] = useState<string>();

  useEffect(() => {
    if (coachesInfos) {
      setPickedCoachId(coachesInfos[0].coach._id);
    }
  }, [coachesInfos]);

  const pickedCoachInfo = useMemo(() => {
    return coachesInfos?.find(coachInfo => coachInfo.coach._id === pickedCoachId);
  }, [pickedCoachId, coachesInfos]);

  const coaches = useMemo(() => {
    return coachesInfos?.map(coachInfo => coachInfo.coach);
  }, [coachesInfos]);

  const handlePickCoach = (id: string) => {
    setPickedCoachId(id);
  };

  console.log('coaches:', coachesInfos);
  console.log('pickedCoachId:', pickedCoachId);
  console.log('pickedCoach:', pickedCoachInfo);

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
      <CoachType selectedType={pickedCoachInfo?.coach.class_type} />
      <CoachPicker coaches={coaches} pickedCoachId={pickedCoachId} onPickCoach={handlePickCoach} />
      <CoachInfo coachInfo={pickedCoachInfo} />
      <SeatsPicker name={pickedCoachInfo?.coach.name || ''} seats={pickedCoachInfo?.seats || []} coachType={pickedCoachInfo?.coach.class_type} />
    </div>
  );
};

export default TrainView;