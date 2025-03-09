import React, { FC, useCallback } from "react";

import { pageChanged, selectRoutesPage } from "@/lib/features/routes/routesSettingsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Pagination, PaginationItem, PaginationRenderItemParams, SxProps } from "@mui/material";

import s from "./routesPagination.module.sass";

interface RoutesPaginationProps {
  totalCount: number;
}

const sxProps: SxProps = {
  fontSize: "1.875rem",
  color: "#928F94",
  width: "5.375rem",
  height: "4.625rem",
  margin: "0 .5rem",
  borderWidth: "2px",
  ":hover": {
    borderColor: "#FFA800",
    color: "#FFA800",
  },
  "&.Mui-selected": {
    color: "#FFFFFF",
    bgcolor: "#FFA800",
    borderColor: "#FFA800",
    pointerEvents: "none",
  }
};

const makePaginationItem = (item: PaginationRenderItemParams) => (
  <PaginationItem
    sx={sxProps}
    {...item}
  />
);

const RoutesPagination: FC<RoutesPaginationProps> = ({ totalCount }) => {
  const { limit } = useAppSelector(state => state["routes-settings"]);
  const page = useAppSelector(selectRoutesPage);
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (_: unknown, nextPage: number) => {
      console.log(nextPage);
      dispatch(pageChanged(nextPage));
    },
    [dispatch],
  );

  const countPages = Math.ceil(totalCount / limit);

  return (
    <div className={s.pagination}>
      <Pagination
        shape="rounded"
        variant="outlined"
        count={countPages}
        page={page}
        onChange={handleChange}
        renderItem={makePaginationItem}
      />
    </div>
  );
};

export default RoutesPagination;