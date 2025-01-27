import React from "react";

import Logo from "@/components/shared/logo/logo";
import Mask from "@/components/shared/mask/mask";
import Nav from "@/components/shared/nav/nav";

import SearchRoutesForm from "../forms/search-routes-form.tsx/searchRoutesForm";
import OrderSteps from "../order-steps/orderSteps";
import s from "./header.module.sass";

const Header = () => {
  return (
    <header className={s.header}>
      <Mask>
        <Logo />
        <Nav />
        <div className={s.banner}>
          <SearchRoutesForm />
        </div>
        <OrderSteps currentStep={1} />
      </Mask>
    </header>
  );
};

export default Header;