import Script from 'next/script';
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href='https://unpkg.com/aos@2.3.1/dist/aos.css'
          rel='stylesheet'
        />
        <link rel='icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src='https://unpkg.com/aos@2.3.1/dist/aos.js'
          strategy='beforeInteractive'
        />
      </body>
    </Html>
  );
};

export default Document;
