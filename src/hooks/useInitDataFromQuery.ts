import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import {
    BooleanKeys, booleansSettingsChanged, CitiesKeys, cityChanged, DateKeys, datesChanged,
    limitChanged, offsetChanged, RangeKeys, rangeOneSettingChanged, sortChanged
} from "@/lib/features/routes/routesSettingsSlice";
import { useAppDispatch } from "@/lib/hooks";
import { SortValues } from "@/types/dto";

export function useInitDataFromQuery() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const isFirstLoad = useRef(true);
  console.log('all load');


  useEffect(() => {
    if (!isFirstLoad.current || !router.isReady) return;

    const paramsEntries = searchParams.entries();

    paramsEntries.forEach(([key, value]) => {
      console.log(key, value);
      if (key.endsWith('_city_id')) {
        dispatch(cityChanged({
          key: key as CitiesKeys,
          value
        }));
      } else if (key.startsWith('have_')) {
        dispatch(booleansSettingsChanged({
          key: key as BooleanKeys,
          value: value === 'true'
        }));
      } else if (key.startsWith('date_')) {
        dispatch(datesChanged({
          key: key as DateKeys,
          value
        }));
      } else if (key.endsWith('_from') || key.endsWith('_to')) {
        dispatch(rangeOneSettingChanged({
          key: key as RangeKeys,
          value: Number(value) || undefined,
        }));
      } else if (key === 'offset') {
        dispatch(offsetChanged(Number(value)));
      } else if (key === 'limit') {
        dispatch(limitChanged(Number(value)));
      } else if (key === 'sort') {
        dispatch(sortChanged(value as SortValues));
      }
    });

    console.log('first load');
    console.log(searchParams.toString());

    isFirstLoad.current = false;
  }, [searchParams, router.isReady, dispatch]);
}