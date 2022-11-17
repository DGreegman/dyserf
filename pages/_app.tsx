import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { ShowSideNavContext } from '../context';
import { GlobalLayout } from '../layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ShowSideNavContext>
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </ShowSideNavContext>
    </ChakraProvider>
  );
}

export default MyApp;
