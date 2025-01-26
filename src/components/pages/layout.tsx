import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";

import Footer from "../shared/footer/footer";
import Header from "./header/header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Сервис продажи билетов</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;