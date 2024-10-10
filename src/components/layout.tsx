import React, { ReactNode } from "react";

import Header from "./header/header";

export default function Layout({ children }: { children: ReactNode; }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>this is a footer</footer>
    </>
  );
}