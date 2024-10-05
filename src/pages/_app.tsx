import Layout from "../components/layout";

import type { AppProps } from 'next/app';

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}