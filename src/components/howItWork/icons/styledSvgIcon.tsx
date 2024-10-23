import React, { FC, PropsWithChildren } from "react";

import styled from "@emotion/styled";
import { SvgIcon, SvgIconProps } from "@mui/material";

export type IconProps = {
  size?: number,
  borderWidth?: number;
} & SvgIconProps & PropsWithChildren;

const Container = styled
  .div<{ $size: number, $borderWidth: number; }>((
    { $size, $borderWidth }
  ) => ({
    width: $size + 'px',
    height: $size + 'px',
    borderRadius: '50%',
    // border: $borderWidth + 'px solid rgba(229, 229, 229, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(229, 229, 229, 0.2)'
  }));

const StyledSvgIcon: FC<IconProps> = ({
  size = 400,
  borderWidth,
  children,
  ...other
}) => {
  if (!borderWidth) {
    borderWidth = size * 0.075;
  }

  const iconSize = size - (borderWidth * 2);
  console.log(borderWidth);
  console.log(iconSize);
  console.log(size);

  return (
    <Container $size={size} $borderWidth={borderWidth}>
      <SvgIcon
        {...other}
        sx={{
          ...other.sx,
          fontSize: iconSize + 'px'
        }}
      >
        {children}
      </SvgIcon>
    </Container>
  );
};

export default StyledSvgIcon;