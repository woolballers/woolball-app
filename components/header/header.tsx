import Head from 'next/head'
import {
  HEADER_TITLE,
  HEADER_DESCRIPTION,
  HEADER_IMAGE,
} from '../constants/header'

export default function Header() {
  return (
    <Head>
      <title>{HEADER_TITLE}</title>
      <link rel="icon" href="/favicons/favicon.ico" />
      <meta name="title" content={HEADER_TITLE} />
      <meta name="description" content={HEADER_DESCRIPTION} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://woolball.xyz/" />
      <meta property="og:title" content={HEADER_TITLE} />
      <meta property="og:description" content={HEADER_DESCRIPTION} />
      <meta property="og:image" content={HEADER_IMAGE} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://woolball.xyz/" />
      <meta property="twitter:title" content={HEADER_TITLE} />
      <meta property="twitter:description" content={HEADER_DESCRIPTION} />
      <meta property="twitter:image" content={HEADER_IMAGE}></meta>
    </Head>
  )
}
