import { useParams } from "next/navigation";
import React, { useEffect } from "react";

import { useGetTrainItemQuery } from "@/API/API";

const TrainView = () => {
  const params = useParams();

  const trainId = Array.isArray(params.trainId) ? params.trainId[0] : params.trainId;

  const { data: coaches } = useGetTrainItemQuery(trainId, {
    skip: !trainId,
  });

  console.log(coaches);

  const [trainData, setTrainData] = React.useState(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem('trainData');

    console.log(storedData);
  }, []);

  return (
    <div>
      Train item
    </div>
  );
};

export default TrainView;