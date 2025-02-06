import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import { shallowEqual } from "react-redux";

import { selectDefinedRoutesSettings } from "@/lib/features/routes/routesSettingsSlice";
import { useAppSelector } from "@/lib/hooks";

export const useRedirectOnSettingsChange = () => {
  const router = useRouter();
  const settings = useAppSelector(selectDefinedRoutesSettings, shallowEqual);

  const from_city_id = settings?.from_city_id;
  const to_city_id = settings?.to_city_id;

  let queryString = '';

  if (settings) {
    queryString = new URLSearchParams(Object.entries(settings)).toString();
  }

  console.log(queryString);
  useLayoutEffect(() => {
    if (from_city_id || to_city_id) return;


    router.push(`/routes?${queryString}`, undefined, { shallow: true });

  }, [router, from_city_id, to_city_id, queryString]);
};