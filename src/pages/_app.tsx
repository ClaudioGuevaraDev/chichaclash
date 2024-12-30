import 'primereact/resources/themes/lara-dark-amber/theme.css';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { PrimeReactProvider } from 'primereact/api';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <PrimeReactProvider>
      <Component {...pageProps} />
    </PrimeReactProvider>
  );
}
