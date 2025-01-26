import React from "react";

import Logo from "@/components/shared/logo/logo";
import Mask from "@/components/shared/mask/mask";
import Nav from "@/components/shared/nav/nav";
import Wrapper from "@/components/shared/wrapper/wrapper";

import SearchRoutesForm from "../forms/search-routes-form.tsx/searchRoutesForm";
import s from "./header.module.sass";

const Header = () => {
  return (
    <header className={s.header}>
      <Mask>
        <Logo />
        <Nav />
        <Wrapper>
          <div className={s.banner}>
            <SearchRoutesForm />
          </div>
        </Wrapper>
      </Mask>
    </header>
  );
};

export default Header;