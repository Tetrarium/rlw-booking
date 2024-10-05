import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode; }) {
  return (
    <>
      <header>this is a header</header>
      <main>{children}</main>
      <footer>this is a footer</footer>
    </>
  );
}