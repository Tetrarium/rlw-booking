import Head from "next/head";
import React, { ReactNode } from "react";

import Footer from "./footer/footer";
import Header from "./header/header";

export default function Layout({ children }: { children: ReactNode; }) {
  return (
    <>
      <Head>
        <title>Сервис продажи билетов</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}