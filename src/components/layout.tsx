import React, { ReactNode } from "react";

import Footer from "./footer/footer";
import Header from "./header/header";

export default function Layout({ children }: { children: ReactNode; }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}