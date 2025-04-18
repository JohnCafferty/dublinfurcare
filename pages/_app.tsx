import '../styles/globals.css';
import type { AppProps } from 'next/app';
import WhatsAppButton from '../components/WhatsAppButton';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppButton />
    </>
  );
}

export default MyApp;
