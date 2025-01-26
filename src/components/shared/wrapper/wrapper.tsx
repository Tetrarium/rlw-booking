import React, { FC, PropsWithChildren } from "react";

import s from "./wrapper.module.sass";

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      {children}
    </div>
  );
};

export default Wrapper;