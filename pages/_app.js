import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.css'
import 'antd/dist/reset.css';
import 'aos/dist/aos.css'
import '../styles/styleBasic.scss'
import React from 'react';
import ThemeSC from '@/Components/ThemsSC';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import Head from 'next/head';
import Container from './container';

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <ThemeSC>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Provider store={store}>
            <Container >
              <Component {...pageProps} />

            </Container>
          </Provider>
        </Hydrate>
      </QueryClientProvider>
    </ThemeSC>
  )

}

export default MyApp
