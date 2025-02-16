import { ChangeEvent, FC, useCallback } from "react";

import { limitChanged } from "@/lib/features/routes/routesSettingsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import s from "./routesLimitItem.module.sass";

interface LimitItemProps {
  limit: number;
}

const RoutesLimitItem: FC<LimitItemProps> = ({ limit }) => {
  const dispatch = useAppDispatch();
  const current = useAppSelector(state => state["routes-settings"].limit);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(limitChanged(limit));
    }
  }, [dispatch, limit]);

  return (
    <label className={s.limit}>
      <input
        type="radio"
        name="limit"
        value={limit}
        checked={current === limit}
        onChange={handleChange}
      />
      <span>{limit}</span>
    </label>
  );
};

export default RoutesLimitItem;