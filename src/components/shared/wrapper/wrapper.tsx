import React, { FC, PropsWithChildren } from "react";

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='wrapper'>
      {children}
    </div>
  );
};

export default Wrapper;