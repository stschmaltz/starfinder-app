import { Container } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactNode } from 'react';
import styles from '../styles/layout.module.css';

export const siteTitle = 'starfinder.app';

export default function Layout(input: {
  children: ReactNode | undefined;
  home: boolean;
}) {
  const { children } = input;

  return (
    <Container mt={10} maxW={'40rem'}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="App to help organize exercises" />
        <meta
          property="og:image"
          content={`https://starfinder.app/images/profile.png`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}></header>
      <main>{children}</main>
    </Container>
  );
}
