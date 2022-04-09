import Head from 'next/head'
import Footer from '../Footer'
import Header from '../Header'
import Hero from '../Hero'

export default function Layout({ children, pageTitle }) {
    return (
        <>
            <Head>
                <meta charSet='UTF-8' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{pageTitle} | Badokan</title>
                <meta name="theme-color" content="#ffc107" />
                <meta name="description" content="Rekomendasi restoran untukmu" />
                <link rel="icon" href="/favicon.png" />
                <link rel="preload" id="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" as="style" onLoad="this.rel='stylesheet'" />
                <noscript>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" />
                </noscript>
            </Head>
            <Header />
            <Hero />
            <main id='main-content'>
                {children}
            </main>
            <Footer />
        </>
    )
}
