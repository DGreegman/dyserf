import GlobalLayout from '../layout/GlobalLayout';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'animate.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </ChakraProvider>
  );
}

export default MyApp;
