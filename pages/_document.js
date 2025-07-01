import { Html, Head, Main, NextScript } from 'next/document'
import Analytics from '../components/atoms/Analytics'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Hind:wght@400;700&family=Lato&display=swap"
        />
        <Analytics />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 