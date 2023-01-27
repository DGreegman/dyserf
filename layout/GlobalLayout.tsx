import Aos from 'aos';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import { Footer, Nav } from '../components';
import { ChildProps } from '../models';
import { globalStyles } from '../styles';

const GlobalLayout = ({ children }: ChildProps) => {
  typeof window !== 'undefined' && Aos.init();

  return (
    <>
      <Head>
        <title>DYSERF - Accelerating innovations & Business Growth</title>

        <meta
          name='description'
          content='Dyserf is an innovative solution that builds digital experiences, which accelerate business growth and make life activities easier and faster. '
        />
        <meta
          name='keywords'
          content='Dyserf, Digital,Development,web design, Front end design, Blockchain. Web Development, Mobile app'
        />
        <meta name='author' content='Dyserf - Chigbo Ifeanyi James' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black' />
        <meta name='apple-mobile-web-app-title' content='DYSERF' />
      </Head>

      <div
        style={{
          width: globalStyles.width,
          minHeight: globalStyles.fullHeight,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Nav />
        <Flex direction='column' width={globalStyles.width} flex={1}>
          {children}
        </Flex>

        <Footer />
      </div>
    </>
  );
};

export default GlobalLayout;
