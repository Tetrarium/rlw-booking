import React, { FC, ReactNode } from "react";

import FilterSwitch from "@/UI/switchers/filterSwitch";

import s from "./filterComfortItem.module.sass";

interface FilterComfortItemProps {
  icon: ReactNode;
  name: string;
  checked?: boolean;
  onChange?: () => void;
}
const FilterComfortItem: FC<FilterComfortItemProps> = ({ icon, name, ...switchProps }) => {
  return (
    <div className={s.container}>
      <div className={s.icon}>
        {icon}
      </div>
      <div className={s.name}>
        {name}
      </div>
      <FilterSwitch {...switchProps} />
    </div>
  );
};

export default FilterComfortItem;