import { useSearchParams } from "next/navigation";
import React from "react";

import { useGetRoutesQuery } from "@/API/API";

// import { ResponseError, RoutesResponse, TrainItem } from "@/types/models";
import RoutesHeader from "./components/routes-header/routesHeader";
import RoutesList from "./components/routes-list/routesList";
import s from "./routesBlock.module.sass";

// const checkError = (data: RoutesResponse | undefined): data is ResponseError => {
//   return (data as ResponseError)?.error !== undefined;
// };

const RoutesBlock = () => {
  const searchParams = useSearchParams();
  const searchStr = searchParams.toString();

  const { data, isLoading, error } = useGetRoutesQuery(searchStr);

  console.log('Loading: ', isLoading);
  console.log('data: ', data);

  if (error) {
    console.error(error);
  }

  // let totalCount = 0;
  // let isError = false;
  // let routes: TrainItem[] = [];
  // let errorMsg = '';

  // if (checkError(data)) {
  //   isError = true;
  //   errorMsg = data?.error || '';
  // } else {
  //   if (data) {
  //     totalCount = data.total_count;
  //     routes = data.items;
  //   }
  // }

  const totalCount = data?.total_count || 0;
  const routes = data?.items || [];

  return (
    <div className={s.container}>
      <RoutesHeader count={totalCount} />
      <RoutesList items={routes} />
    </div>
  );
};

export default RoutesBlock;