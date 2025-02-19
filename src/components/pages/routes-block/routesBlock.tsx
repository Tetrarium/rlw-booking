import classNames from "classnames";
import { useSearchParams } from "next/navigation";
import React from "react";

import { useGetRoutesQuery } from "@/API/API";
import { usePopulateCities } from "@/hooks/usePopulateCities";

import RoutesHeader from "./components/routes-header/routesHeader";
import RoutesList from "./components/routes-list/routesList";
import s from "./routesBlock.module.sass";

const RoutesBlock = () => {
  const searchParams = useSearchParams();
  const searchStr = searchParams.toString();

  const { data, isLoading, isFetching } = useGetRoutesQuery(searchStr, {
    skip: !searchStr,
  });

  const totalCount = data?.total_count || 0;
  const routes = data?.items || [];

  usePopulateCities(routes[0]);

  const contentClass = classNames(
    s.content,
    {
      [s.faded]: isLoading || isFetching,
    }
  );

  return (
    <div className={s.container}>
      <div className={contentClass}>
        <RoutesHeader count={totalCount} />
        <RoutesList items={routes} />
      </div>
      {(isLoading || isFetching) &&
        <div className={s.loading}>Загрузка...</div>
      }
    </div>
  );
};

export default RoutesBlock;