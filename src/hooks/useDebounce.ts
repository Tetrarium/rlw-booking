import { EffectCallback, useEffect, useRef, useState } from "react";

export function useDebounce(callback: EffectCallback, depValue: string | number, delay: number) {
  const savedCallback = useRef(callback);
  const savedDelay = useRef(delay);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    savedDelay.current = delay;
  }, [delay]);

  useEffect(() => {
    const handler = setTimeout(() => {
      savedCallback.current();
    }, savedDelay.current);

    return () => {
      clearTimeout(handler);
    };
  }, [depValue]);
}

export function useDebounce2<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}