import { ICity } from "@/types/city";

import useFetch, { ResponceData } from "./useFetch";

type ResponceCities = ResponceData<ICity[]>;

export const useFetchCities = (name: string): ResponceCities => {
  return useFetch(
    'https://students.netoservices.ru/fe-diplom/routes/cities',
    {
      name
    }
  );
};
