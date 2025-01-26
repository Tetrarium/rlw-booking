import React, { FC, PropsWithChildren } from "react";

import s from "./mask.module.sass";

const Mask: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.mask}>
      {children}
    </div>
  );
};

export default Mask;