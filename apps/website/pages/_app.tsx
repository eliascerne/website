import { AppProps } from 'next/app';
import Head from 'next/head';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { Toaster } from 'react-hot-toast';

import './styles.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <title>Elias Cerne</title>
      </Head>
      <Toaster position="top-right" />
      <main className="app">{getLayout(<Component {...pageProps} />)}</main>
    </>
  );
}

export default CustomApp;
