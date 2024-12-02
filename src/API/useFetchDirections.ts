import { ICity } from "@/types/city";

import useFetch, { ResponceData } from "./useFetch";

type ResponceCities = ResponceData<ICity[]>;

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
