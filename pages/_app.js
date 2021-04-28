import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@/components/GlobalStyles'
import theme from '@/theme'

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <title>
                        Placeholder Title
                    </title>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                    <meta
                        name="description"
                        content="Placeholder description"
                    />
                    <link
                        rel="icon"
                        type="image/svg+xml"
                        href="/icon.svg"
                    />
                </Head>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <Component {...pageProps} />
                </ThemeProvider>
            </>
        )
    }
}
