import { useLayoutEffect, useState } from "react";

export type ResponceData<T> = {
  data: null;
  isLoading: true;
  error: null;
} | {
  data: T;
  isLoading: false;
  error: null;
} | {
  data: null;
  isLoading: false;
  error: Error;
};

type QueryParams = {
  [key: string]: string | number;
};

export default function useFetch<T>(url: string, queryParams?: QueryParams): ResponceData<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const searchParams = new URLSearchParams();

  if (queryParams) {
    for (const [k, v] of Object.entries(queryParams)) {
      if (v) {
        searchParams.set(k, v.toString());
      }
    }
  }

  const fullUrl = searchParams.size > 0
    ? url + `?${searchParams.toString()}`
    : url;

  useLayoutEffect(() => {
    setIsLoading(true);
    setData(null);
    setError(null);

    Promise.resolve()
      .then(() => fetch(fullUrl))
      .then((data) => data.json())
      .then((data: T) => setData(data))
      .catch(e => setError(e))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error } as ResponceData<T>;
}