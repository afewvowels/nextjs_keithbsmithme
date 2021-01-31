import { useState } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fal } from '@fortawesome/pro-light-svg-icons'

import Layout from '@components/templates/Layout'
import Loading from '@components/templates/Loading'

import '../styles/globals.css'

library.add(fal)

function MyApp({ Component, pageProps }) {
  const [loading, set_loading] = useState(false)

  Router.events.on('routeChangeStart', () => set_loading(true))
  Router.events.on('routeChangeComplete', () => set_loading(false))
  Router.events.on('routeChangeError', () => set_loading(false))

  return (<>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/svg" sizes="32x32" href="/user-circle-solid.svg"/>
      <link rel="manifest" href="/manifest.json"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>

      // Adobe FontKit link
      <link rel="stylesheet" href="https://use.typekit.net/hbk6mte.css" />

      <title>Portfolio | Keith</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
      <Loading loading={loading} />
    </Layout>
  </>)
}

export default MyApp
