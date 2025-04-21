import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

import { useGetTrainItemQuery } from "@/API/API";
import { selectCurrentDeparture } from "@/lib/features/routes/currentRouteSlice";
import { useAppSelector } from "@/lib/hooks";
import { ROUTES } from "@/setting";

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

  return (
    <div>
      {/* {trainData && <TrainBadge train={trainData.departure} />} */}
    </div>
  );
};

export default TrainView;