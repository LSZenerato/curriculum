import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <title> teste </title>
        <Head>
          <meta charSet="utf-8" />
          <meta name='application-name' content='PWA App' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='PWA App' />
          <meta name='description' content='Best PWA App in the world' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
                    
          <link rel='apple-touch-icon' sizes='180x180' href='/static/pwa.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/pwa.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/pwa.png' />
          <meta name="theme-color" content="#ffffff"/>
          <link rel='manifest' href='/manifest.json' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument