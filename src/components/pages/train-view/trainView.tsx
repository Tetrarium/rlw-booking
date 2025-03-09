import { useParams } from "next/navigation";
import React from "react";

import { useGetTrainItemQuery } from "@/API/API";

const TrainView = () => {
  const params = useParams();

  const trainId = Array.isArray(params?.trainId) ? params.trainId[0] : params?.trainId;

  const { data } = useGetTrainItemQuery(trainId, {
    skip: !trainId
  });

  console.log(data);

  return (
    <div>
      Its Train
    </div>
  );
};

export default TrainView;