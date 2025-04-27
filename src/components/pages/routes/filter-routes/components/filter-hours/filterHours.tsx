import React, { FC, PropsWithChildren } from "react";

import s from "./filterHours.module.sass";

const FilterHours: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.hours}>
      {children}
    </div>
  );
};

export default FilterHours;