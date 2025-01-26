import React from "react";

import Wrapper from "../wrapper/wrapper";
import s from "./logo.module.sass";

const Logo = () => {
  return (
    <div className={s.logo}>
      <Wrapper>
        Лого
      </Wrapper>
    </div>
  );
};

export default Logo;