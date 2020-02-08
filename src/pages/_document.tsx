import React from 'react'
import { ServerStyleSheet } from 'styled-components'

import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(context) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = context.renderPage

    try {
      // eslint-disable-next-line no-param-reassign
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => properties =>
            sheet.collectStyles(<App {...properties} />),
        })
      const initialProperties = await Document.getInitialProps(context)
      return {
        ...initialProperties,
        styles: (
          <>
            {initialProperties.styles}
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
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
