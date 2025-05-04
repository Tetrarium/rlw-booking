import React, { FC, PropsWithChildren } from "react";

import { coachServiceSelector, toggleCoachService } from "@/lib/features/order/coachServicesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { CoachServicesKeys } from "@/types/models";
import { Tooltip } from "@mui/material";

import s from "./serviceCheckbox.module.sass";

interface Props {
  tooltip: string;
  name: CoachServicesKeys,
}

const ServiceCheckbox: FC<Props & PropsWithChildren> = ({ tooltip, name, children }) => {
  const dispatch = useAppDispatch();
  const serviceSelector = useAppSelector(coachServiceSelector(name));

  return (
    <Tooltip
      title={tooltip}
      slotProps={{
        tooltip: {
          sx: {
            fontSize: '1rem',
            fontWeight: 400,
            backgroundColor: '#F5F4F6',
            color: '#292929',
            borderRadius: '0.375rem',
            boxShadow: '0 0.25rem 0.25rem rgba(0, 0, 0, .4)'
          }
        },
        arrow: {
          sx: {
            color: '#F5F4F6'
          }
        }
      }}
      arrow
    >
      <label className={s.container}>
        <input type="checkbox" className={s.checkbox} checked={serviceSelector} onChange={() => dispatch(toggleCoachService(name))} />
        <span className={s.icon}>
          {children}
        </span>
      </label>
    </Tooltip>
  );
};

export default ServiceCheckbox;