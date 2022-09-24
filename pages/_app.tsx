import GlobalLayout from '../layout/GlobalLayout';
import ShowSideNavContext from '../context/Sidebar';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'animate.css';

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
