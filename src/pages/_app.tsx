import "./global.sass";

import { Roboto } from "next/font/google";

import Layout from "../components/layout";

import type { AppProps } from 'next/app';

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "900"],
});

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}