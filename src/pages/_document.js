import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  } 

  render() {
    return (
      <Html lang="pt-BR">
        <title> Lucas Sacomani Zenerato </title>
        <Head>
          <meta charSet="utf-8" />
          <meta name='application-name' content='PWA App' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='PWA App' />
          <meta name='description' content='Best PWA App in the world' />
                    
          <link rel='apple-touch-icon' sizes='180x180' href='/static/pwa.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/pwa.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/pwa.png' />
          <meta name="theme-color" content="#000"/>
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