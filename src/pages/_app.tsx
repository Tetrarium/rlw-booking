import "./global.sass";

import { ru } from "date-fns/locale/ru";
import { Roboto } from "next/font/google";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

import Layout from "../components/layout";

import type { AppProps } from 'next/app';
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "900"],
});

export default function Home({ Component, pageProps }: AppProps) {
  return (

    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
      <div className={roboto.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </LocalizationProvider>
  );
}