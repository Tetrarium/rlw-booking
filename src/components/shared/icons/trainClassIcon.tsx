import React, { FC, PropsWithChildren } from "react";

import { SvgIcon } from "@mui/material";

export interface TrainClassIconProps {
  size?: string;
}

const TrainClassIcon: FC<TrainClassIconProps & PropsWithChildren> = ({
  size = '1.5rem',
  children,
}) => {
  return (
    <SvgIcon sx={{
      display: 'block',
      width: size,
      height: size,
    }}>
      {children}
    </SvgIcon>
  );
};

export default TrainClassIcon;