import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to aftersale!</title>
      </Head>
      <main className="app">
        <h1 className="aftersale_title">AFTERSALE APP</h1>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
