import React from "react";

import Wrapper from "@/components/shared/wrapper/wrapper";

import FilterRoutesForm from "../forms/filter-routes-form/filterRoutesForm";
import RoutesContent from "../routes-content/routesContent";
import s from "./routesView.module.sass";

const RoutesView = () => {
  return (
    <Wrapper>
      <main className={s.container}>
        <aside className={s.aside}>
          <FilterRoutesForm />
        </aside>
        <section className={s.content}>
          <RoutesContent />
        </section>
      </main>
    </Wrapper>
  );
};

export default RoutesView;