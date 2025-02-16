import "./global.sass";
import "react-toastify/dist/ReactToastify.css";

import { ru } from "date-fns/locale/ru";
import { Roboto } from "next/font/google";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import { makeStore } from "@/lib/store";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

// import Layout from "../components/landing/layout";

import type { AppProps } from 'next/app';
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "900"],
});

const store = makeStore();

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
        <div className={roboto.className}>
          {/* <Layout> */}
          <Component {...pageProps} />
          {/* </Layout> */}
          <ToastContainer position="top-left" autoClose={5000} />
        </div>
      </LocalizationProvider>
    </Provider>
  );
}