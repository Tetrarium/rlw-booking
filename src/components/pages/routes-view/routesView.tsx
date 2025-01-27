import React from "react";

import Wrapper from "@/components/shared/wrapper/wrapper";

import s from "./routesView.module.sass";

const RoutesView = () => {
  return (
    <Wrapper>
      <main className={s.container}>
        <aside className={s.aside}>
          filters and last tickets
        </aside>
        <section className={s.content}>
          Routes
        </section>
      </main>
    </Wrapper>
  );
};

export default RoutesView;