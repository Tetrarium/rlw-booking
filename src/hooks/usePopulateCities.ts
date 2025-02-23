import { useEffect } from "react";

import { changeDepartureCity, changeDestinationCity } from "@/lib/features/routes/locationsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { TrainItem } from "@/types/models";

export function usePopulateCities(train: TrainItem | undefined) {
  const { departure, destination } = useAppSelector(state => state.locations);
  const dispatch = useAppDispatch();

  const { _id: departureCityId, name: departureCityName } = departure;
  const { _id: destinationCityId, name: destinationCityName } = destination;

  const trainDeparture = train?.departure;

  const cityIdFrom = trainDeparture?.from.city._id;
  const cityNameFrom = trainDeparture?.from.city.name;
  const cityIdTo = trainDeparture?.to.city._id;
  const cityNameTo = trainDeparture?.to.city.name;

  useEffect(() => {
    if (
      (departureCityId === '' || departureCityName === '' || destinationCityId === '' || destinationCityName === '')
      &&
      (cityIdFrom && cityIdTo && cityNameFrom && cityNameTo)
    ) {
      dispatch(changeDepartureCity({
        _id: cityIdFrom,
        name: cityNameFrom,
      }));
      dispatch(changeDestinationCity({
        _id: cityIdTo,
        name: cityNameTo,
      }));
    }
  }, [cityIdFrom, cityIdTo, cityNameFrom, cityNameTo, departureCityId, departureCityName, destinationCityId, destinationCityName, dispatch]);
}