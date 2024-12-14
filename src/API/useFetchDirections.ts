import { City } from "@/types/models";

import useFetch, { ResponceData } from "./useFetch";

type ResponceCities = ResponceData<City[]>;

export const useFetchCities = (name: string): ResponceCities => {
  // if (name.length < 2) {
  //   return {
  //     data: null,
  //     isLoading: false,
  //     error: null,
  //   };
  // }
  return useFetch(
    `https://students.netoservices.ru/fe-diplom/routes/cities?name=${name}`,
    {
      name
    }
  );
};
