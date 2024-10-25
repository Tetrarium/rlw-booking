import React, { FC } from "react";

import s from "./control.module.sass";

const Control: FC = () => {
  return (
    <div className={s.container}>
      <Dot isActive={true} />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </div>
  );
};

export default Control;

interface DotProps {
  isActive?: boolean;
}

const Dot: FC<DotProps> = ({ isActive = false }) => {

  const className = s.dot + (isActive ? ` ${s.dot_active}` : '');

  return <div
    className={className}
  />;
};