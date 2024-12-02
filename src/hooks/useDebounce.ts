import { EffectCallback, useEffect, useRef } from "react";

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
      clearInterval(handler);
    };
  }, [depValue]);
}