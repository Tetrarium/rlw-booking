import { useSearchParams } from "next/navigation";
import React from "react";

import { useGetRoutesQuery } from "@/API/API";

import RoutesHeader from "./components/routes-header/routesHeader";
import RoutesList from "./components/routes-list/routesList";
import s from "./routesBlock.module.sass";

const RoutesBlock = () => {
  const searchParams = useSearchParams();
  console.log(searchParams.toString());
  const searchStr = searchParams.toString();
  console.log(searchStr);
  const { data, isLoading, error } = useGetRoutesQuery(searchStr);
  console.log('Loading: ', isLoading);
  console.log('error: ', error);
  console.log('data: ', data);

  return (
    <div className={s.container}>
      <RoutesHeader count={data?.total_count || 0} />
      <RoutesList />
    </div>
  );
};

export default RoutesBlock;