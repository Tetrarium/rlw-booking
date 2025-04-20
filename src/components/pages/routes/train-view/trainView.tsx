import { useParams } from "next/navigation";
import React, { useEffect } from "react";

import { useGetTrainItemQuery } from "@/API/API";
import { TrainItem } from "@/types/models";

import TrainBadge from "./components/trainBadge";

const TrainView = () => {
  const params = useParams();

  const trainId = params ? Array.isArray(params.trainId) ? params.trainId[0] : params.trainId : '';

  const { data: coaches } = useGetTrainItemQuery(trainId, {
    skip: !trainId,
  });

  console.log(coaches);

  const [trainData, setTrainData] = React.useState<TrainItem | null>(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem('trainData');

    if (storedData) {
      setTrainData(JSON.parse(storedData));
    }

  }, []);

  console.log(trainData);
  return (
    <div>
      {trainData && <TrainBadge train={trainData.departure} />}
    </div>
  );
};

export default TrainView;