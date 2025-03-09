import React, { FC, PropsWithChildren } from "react";

import Wrapper from "@/components/shared/wrapper/wrapper";

import LastTickets from "../../last-tickets/lastTickets";
import FilterRoutes from "../filter-routes/filterRoutes";
import s from "./routesView.module.sass";

const RoutesView: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper>
      <main className={s.container}>
        <aside className={s.aside}>
          <FilterRoutes />
          <LastTickets />
        </aside>
        <section className={s.content}>
          {children}
        </section>
      </main>
    </Wrapper>
  );
};

export default RoutesView;