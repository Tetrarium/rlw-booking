import Head from "next/head";
import React, { ReactNode } from "react";

import Footer from "../shared/footer/footer";
import Header from "./header/header";

export default function Layout({ children }: { children: ReactNode; }) {
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
}