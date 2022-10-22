import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { WhitelabelSharedTestSecond } from "@whitelabel-monorepo-test/whitelabel/shared-test-second"

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to aftersale!</title>
      </Head>
      <WhitelabelSharedTestSecond />
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
