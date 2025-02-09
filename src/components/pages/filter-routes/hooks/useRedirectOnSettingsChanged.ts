import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import { selectQueryString } from "@/lib/features/routes/routesSettingsSlice";
import { useAppSelector } from "@/lib/hooks";

export function useRedirectOnSettingsChanged() {
  const router = useRouter();
  const params = useSearchParams();
  const queryString = useAppSelector(selectQueryString);

  const paramsRef = useRef(params.toString());
  console.log('queryString:', queryString);
  console.log('paramsRef.current:', paramsRef.current);

  useEffect(() => {
    // if (!paramsRef.current) return;

    // if (queryString.length === 0) {
    //   router.push({
    //     pathname: '/'
    //   }, undefined, { shallow: true });
    // }

    if (paramsRef.current !== queryString) {
      router.push({
        pathname: router.pathname,
        query: queryString
      }, undefined, { shallow: true });

      paramsRef.current = queryString;
    }
  }, [queryString, router]);
}