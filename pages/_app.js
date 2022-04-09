import Router from 'next/router'
import '../styles/globals.css'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"

Router.events.on("routeChangeStart", nprogress.start)
Router.events.on("routeChangeError", nprogress.done)
Router.events.on("routeChangeComplete", nprogress.done)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
