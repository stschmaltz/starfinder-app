import { ColorModeScript } from '@chakra-ui/react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { DocumentContext } from 'next/document';
import { theme } from '../styles/theme';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const page = await ctx.renderPage();
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, ...page };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content="Starfinder App" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Starfinder App" />
          <meta
            name="description"
            content="Organize your workouts, join the fam."
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#E63946" />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          {/* <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#5bbad5"
          /> */}
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=optional"
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://shanefindsthestars.app" />
          <meta name="twitter:title" content="Starfinder App" />
          <meta
            name="twitter:description"
            content="Organize your workouts, join the fam."
          />
          <meta
            name="twitter:image"
            content="https://shanefindsthestars.app/images/profile.png"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="shanefindsthestars.app" />
          <meta
            property="og:description"
            content="Placeholder app for getting started quickly."
          />
          <meta property="og:site_name" content="Starfinder App" />
          <meta property="og:url" content="https://shanefindsthestars.app" />
          <meta
            property="og:image"
            content="https://shanefindsthestars.app/images/profile.png"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
