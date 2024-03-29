import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Elias Cerne</title>
      </Head>
      <body className="app">
        <Component {...pageProps} />
      </body>
    </>
  );
}

export default CustomApp;
