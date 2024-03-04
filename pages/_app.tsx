import Head from 'next/head';
import '../src/styles/globals.scss';
import { dom } from '@fortawesome/fontawesome-svg-core';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style>{dom.css()}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
