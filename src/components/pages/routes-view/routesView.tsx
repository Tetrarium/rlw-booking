import React from "react";

import Wrapper from "@/components/shared/wrapper/wrapper";

import FilterRoutes from "../filter-routes/filterRoutes";
import LastTickets from "../last-tickets/lastTickets";
import RoutesContent from "../routes-block/routesBlock";
import s from "./routesView.module.sass";

const RoutesView = () => {
  return (
    <Wrapper>
      <main className={s.container}>
        <aside className={s.aside}>
          <FilterRoutes />
          <LastTickets />
        </aside>
        <section className={s.content}>
          <RoutesContent />
        </section>
      </main>
    </Wrapper>
  );
};

export default RoutesView;