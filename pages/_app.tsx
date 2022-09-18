import GlobalLayout from '../layout/GlobalLayout';
import ShowNav from '../context/Sidebar';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'animate.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ShowNav>
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </ShowNav>
    </ChakraProvider>
  );
}

export default MyApp;
