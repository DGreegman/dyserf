import Aos from 'aos';
import Head from 'next/head';
import Script from 'next/script';
import Nav from '../components/Nav/Nav';
import { ChildProps } from '../models/childrenProps';
import { globalStyles } from '../styles/customStyles';

const GlobalLayout = (props: ChildProps) => {
  typeof window !== 'undefined' && Aos.init();

  return (
    <>
      <Head>
        <title>DYSERF - Accelerating innovations & Business Growth</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Dyserf is an innovative solution that builds digital experiences, which accelerate business growth and make life activities easier and faster. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="DYSERF" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Script
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
        strategy={'beforeInteractive'}
      />

      <div
        style={{
          width: globalStyles.width,
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        <Nav />
        {props.children}
      </div>
    </>
  );
};

export default GlobalLayout;
