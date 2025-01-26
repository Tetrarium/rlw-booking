import React from "react";

import Logo from "@/components/shared/logo/logo";
import Mask from "@/components/shared/mask/mask";

import s from "./header.module.sass";

const Header = () => {
  return (
    <header className={s.header}>
      <Mask>
        <Logo />
      </Mask>
    </header>
  );
};

export default Header;